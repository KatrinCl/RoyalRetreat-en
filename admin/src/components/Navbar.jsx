import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl } from '../App'

const Navbar = ({ setIsAdmin}) => {
    const handleLogout = async () => {
    try {
      await axios.get(`${backendUrl}/api/admin/logout`, { withCredentials: true });
      setIsAdmin(false);
      toast.success('You have logged out');
    } catch (error) {
      console.log(error);
      toast.error('Logout error');
    }
  };

  return (
    <div className='flex justify-between px-10 py-4 items-center'>
      <img className='w-20' src={assets.logo} alt='' />
      <button onClick={handleLogout} className='border border-yellow-500 text-gray-700 rounded-full px-8 py-3 cursor-pointer hover:scale-105 duration-300 transition-all hover:border-gray-500'>Logout</button>
    </div>
  )
}

export default Navbar
