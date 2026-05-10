import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row gap-2 items-center justify-between p-5 bg-black/90'>
      <div className='flex flex-col items-center'>
        <img className='w-16' src={assets.logo1} alt='' />
        <p className='text-xl font-outfit text-white'>Royal Retreat</p>
      </div>

      <div className='flex gap-2 md:gap-5'>
        <img className='w-5' src={assets.call} alt='' />
        <div className='flex flex-col text-sm md:text-l'>
          <p className='text-white'>Phone for inquiries</p>
          <p className='text-white'>+1-555-123-4567</p>
        </div>
      </div>

      <div className='flex gap-2 md:gap-5'>
        <img className='w-5' src={assets.location} alt='' />
        <div className='flex flex-col text-sm md:text-l'>
          <p className='text-white'>Address</p>
          <p className='text-white'>New York, 5th Avenue, 5</p>
        </div>
      </div>

      <div className='flex gap-2 md:gap-5'>
        <img className='w-5 md:w-10' src={assets.insta} alt='' />
        <img className='w-5 md:w-10' src={assets.whatsapp} alt='' />
        <img className='w-5 md:w-10' src={assets.tg} alt='' />
      </div>
    </div>
  )
}

export default Footer
