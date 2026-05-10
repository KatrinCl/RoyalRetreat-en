import React from 'react'
import { assets } from '../assets/assets'

const BannerHouse = () => {
  return (
    <div className='relative w-full flex'>
      <img className='w-full h-150 lg:h-auto object-cover' src={assets.banner_house1} alt='' />
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent'></div>

      <div className='absolute inset-0 flex flex-col items-center lg:items-start my-10 mx-5 lg:my-25 lg:mx-10'>
        <p className='text-2xl lg:text-4xl font-medium text-white opacity-100'>Guest Houses</p>
        <hr className='w-80 h-0.5 lg:my-6 my-4 bg-white border-0 rounded' />
        <p className='text-white opacity-100 lg:w-2/3'>
          Isn't this a wonderful idea for holding a corporate event, anniversary, or just leisure <br /> with a friendly company or family?! We tried to perfect the idea of countryside leisure. <br /> No need to travel hundreds of kilometers to feel
          the silence and tranquility away from city noise.
        </p>
      </div>
    </div>
  )
}

export default BannerHouse
