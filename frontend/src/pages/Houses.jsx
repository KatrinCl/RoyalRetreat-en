import React from 'react'
import { useEffect, useState, useContext } from 'react'
import BannerHouse from '../components/BannerHouse'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Houses = () => {
  
  const { houses } = useContext(AppContext)

  return (
    <div className='min-h-screen relative w-full'>
      <BannerHouse />
      <div className='flex flex-col py-10 items-center'>
        {houses.map((house, index) => (
          <div key={house.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center`}>
            <img className='lg:w-120 lg:h-120 w-100 h-100 shadow-md' src={house.image} alt={house.name} />
            <div className='flex flex-col text-sm px-10 py-10 gap-5 lg:w-120 lg:h-120 w-100 h-100 bg-gray-100 items-center justify-center shadow-md'>
              <p className='text-xl font-semibold border-b-2 mt-5 lg:mt-0 border-black'>{house.name}</p>
              <p className='text-gray-500'>Price: ${house.price} / night</p>

              <ul className='list-disc pl-5 text-gray-700'>
                {house.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {house.bonus && <p className='mt-2 text-green-600 font-medium'>{house.bonus}</p>}
              {house.warning && <p className='mt-2 text-red-500 text-sm whitespace-pre-line'>{house.warning}</p>}

              <Link to={`/houses/${house.id}`}  onClick={()=>window.scrollTo(0,0)} className='flex gap-2 items-center justify-center w-1/2 border border-gray-700 rounded-full p-2 mt-4 cursor-pointer hover:border-gray-400 transition-all duration-300 hover:scale-105'>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Houses
