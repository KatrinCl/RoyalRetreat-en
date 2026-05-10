import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Bookings = () => {
  const { axios, backendUrl } = useContext(AppContext)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/bookings/get-bookings`, {
          withCredentials: true,
        })
        if (data.success) {
          setBookings(data.bookings)
        }
      } catch (error) {
        console.error('Error loading bookings', error)
      }
    }

    fetchBookings()
  }, [])

  const getBookingStatus = booking => {
    const now = new Date()
    const checkIn = new Date(booking.checkIn)
    const checkOut = new Date(booking.checkOut)

    if (booking.status) {
      switch (booking.status) {
        case 'completed':
          return { text: '✅ Completed', class: 'bg-gray-100 text-gray-600 border-gray-300' }
        case 'confirmed':
          return { text: '🟢 Confirmed', class: 'bg-green-100 text-green-600 border-green-300' }
        case 'cancelled':
          return { text: '❌ Cancelled', class: 'bg-red-100 text-red-600 border-red-300' }
        case 'pending':
          return { text: '⏳ Pending confirmation', class: 'bg-yellow-100 text-yellow-600 border-yellow-300' }
        default:
          return { text: '🔵 Processing', class: 'bg-blue-100 text-blue-600 border-blue-300' }
      }
    }

    if (checkOut < now) return { text: '✅ Completed', class: 'bg-gray-100 text-gray-600 border-gray-300' }
    if (checkIn <= now) return { text: '🟢 Active', class: 'bg-green-100 text-green-600 border-green-300' }
    return { text: '🔵 Upcoming', class: 'bg-blue-100 text-blue-600 border-blue-300' }
  }

  const getBookingType = booking => {
    if (booking.roomName) return 'Hotel'
    if (booking.houseName) return 'House'
    return 'Not specified'
  }

  const getBookingName = booking => {
    return booking.roomName || booking.houseName || 'Not specified'
  }

  return (
    <div className='min-h-screen p-6 text-sm md:text-base'>
      <div className='max-w-4xl'>
        <h1 className='text-2xl font-bold mb-6'>My Bookings</h1>

        {bookings.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>You have no bookings yet</p>
            <p className='text-gray-400 mt-2'>Book a room or house to see them here</p>
          </div>
        ) : (
          <div className='space-y-6'>
            {bookings.map(booking => {
              const status = getBookingStatus(booking)

              return (
                <div key={booking.id} className='border border-gray-200 rounded-lg p-6 bg-white shadow-sm'>
                  <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3'>
                    <div>
                      <h2 className='text-xl font-semibold text-gray-800'>{getBookingName(booking)}</h2>
                      <p className='text-gray-600 capitalize'>{getBookingType(booking)}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${status.class}`}>{status.text}</span>
                  </div>

                  <div className='flex flex-col md:flex-row gap-6 mb-4'>
                    {booking.image && booking.image !== 'default-room.png' && <img className='w-full md:w-80 h-60 object-cover rounded-lg' src={booking.image} alt={getBookingName(booking)} />}

                    <div className='flex-1 space-y-3'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                          <p className='font-medium text-gray-700'>Stay dates:</p>
                          <p className='text-gray-600'>
                            {new Date(booking.checkIn).toLocaleDateString('en-US')} - {new Date(booking.checkOut).toLocaleDateString('en-US')}
                          </p>
                        </div>

                        <div>
                          <p className='font-medium text-gray-700'>Number of guests:</p>
                          <p className='text-gray-600'>{booking.guests} people</p>
                        </div>

                        <div>
                          <p className='font-medium text-gray-700'>Duration:</p>
                          <p className='text-gray-600'>{booking.days} nights</p>
                        </div>

                        <div>
                          <p className='font-medium text-gray-700'>Total cost:</p>
                          <p className='text-green-600 font-semibold'>${booking.totalPrice}</p>
                        </div>
                      </div>

                      <div>
                        <p className='font-medium text-gray-700'>Price per night:</p>
                        <p className='text-gray-600'>{booking.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                      <div>
                        <span className='text-gray-500'>Booking ID:</span>
                        <span className='ml-2 font-medium'>No.{String(booking.id).padStart(6, '0')}</span>
                      </div>
                      <div>
                        <span className='text-gray-500'>Created date:</span>
                        <span className='ml-2 font-medium'>{new Date(booking.createdAt).toLocaleString('en-US')}</span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 p-4 bg-blue-50 rounded-lg'>
                    <p className='font-medium text-gray-800 mb-2'>Your contact details:</p>
                    <p className='text-gray-700'>👤 {booking.name}</p>
                    <p className='text-gray-700'>📞 {booking.phone}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Bookings
