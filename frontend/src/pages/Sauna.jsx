import React from 'react'
import { assets } from '../assets/assets'

const Sauna = () => {
  return (
    <div className='flex flex-col relative'>
      <img className='w-full h-80 sm:h-auto object-cover' src={assets.sauna} alt='' />
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent'></div>

      <div className='absolute inset-0 flex flex-col items-start mt-5 ml-5 sm:mt-20 sm:ml-20 p-2 sm:p-0'>
        <p className='text-4xl font-medium text-white opacity-100'>Sauna</p>
        <hr className='w-40 sm:w-80 h-px my-2 sm:my-6 bg-gray-200 border-0 text-xl sm:text-4l font-normal' />
        <p className='text-white text-sm sm:text-l font-normal opacity-100 w-2/3'>Seclusion and immersion into a world of complete relaxation</p>
      </div>

      <div className='flex mx-4 my-15 bg-gray-50'>
        <div className='flex gap-10 mx-5'>
          <div>
            <div className='flex flex-col gap-2 lg:grid grid-cols-2  md:w-150'>
              <img src={assets.sauna3} alt='' />
              <img src={assets.sauna2} alt='' />
              <img src={assets.sauna4} alt='' />
              <img src={assets.sauna1} alt='' />
            </div>
          </div>
          <div>
            <p className='text-2xl sm:text-4xl'>Sauna</p>
            <div className='flex flex-col mt-5 items-start'>
              <p className='text-sm sm:text-l font-normal'>Hot sauna is a combination of hot air and aromatic herbs.</p>
              <br />
              <p className='text-sm sm:text-l font-normal'>Steam room, washing area and relaxation zone, where you can enjoy hot tea from a samovar and taste a dish prepared on a grill. Cozy atmosphere, aromatic herbs and beautiful lake view create ideal conditions for your leisure.</p>
              <br />
              <p className='text-sm sm:text-l font-normal'>For an additional fee you can purchase:</p>
              <br />
              <ul className='text-sm sm:text-l font-normal'>
                <li>-fluffy brooms (oak, birch)</li>
                <li>-bathrobe</li>
                <li>-slippers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mx-4 my-2 mb-4 bg-gray-50'>
        <div className='flex flex-col lg:flex-row gap-10 mx-5'>
          <div>
            <p className='text-2xl sm:text-4xl'>Wood-fired Furako</p>
            <div className='flex flex-col mt-5 items-start'>
              <p className='text-sm sm:text-l font-normal'>Secluded leisure in hot furako, with a view of the lake. Complete relaxation and tranquility.</p>
              <br />
              <p className='text-sm sm:text-l font-normal'>Water temperature reaches up to 38-40 degrees.</p>
              <br />
<p className='text-sm sm:text-l font-normal'>Furako rental is only available when booking sauna for at least 4 hours.</p>
<br />
<p className='text-sm sm:text-l font-normal'>Furako filling with citrus and Siberian fir - $50</p>
              <br />
              <p className='italic text-sm sm:text-l font-normal'>Please note that furako must be booked in advance - at least a day before visiting.</p>
              <br />
              <p className='text-sm sm:text-l font-normal'>For details please call</p>
            </div>
          </div>
          <div>
            <img className='w-140 h-100' src={assets.furako} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sauna
