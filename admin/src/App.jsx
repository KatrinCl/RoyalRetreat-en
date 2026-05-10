import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import Bookings from './pages/Bookings'
import Login from './components/Login'
import ListRoom from './pages/ListRoom'
import ListHouse from './pages/ListHouse'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(backendUrl + '/api/admin/check', { withCredentials: true })
        if (res.data.success) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false)
        }
      } catch (error) {
        setIsAdmin(false)
      }
    }
    checkAdmin()
  }, [])

  return (
    <div>
      <ToastContainer />
      {!isAdmin ? (
        <Login setIsAdmin={setIsAdmin} />
      ) : (
        <>
          <Navbar setIsAdmin={setIsAdmin} />
          <hr className='m-0 h-[0.5px] border-0 bg-gray-300' />
          <div className='flex'>
            <Sidebar />
            <div className='flex-1 p-6'>
              <Routes>
                <Route path='/add/:type' element={<Add isAdmin={isAdmin} />} />
                <Route path='/room/list' element={<ListRoom isAdmin={isAdmin} />} />
                <Route path='/house/list' element={<ListHouse isAdmin={isAdmin} />} />
                <Route path='/bookings' element={<Bookings isAdmin={isAdmin} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
