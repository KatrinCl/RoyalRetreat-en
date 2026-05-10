import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Bookings = ({ isAdmin }) => {
  const [bookings, setBookings] = useState([])

  const fetchAllBookings = async () => {
    if (!isAdmin) {
      return null
    }

    try {
      const response = await axios.get(backendUrl + '/api/admin/get-all-bookings', { withCredentials: true })
      if (response.data.success) {
        setBookings(response.data.bookings)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const response = await axios.post(`${backendUrl}/api/admin/status`, { bookingId, status: newStatus }, { withCredentials: true })

      if (response.data.success) {
        toast.success('Status updated')
        setBookings(prevBookings => prevBookings.map(booking => (booking.id === bookingId ? { ...booking, status: newStatus } : booking)))
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Status update error:', error)
      toast.error(error.response?.data?.message || 'Status update error')
    }
  }

  useEffect(() => {
    fetchAllBookings()
  }, [isAdmin])

  const formatDate = dateString => {
    if (!dateString) return '—'
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch {
      return '—'
    }
  }

  const formatShortDate = dateString => {
    if (!dateString) return '—'
    try {
      return new Date(dateString).toLocaleDateString('en-US')
    } catch {
      return '—'
    }
  }

  const calculateDays = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24))
  }

  const getBookingType = booking => {
    if (booking.roomName) return 'Hotel'
    if (booking.houseName) return 'House'
    return 'Not specified'
  }

  const getBookingName = booking => {
    return booking.roomName || booking.houseName || 'Not specified'
  }

  const getBookingStatus = booking => {
    const now = new Date()
    const checkIn = new Date(booking.checkIn)
    const checkOut = new Date(booking.checkOut)

    if (booking.status) {
      switch (booking.status) {
        case 'completed':
          return { text: '✅ Completed', class: 'bg-gray-100 text-gray-600', badge: 'completed' }
        case 'confirmed':
          return { text: '🟢 Confirmed', class: 'bg-green-100 text-green-600', badge: 'confirmed' }
        case 'cancelled':
          return { text: '❌ Cancelled', class: 'bg-red-100 text-red-600', badge: 'cancelled' }
        case 'pending':
          return { text: '⏳ Pending', class: 'bg-yellow-100 text-yellow-600', badge: 'pending' }
        default:
          return { text: '🔵 Upcoming', class: 'bg-blue-100 text-blue-600', badge: 'upcoming' }
      }
    }

    if (checkOut < now) return { text: '✅ Completed', class: 'bg-gray-100 text-gray-600', badge: 'completed' }
    if (checkIn <= now) return { text: '🟢 Active', class: 'bg-green-100 text-green-600', badge: 'active' }
    return { text: '🔵 Upcoming', class: 'bg-blue-100 text-blue-600', badge: 'upcoming' }
  }

  if (!isAdmin) {
    return (
      <div className='p-6 text-center'>
        <p className='text-red-500'>Access denied. Administrator rights required.</p>
      </div>
    )
  }

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Bookings ({bookings.length})</h1>
        <div className='flex gap-2'>
          <span className='px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded'>🔵 Upcoming</span>
          <span className='px-2 py-1 bg-green-100 text-green-600 text-xs rounded'>🟢 Confirmed</span>
          <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded'>✅ Completed</span>
          <span className='px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded'>⏳ Pending</span>
          <span className='px-2 py-1 bg-red-100 text-red-600 text-xs rounded'>❌ Cancelled</span>
        </div>
      </div>

      {bookings.length === 0 ? (
        <p className='text-gray-500'>No bookings</p>
      ) : (
        <div className='flex flex-col gap-6'>
          {bookings.map(booking => {
            const status = getBookingStatus(booking)
            const days = booking.days || calculateDays(booking.checkIn, booking.checkOut)

            return (
              <div key={booking.id} className='border border-gray-200 rounded-lg p-6 bg-white shadow-sm'>
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center gap-4'>
                    <img src={assets.parcel_icon} alt='Booking' className='w-10 h-10' />
                    <div>
                      <p className='font-semibold text-lg'>No.{String(booking.id).padStart(6, '0')}</p>
                      <p className='text-gray-500 text-sm'>Created: {formatDate(booking.createdAt)}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='text-xl font-bold text-green-600'>${booking.totalPrice}</p>
                    <p className='text-sm text-gray-500'>{days} nights</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                  <div className='space-y-3'>
                    <div>
                      <p className='font-semibold text-lg text-gray-800'>{getBookingName(booking)}</p>
                      <p className='text-gray-600 capitalize'>{getBookingType(booking)}</p>
                    </div>
                    <div className='space-y-2'>
                      <p className='text-gray-700'>
                        <span className='font-medium'>Dates:</span> {formatShortDate(booking.checkIn)} → {formatShortDate(booking.checkOut)}
                      </p>
                      <p className='text-gray-700'>
                        <span className='font-medium'>Guests:</span> {booking.guests} people
                      </p>
<p className='text-gray-700'>
  <span className='font-medium'>Price per night:</span> ${booking.price}
</p>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div>
                      <p className='font-semibold text-gray-800'>Contact Information</p>
                      <p className='text-gray-700'>👤 {booking.name}</p>
                      <p className='text-gray-700'>📞 {booking.phone}</p>
                    </div>
                    {booking.image && booking.image !== 'default-room.png' && (
                      <div>
                        <p className='font-medium text-gray-800 mb-2'>Image:</p>
                        <img src={booking.image} alt='Object' className='w-20 h-20 object-cover rounded-lg border' />
                      </div>
                    )}
                  </div>
                </div>

                <div className='bg-gray-50 p-4 rounded-lg mb-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                    <div>
                      <span className='text-gray-500'>User ID:</span>
                      <span className='ml-2 font-medium'>{booking.userId}</span>
                    </div>
                    <div>
                      <span className='text-gray-500'>Current status:</span>
                      <span className='ml-2 font-medium capitalize'>{booking.status || 'pending'}</span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-200'>
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${status.class}`}>{status.text}</span>

                    <div className='flex flex-wrap gap-2'>
                      {status.badge !== 'completed' && (
                        <button onClick={() => updateBookingStatus(booking.id, 'completed')} className='px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors'>
                          Complete
                        </button>
                      )}
                      {status.badge !== 'confirmed' && (
                        <button onClick={() => updateBookingStatus(booking.id, 'confirmed')} className='px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors'>
                          Confirm
                        </button>
                      )}
                      {status.badge !== 'cancelled' && (
                        <button onClick={() => updateBookingStatus(booking.id, 'cancelled')} className='px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors'>
                          Cancel
                        </button>
                      )}
                      {status.badge !== 'pending' && (
                        <button onClick={() => updateBookingStatus(booking.id, 'pending')} className='px-3 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors'>
                          Pending
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Bookings
