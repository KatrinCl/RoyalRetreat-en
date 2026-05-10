import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Hotel = () => {

  const {rooms} = useContext(AppContext)

  return (
    <div className='min-h-screen flex flex-col justify-center bg-gray-100'>
      <div className='flex flex-col my-10 items-center'>
        <img className='w-10' src={assets.hotel_icon} alt='' />
        <p className='text-2xl'>Mini Hotel</p>
        <hr className='w-80 h-0.5 my-4 bg-gray-300 border-0 rounded' />
        <p className='text-xl'>Convenience and Comfort</p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 mb-5'>
        {rooms.map(room => (
          <div key={room.id} className='flex flex-col items-center'>
            <img className='w-100 h-70' src={room.image[0]} alt='' />
            <Link to={`/hotel/${room.id}`} onClick={()=>window.scrollTo(0,0)} className='flex gap-2 items-center justify-center w-1/2 border border-gray-700 rounded-full p-2 mt-4 cursor-pointer hover:border-gray-400 transition-all duration-300 hover:scale-105'>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotel
