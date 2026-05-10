import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Spa = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='relative'>
        <img className='w-full h-160 sm:h-120 md:h-auto object-cover' src={assets.pool3} alt='' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-transparent'></div>

        <div className='absolute inset-0 flex flex-col items-start mt-10 lg:ml-20 mx-5'>
          <p className='text-2xl lg:text-4xl font-outfit text-white opacity-100'>SPA COMPLEX</p>
          <hr className='w-80 h-px my-2 lg:my-6 bg-white border-0 rounded' />
          <p className='text-white opacity-100 lg:w-2/3'>
            We invite you to immerse yourself in the atmosphere of real resort leisure in our new spa complex. For your pleasure and comfort: heated pool, jacuzzi, children's area, comfortable lounge chairs, herbal sauna, Finnish sauna, relaxation
            room. Start your morning with water procedures, getting a boost of energy and vigor, or allow yourself to immerse in the atmosphere of relaxation after a busy day.
          </p>
          <br />
          <p className='text-white font-extralight'>Opening hours: daily from 9:00 to 21:00</p>
          <br />
          <p className='text-white font-extralight'>Entry to the spa complex is included in the cost when staying in guest houses.</p>
          <div className='flex gap-10 md:mt-10 mt-5'>
            <button className='text-white border border-white rounded-full p-2 text-sm md:text-l sm:p-4 hover:border-gray-400 hover:text-gray-400 transition-all duration-300 transform hover:scale-105 cursor-pointer'>Price List</button>
            <button className='text-white border border-white rounded-full p-2 text sm:p-4  hover:border-gray-400 hover:text-gray-400 transition-all duration-300 transform hover:scale-105 cursor-pointer'>Visiting Rules</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center bg-gray-50 pb-20'>
        <p className='text-3xl lg:p-20 p-5'>SPA Complex Services</p>

        <div className='flex flex-col lg:flex-row gap-4'>
          <img className='w-100 h-60 sm:w-140 sm:h-100' src={assets.pool} alt='' />
          <div className='flex flex-col px-10 w-100 sm:w-140 sm:h-100 text-start'>
            <p className='text-xl font-bold'>Indoor Panoramic Pool</p>
            <br />
            <p>25-meter panoramic pool, the depth of which varies from 1.4 m to 1.7 m depending on the bottom slope. Water temperature is maintained at 31°C, ensuring comfortable conditions for long stay and relaxation.</p>
            <br />
            <p>For little guests we have a children's pool with a depth of 1 m. This is a great option for toddlers that will allow them to enjoy water procedures and spend time safely.</p>
            <br />
            <p>Pool visits are only allowed with an adult companion.</p>
            <br />
            <p>In the pool area there is a jacuzzi with hydro massage.</p>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <div className='flex flex-col px-10 w-100 sm:w-140 sm:h-100 text-start'>
            <p className='text-xl font-bold'>Heated Year-Round Pool</p>
            <br />
            <p>You can get a boost of energy, pleasure from swimming and relaxation on the outdoor pool with hydro massage zone. Constant water temperature is maintained, allowing comfortable swimming in both winter and summer.</p>
            <br />
            <p>Pool length - 15 m. Depth - 1.5 m</p>
            <br />
            <p>In season, the leisure area is equipped with: lounge chairs, soft armchairs, sun umbrellas, changing rooms, showers.</p>
          </div>
          <img className='sm:w-140 h-100' src={assets.pool4} alt='' />
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <img className='sm:w-140 h-100' src={assets.sauna5} alt='' />
          <div className='flex flex-col px-10 w-100 sm:w-140 sm:h-100 text-start lg:justify-center'>
            <p className='text-xl font-bold'>Finnish Sauna</p>
            <br />
            <p>Finnish sauna is a combination of hot steam and low humidity. It has all the beneficial properties of a traditional Russian bath!</p>
            <br />
            <p>Temperature 80-100 °C</p>
            <p>Humidity 15-20%</p>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <div className='flex flex-col px-10 w-100 sm:w-140 sm:h-100 text-start lg:justify-center'>
            <p className='text-xl font-bold'>Herbal Sauna</p>
            <br />
            <p>
              Herbal sauna fills the air at 50-60 °C with moist and warm steam of herbal extracts. They are beneficial for respiratory tract, heal and soften the skin. We add exquisite aromatic oils to the herbs. Breathing in
              the fantastic bouquet of scents, you immerse yourself in a world of complete bliss.
            </p>
          </div>
          <img className='sm:w-140 h-100' src={assets.sauna6} alt='' />
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <img className='sm:w-140 h-100' src={assets.sauna7} alt='' />
          <div className='flex flex-col px-10  w-100 sm:w-140 sm:h-100 text-start lg:justify-center'>
            <p className='text-xl font-bold'>Hammam</p>
            <br />
            <p>Our hammam is a place where time stops and stresses dissolve in steam clouds.</p>
            <br />
            <p>Luxurious interior, style, soft light create an atmosphere of coziness and harmony. Soft and moist steam cleanses the skin, improves blood circulation and relieves tension.</p>
            <br />
            <p>Temperature up to 50 °C</p>
            <p>Humidity 100%</p>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <div className='flex flex-col px-10  w-100 sm:w-140 sm:h-100 text-start'>
            <p className='text-xl font-bold'>Relaxation Room</p>
            <br />
            <p>After spa procedures, you can relax in the relaxation zone on comfortable massage chairs.</p>
            <br />
            <p>
              Thanks to the video projector, immerse yourself in a world of virtual reality. This is a simple and effective way of mental and psychological relaxation. You will visit wild nature places, see the underwater world, all this to pleasant music.
            </p>
            <br />
            <p className='italic'>*Please note, during massage session it is necessary to use a towel.</p>
          </div>
          <img className='sm:w-140 h-100' src={assets.relax} alt='' />
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <img className='sm:w-140 h-100' src={assets.massage} alt='' />
          <div className='flex flex-col px-10  w-100 sm:w-140 sm:h-100 text-start lg:justify-center'>
            <p className='text-xl font-bold'>Massage</p>
            <br />
            <p>Discover a new level of relaxation. Our massage is care for your body and soul.</p>
            <NavLink to='/massage'  onClick={() => window.scrollTo(0, 0)}>
              <button className='w-40 border bg-black text-white rounded-full px-6 py-2 mt-6 cursor-pointer hover:bg-gray-800 transition-all duration-300 transform hover:scale-105'>Learn More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spa
