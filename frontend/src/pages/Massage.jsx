import React from 'react'
import { assets } from '../assets/assets'

const Massage = () => {
  return (
    <div className='flex flex-col mb-10'>
      <div className='relative w-full'>
        <img className='w-full h-80 sm:h-auto object-cover' src={assets.hero} alt='' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-transparent'></div>

        <div className='absolute inset-0 flex flex-col items-start p-2 sm:p-0 ml-5 sm:ml-20 mt-10 sm:mt-20'>
          <p className='text-2xl sm:text-4xl font-outfit text-white opacity-100'>MASSAGE</p>
          <hr className='w-40 sm:w-80 h-0.5 lg:my-6 my-4 bg-white border-0 rounded' />
          <p className='text-white text-sm sm:text-l opacity-100 sm:w-2/3 max-w-xl'>Treat yourself to unforgettable moments of relaxation in our SPA hotel!</p>
        </div>
      </div>

      <div className='flex flex-col items-center mt-5 px-5 md:mt-10 md:px-20'>
        <h1 className='text-3xl'>Our Services</h1>
        <br />
        <p className='text-sm sm:text-l font-normal'>During any type of massage session, you can choose one of three oil scents for maximum pleasure and enjoyment.</p>
        <br />
        <p className='text-sm sm:text-l font-normal'>The oil is completely absorbed without leaving a sticky feeling, only a pleasant enveloping aroma and velvety skin.</p>
        <hr className='h-px my-10 md:my-20 border-0 bg-gray-500 w-20' />

        <div className='flex gap-10 justify-center'>
          <div className='flex flex-col w-2/3'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Relaxing Massage</p>
                <p className='text-l sm:text-xl font-bold'>from $85</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>A real self-care ritual. Relieves stress and emotional tension after a hard work day, relaxes and restores strength.</p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>*Ideal for sessions. 30 minutes - $85/ 60 minutes - $140/ 90 minutes - $190</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Anti-Cellulite Massage</p>
                <p className='text-l sm:text-xl font-bold'>from $95</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>
                A procedure that provenly improves skin appearance, smooths it, increasing firmness and elasticity. Promotes tissue renewal, reduces swelling, tones the body and helps reduce tension. Important! To achieve the effect
                the procedure must be done in a course of at least 8 sessions.
              </p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>30 minutes - $95/ 60 minutes - $160</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Facial Massage</p>
                <p className='text-l sm:text-xl font-bold'>$120</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>
                Performed only by hand technique, helps maintain youth and healthy skin appearance without injections. Increases firmness, promotes collagen and elastin production, lifts facial contour. Regular massage slows down the formation
                of deep wrinkles and sagging of your facial contours.
              </p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>30 minutes - $120</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Head Massage</p>
                <p className='text-l sm:text-xl font-bold'>$65</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>Pleasant and useful - improves blood circulation, promotes hair growth, relieves tension and spasms in head and neck muscles.</p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>30 minutes - $65</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Arm Massage</p>
                <p className='text-l sm:text-xl font-bold'>$75</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>Not just a pleasant procedure, but care for comfort and health. A ritual of relaxation and strength restoration, ideal for those who work at a computer or with gadgets.</p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>30 minutes - $75</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Leg Massage</p>
                <p className='text-l sm:text-xl font-bold'>$85</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>Helps relieve excessive muscle tension, which provides a sense of lightness in the body and normalizes sleep.</p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>30 minutes - $85</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>Foot Massage</p>
                <p className='text-l sm:text-xl font-bold'>$70</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>
                There are more than 70 active points on the feet connected to various organs. Impact on these points helps improve the function of the entire body. Will give your legs lightness and your body maximum relaxation.
              </p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>30 minutes - $70</p>
              <hr className='border-0 border-t border-gray-300 my-2' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-l sm:text-xl font-bold'>LA SULTANE DE SABA SPA Program</p>
                <p className='text-l sm:text-xl font-bold'>$450</p>
              </div>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>
                Luxurious beauty ritual of the mystical East. Each product in the program is based on unique perfume compositions, rare natural ingredients and incredible textures. Coconut-rice gommage will give skin impeccable softness,
                smoothness and radiance. The Rassoul mask will calm and renew the skin, and melting oil with amber, vanilla and patchouli aroma will envelop with an enchanting sensual eastern trail, immersing you in an atmosphere of coziness, harmony and deep relaxation.
              </p>
              <p className='text-gray-500 italic text-sm sm:text-l font-normal'>150 minutes - $450</p>
            </div>
          </div>
          <img className='hidden lg:block h-250 w-150' src={assets.massage_side} alt='' />
        </div>

        <p className='mt-20 text-sm sm:text-l font-normal'>You can book a service by phone +1-555-123-4567</p>
        <br />
        <p className='text-sm sm:text-l font-normal'>Immerse yourself in an atmosphere of coziness and care, while our master helps you relieve tension, restore strength and enjoy complete relaxation.</p>
      </div>
    </div>
  )
}

export default Massage
