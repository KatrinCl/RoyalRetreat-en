import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const { setShowLogin, user, setUser, axios, backendUrl, navigate } = useContext(AppContext)

  const logout = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/logout`)
      if (data.success) {
        toast.success(data.message)
        setUser(null)
        setProfileOpen(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='relative z-50 bg-black/90 px-6 md:px-10 py-5 flex items-center justify-between'>
      <Link to='/' className='flex flex-col items-center'>
        <img className='w-16' src={assets.logo1} alt='Logo' />
        <p className='text-xl font-outfit text-white'>Royal Retreat</p>
      </Link>

      <ul className='hidden lg:flex gap-7 items-center text-xl text-white cursor-pointer'>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/about'>
          <li>About Us</li>
        </NavLink>
        <NavLink to='/banquets'>
          <li>Banquets</li>
        </NavLink>
        <NavLink to='/houses'>
          <li>Guest Houses</li>
        </NavLink>
        <NavLink to='/hotel'>
          <li>Hotel</li>
        </NavLink>
        <NavLink to='/spa'>
          <li>SPA</li>
        </NavLink>
        <NavLink to='/sauna'>
          <li>Sauna</li>
        </NavLink>
        <NavLink to='/kids'>
          <li>For Kids</li>
        </NavLink>
        <NavLink to='/contact'>
          <li>Contacts</li>
        </NavLink>
      </ul>

      {!user ? (
        <button onClick={() => setShowLogin(true)} className='hidden lg:block text-white text-lg px-6 py-2 border border-yellow-600 rounded-full cursor-pointer'>
          Login
        </button>
      ) : (
        <div className='relative group'>
          <img className='w-12 h-12 rounded-full cursor-pointer ml-20 lg:ml-0' src='./profile_icon.png' alt='Profile' onClick={() => setProfileOpen(!profileOpen)} />

          <ul
            className={`absolute text-sm md:text-l right-0 top-full mt-2 w-34 lg:w-44 bg-black/90 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
              profileOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible'
            }`}>
            <li
              onClick={() => {
                navigate('/my-bookings')
                setProfileOpen(false)
              }}
              className='px-4 py-2 hover:bg-gray-800 cursor-pointer'>
              Bookings
            </li>
            <li onClick={logout} className='px-4 py-2 hover:bg-gray-800 cursor-pointer'>
              Logout
            </li>
          </ul>
        </div>
      )}

      <button className='lg:hidden text-white text-3xl cursor-pointer' onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className='absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-5 py-5 z-50'>
          <ul className='flex flex-col gap-5 text-lg text-white items-center justify-center'>
            <NavLink to='/' onClick={() => setOpen(false)}>
              <li>Home</li>
            </NavLink>
            <NavLink to='/about' onClick={() => setOpen(false)}>
              <li>About Us</li>
            </NavLink>
            <NavLink to='/banquets' onClick={() => setOpen(false)}>
              <li>Banquets</li>
            </NavLink>
            <NavLink to='/houses' onClick={() => setOpen(false)}>
              <li>Guest Houses</li>
            </NavLink>
            <NavLink to='/hotel' onClick={() => setOpen(false)}>
              <li>Hotel</li>
            </NavLink>
            <NavLink to='/spa' onClick={() => setOpen(false)}>
              <li>SPA</li>
            </NavLink>
            <NavLink to='/sauna' onClick={() => setOpen(false)}>
              <li>Sauna</li>
            </NavLink>
            <NavLink to='/kids' onClick={() => setOpen(false)}>
              <li>For Kids</li>
            </NavLink>
            <NavLink to='/contact' onClick={() => setOpen(false)}>
              <li>Contacts</li>
            </NavLink>
          </ul>
          {!user ? (
            <button
              onClick={() => {
                setShowLogin(true)
                setOpen(false)
              }}
              className='text-white text-base px-4 py-2 border border-yellow-600 rounded-full cursor-pointer'>
              Login
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
                className='text-white text-base px-4 py-2 border border-yellow-600 rounded-full cursor-pointer'>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
