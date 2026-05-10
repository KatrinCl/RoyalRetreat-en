import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './components/About'
import Banquets from './pages/Banquets'
import Houses from './pages/Houses'
import Hotel from './pages/Hotel'
import Sauna from './pages/Sauna'
import Spa from './pages/Spa'
import Kids from './pages/Kids'
import Contacts from './pages/Contacts'
import Massage from './pages/Massage'
import { AppContext } from './context/AppContext'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import Bookings from './pages/Bookings'
import Room from './pages/Room'
import SearchResults from './pages/SearchResults'
import House from './pages/House'

const App = () => {
  const { showLogin } = useContext(AppContext)

  return (
    <div>
      <Toaster />

      <Navbar />
      {showLogin ? <Login /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/banquets' element={<Banquets />} />
        <Route path='/houses' element={<Houses />} />
        <Route path='/houses/:id' element={<House />} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/hotel/:id' element={<Room />} />
        <Route path='/spa' element={<Spa />} />
        <Route path='/sauna' element={<Sauna />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/massage' element={<Massage />} />
        <Route path='/my-bookings' element={<Bookings />} />
        <Route path='/search' element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
