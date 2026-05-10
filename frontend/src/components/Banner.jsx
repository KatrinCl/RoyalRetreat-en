import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Banner = () => {
  const { navigate } = useContext(AppContext)
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [guests, setGuests] = useState(2)

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates')
      return
    }

    const checkInStr = checkIn.toISOString().split('T')[0]
    const checkOutStr = checkOut.toISOString().split('T')[0]
    navigate(`/search?checkIn=${checkInStr}&checkOut=${checkOutStr}&guests=${guests}`)
  }

  return (
    <div className='relative w-full'>
      <img className='w-full h-100 sm:h-auto object-cover' src={assets.banner} alt='' />
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent'></div>

      <div className='absolute inset-0 flex flex-col items-center my-10 md:my-25 sm:my-10'>
        <p className='text-3xl md:text-6xl font-outfit font-bold text-white opacity-100 sm:text-4xl'>Royal Retreat</p>
        <hr className='w-24 sm:w-36 md:w-48 h-px mx-auto my-4 bg-white border-0 rounded' />
        <p className='text-lg md:text-3xl font-outfit font-medium text-white opacity-100 sm:text-2xl'>SPA Hotel</p>

        <div className='flex flex-row flex-wrap my-5 p-6 gap-5 sm:gap-10 items-center justify-center w-full max-w-3xl'>
          <div className='flex flex-col w-38 sm:w-auto'>
            <label className='text-white'>Check-in</label>
            <DatePicker selected={checkIn} onChange={date => setCheckIn(date)} dateFormat="MM/dd/yyyy" className='bg-white py-2 px-3 rounded' placeholderText='MM/DD/YYYY' />
          </div>
          <div className='flex flex-col w-38 sm:w-auto'>
            <label className='text-white'>Check-out</label>
            <DatePicker selected={checkOut} onChange={date => setCheckOut(date)} dateFormat="MM/dd/yyyy" className='bg-white py-2 px-3 rounded' placeholderText='MM/DD/YYYY' />
          </div>
          <div className='flex flex-col w-38 sm:w-auto'>
            <label className='text-white'>Guests</label>
            <input className='bg-white py-2 px-3 rounded' type='number' value={guests} onChange={e => setGuests(Number(e.target.value))} />
          </div>
          <button onClick={handleSearch} className='border border-white font-semibold rounded-full text-white h-12 px-6 mt-6 cursor-pointer hover:border-gray-400 transition-all duration-300 hover:scale-105'>Find Room</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
