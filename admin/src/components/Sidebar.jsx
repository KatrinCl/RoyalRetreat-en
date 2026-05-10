import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col gap-4  border-r border-gray-300'>
        <NavLink to='/add/room' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.add_icon} alt='' />
          <p>Add Room</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/add/house' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.add_icon} alt='' />
          <p>Add House</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/room/list' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.order_icon} alt='' />
          <p>Room List</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/house/list' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.order_icon} alt='' />
          <p>House List</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/bookings' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.order_icon} alt='' />
          <p>Bookings</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />
      </div>
    </div>
  )
}

export default Sidebar
