import React from 'react'
import { assets } from '../assets/assets'

const Banquets = () => {
  return (
    <div className='min-h-screen flex justify-center'>
      <div className='flex flex-col py-10 items-center'>
        <div className='flex lg:flex-row flex-col'>
          <img className='w-100 h-70' src={assets.b1} alt='' />
          <div className='flex flex-col px-5 py-10 gap-5 w-100 h-70 bg-gray-100 items-center'>
            <p className='text-2xl font-semibold'>Golden Hall</p>
            <p className='text-gray-500'>This is the largest banquet hall in Royal Retreat, where up to 200 people can be comfortably accommodated!</p>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='flex flex-col px-5 py-10 gap-5 w-100 h-70 bg-gray-100 items-center'>
            <p className='text-2xl font-semibold'>Mirror Hall</p>
            <p className='text-gray-500'>Unusual, stylish, beautiful and very bright! Up to 80 people can be comfortably accommodated in the hall.</p>
          </div>
          <img className='w-100 h-70' src={assets.b2} alt='' />
        </div>
        <div className='flex lg:flex-row flex-col'>
          <img className='w-100 h-70' src={assets.b4} alt='' />
          <div className='flex flex-col px-5 py-10 gap-5 w-100 h-70 bg-gray-100 items-center'>
            <p className='text-2xl font-semibold'>Loft Hall</p>
            <p className='text-gray-500'>Versatile hall for any event. Capacity up to 140 people.</p>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='flex flex-col px-5 py-10 gap-5 w-100 h-70 bg-gray-100 items-center'>
            <p className='text-2xl font-semibold'>Small Hall</p>
            <p className='text-gray-500'>Perfect for celebrating a birthday or anniversary. Accommodation: up to 20 people.</p>
            <p className='my-2 text-gray-500'>P.S. There is karaoke in the hall.</p>
          </div>
          <img className='w-100 h-70' src={assets.holl} alt='' />
        </div>
        <div className='flex lg:flex-row flex-col'>
          <img className='w-100 h-70' src={assets.b5} alt='' />
          <div className='flex flex-col px-5 py-10 gap-5 w-100 h-70 bg-gray-100 items-center'>
            <p className='text-2xl font-semibold'>Tent</p>
            <p className='text-gray-500'>Our tent is located in the very center of the picturesque park. Accommodation: up to 50 people.</p>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='flex flex-col px-5 py-10 gap-5 w-100 h-70 bg-gray-100 items-center'>
            <p className='text-2xl font-semibold'>Outdoor Wedding Ceremony</p>
            <p className='text-gray-500'>By the fountain? By the waterfall? Or on the pier? <br />
            We provide any of these locations for your outdoor wedding ceremony for free!</p>
          </div>
          <img className='w-100 h-70' src={assets.b6} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Banquets
