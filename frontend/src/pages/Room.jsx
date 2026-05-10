import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Room = () => {
  const { id } = useParams()
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [guests, setGuests] = useState('')
  const [availability, setAvailability] = useState(null)

  const { rooms, user, axios, backendUrl, navigate, calculateTotalPrice, handleBookingClick, isBookingOpen, setIsBookingOpen } = useContext(AppContext)

  const room = rooms.find(r => r.id === Number(id))

  useEffect(() => {
    const checkRoomAvailability = async () => {
      if (!checkIn || !checkOut) return
      try {
        const checkInStr = checkIn.toISOString().split('T')[0]
        const checkOutStr = checkOut.toISOString().split('T')[0]
        const { data } = await axios.get(`${backendUrl}/api/bookings/check-availability`, {
          params: { roomName: room.name, checkIn: checkInStr, checkOut: checkOutStr },
          withCredentials: true,
        })
        setAvailability(data.available)
      } catch (error) {
        console.error(error)
        setAvailability(null)
      }
    }
    checkRoomAvailability()
  }, [checkIn, checkOut, axios, backendUrl, room?.name])

  if (!room) {
    return (
      <div className='p-6'>
        <p className='text-gray-600'>Loading room...</p>
      </div>
    )
  }

  const onSubmitHandler = async e => {
    e.preventDefault()
    if (!checkIn || !checkOut) {
      toast.error('Please select check-in and check-out dates')
      return
    }

    if (availability === false) {
      toast.error('This room is already booked for selected dates')
      return
    }

    try {
      const formData = new FormData(e.target)
      const name = formData.get('name')
      const phone = formData.get('phone')
      const totalPrice = calculateTotalPrice(checkIn, checkOut, room.price)
      const guests = Number(formData.get('guests')) || 1

      const { data } = await axios.post(
        `${backendUrl}/api/bookings/create-booking`,
        {
          roomName: room.name,
          checkIn,
          checkOut,
          name,
          phone,
          price: room.price,
          totalPrice,
          guests,
          image: room.image?.[0] || '',
        },
        { withCredentials: true }
      )

      if (data.success) {
        toast.success('Booking successful!')
        setIsBookingOpen(false)
        navigate('/my-bookings')
        scrollTo(0, 0)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-screen p-6'>
      <div className='mt-5 flex flex-col md:flex-row gap-10'>
        <img className='w-full md:w-1/2 md:h-100 rounded-xl shadow-lg' src={room.image?.[0]} alt={room.name} />

        <div className='flex flex-col gap-4 md:w-1/2 mr-10'>
          <h1 className='text-2xl font-bold'>{room.name}</h1>

          <ul className='list-disc pl-5 text-gray-700'>
            {room.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          {room.bonus && <p className='mt-4 text-green-600 font-medium'>{room.bonus}</p>}

          {room.warning && <p className='mt-2 text-red-500 text-sm whitespace-pre-line'>{room.warning}</p>}

          <p className='mt-4 text-lg font-semibold'>Price: ${room.price} / night</p>

          <button onClick={handleBookingClick} className='flex gap-2 items-center justify-center  w-1/2 md:w-1/3 border border-gray-700 rounded-full p-2 mt-4 cursor-pointer hover:border-gray-400 transition-all duration-300 hover:scale-105'>
            Book Now
          </button>
        </div>
      </div>

      {user && isBookingOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
          <div className='bg-white rounded-xl p-6 w-96 shadow-xl relative'>
            <h2 className='text-xl font-bold mb-4'>Booking {room.name}</h2>

            <form onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
              <input name='name' className='border p-2 rounded' type='text' placeholder='Your name' required />
              <input name='phone' className='border p-2 rounded' type='tel' placeholder='Phone' required />

              <label className='text-sm'>Check-in date:</label>
              <DatePicker 
                selected={checkIn} 
                onChange={date => setCheckIn(date)} 
                dateFormat="MM/dd/yyyy"
                minDate={new Date()}
                className='border p-2 rounded'
                placeholderText='MM/DD/YYYY'
                required
              />

              <label className='text-sm'>Check-out date:</label>
              <DatePicker 
                selected={checkOut} 
                onChange={date => setCheckOut(date)} 
                dateFormat="MM/dd/yyyy"
                minDate={checkIn || new Date()}
                className='border p-2 rounded'
                placeholderText='MM/DD/YYYY'
                required
              />

              <label className='text-sm'>Number of guests:</label>
              <input className='border p-2 rounded' name='guests' type='number' placeholder='0' required value={guests} onChange={e => setGuests(e.target.value)} />

              {checkIn && checkOut && (
                <>
                  {availability === true && <p className='text-green-600 font-semibold'>Room available ✅</p>}
                  {availability === false && <p className='text-red-600 font-semibold'>Room already booked ❌</p>}
                  <p className='mt-2 text-lg font-semibold text-green-500'>${calculateTotalPrice(checkIn, checkOut, room.price)}</p>
                </>
              )}

              <button type='submit' disabled={availability === false} className={`py-2 rounded mt-2 cursor-pointer text-white ${availability === false ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}>
                Confirm
              </button>
            </form>

            <button onClick={() => setIsBookingOpen(false)} className='absolute top-4 right-4 text-gray-500 hover:text-black'>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Room
