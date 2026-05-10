import React, { useState } from 'react'
import { assets, kidItems } from '../assets/assets'

const Kids = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const openModal = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <div className='min-h-screen relative w-full'>
      <div className='relative'>
        <img className='w-full h-80 sm:h-auto object-cover' src={assets.banner_kids} alt='' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent'></div>

        <div className='absolute inset-0 flex flex-col items-start mt-5 sm:mt-0 sm:justify-center ml-10 sm:ml-20'>
          <p className='text-2xl sm:text-4xl font-outfit text-white opacity-100'>Royal Retreat for Kids</p>
          <hr className='w-60 sm:w-80 h-px my-2 sm:my-6 bg-white border-0 rounded' />
          <p className='text-white text-sm sm:text-l font-normal opacity-100 w-2/3 max-w-xl'>
            Family leisure is a source of vivid impressions and cherished memories. We know that your children's leisure time matters, so in our SPA hotel they will definitely not be bored, as we have created all conditions for this
          </p>
        </div>
      </div>

      {selectedItem && (
        <div className='fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4' onClick={closeModal}>
          <div className='bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto' onClick={(e) => e.stopPropagation()}>
            <div className='flex flex-col sm:flex-row-reverse gap-4'>
              <div className='flex flex-col p-4'>
                <div className='flex justify-between'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-900'>{selectedItem.modalTitle}</h2>
                  <button onClick={closeModal} className='text-gray-500 hover:text-gray-700 text-3xl font-light transition-colors cursor-pointer'>
                    &times;
                  </button>
                </div>

                <p className='text-gray-700 mt-4 text-sm md:text-l font-normal'>{selectedItem.modalContent}</p>

                <hr className='border-t-2 border-gray-300 my-6' />

                <div>
                  <h3 className='text-l md:text-xl font-semibold text-gray-900 mb-4'>Visiting Rules</h3>
                  <ul className='space-y-3'>
                    {selectedItem.rules.map((rule, index) => (
                      <li key={index} className='flex items-start text-sm md:text-l font-normal'>
                        <span className='w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0'></span>
                        <span className='text-gray-700'>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <img className='sm:w-1/2' src={selectedItem.imageModal} alt='' />
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col md:flex-row my-10 gap-10 justify-center items-center px-4'>
        {kidItems.map((item) => (
          <div key={item.id} className='flex flex-col items-center'>
            <img className='w-80 h-60 object-cover rounded-lg shadow-lg' src={item.image} alt={item.title} />
            <div className='flex flex-col mt-4 items-center text-center'>
              <p className='font-bold text-xl mb-2'>{item.title}</p>
              <p className='w-60 text-gray-600'>{item.description}</p>
              <button onClick={() => openModal(item)} className='border bg-black text-white rounded-full px-6 py-2 mt-4 cursor-pointer hover:bg-gray-800 transition-all duration-300 transform hover:scale-105'>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kids
