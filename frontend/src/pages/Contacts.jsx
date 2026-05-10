import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 my-10 justify-center'>
      <div className='flex flex-col gap-4'>
        <p className='border-b border-gray-300 p-4 text-2xl font-bold'>Contacts</p>
        <p className='border-b border-gray-300 p-4 font-bold'>
          Address: <span className='font-medium'>New York, 5th Avenue, 5</span>
        </p>
        <p className='border-b border-gray-300 p-4 font-bold'>
          Phone: <span className='font-medium'>+1-555-123-4567</span>
        </p>
        <p className='border-b border-gray-300 p-4 font-bold'>
          Email: <span className='font-medium'>royal-retreat@gmail.com</span>
        </p>
        <p className='p-4 font-bold'>Opening hours:</p>
        <p className='p-4 font-bold'>
          SPA hotel: <span className='font-medium'>24/7</span>
        </p>
        <p className='p-4 font-bold'>
          SPA complex: <span className='font-medium'>daily: 09:00–21:00</span>
        </p>
        <hr className='w-85 lg:w-150 h-0.5 my-2 bg-gray-300 border-0' />
      </div>

      <div className='flex w-80 h-66 lg:w-130 lg:h-96 rounded-lg overflow-hidden shadow-lg lg:ml-0 ml-5'>
        <iframe
          src='https://maps.google.com/maps?q=5th+Avenue+5,New+York,NY&ll=40.7312,-73.9970&z=17&t=m&output=embed&hl=en'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Royal Retreat Location'
        />
      </div>
    </div>
  )
}

export default Contacts
