import React, { createContext, useState } from 'react'
import { data, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export const AppContext = createContext()

const backendUrl = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

const AppContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [rooms, setRooms] = useState([])
  const [houses, setHouses] = useState([])
  const [selectedHouse, setSelectedHouse] = useState(null)

  const navigate = useNavigate()

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/isAuth`)
      if (data.success) {
        setUser(data.user)
      }
    } catch (error) {
      setUser(null)
    }
  }

  const fetchRooms = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/room/list')
      if (data.success){
        setRooms(data.rooms)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message)
    }
  }

    const fetchHouses = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/house/list')
      if (data.success){
        setHouses(data.houses)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message)
    }
  }


  useEffect(() => {
    fetchUser()
    fetchRooms()
    fetchHouses()
  },[])

  const calculateTotalPrice = (checkInDate, checkOutDate, pricePerNight) => {
    const start = new Date(checkInDate)
    const end = new Date(checkOutDate)
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    return days > 0 ? days * pricePerNight : 0
  }

const handleBookingClick = (house = null) => {
    if (!user) {
      setShowLogin(true)
    } else {
      setIsBookingOpen(true)
      if (house) {
        setSelectedHouse(house)
      }
    }
  }
  
  const value = {
    showLogin,
    setShowLogin,
    backendUrl,
    navigate,
    user,
    setUser,
    axios,
    calculateTotalPrice,
    handleBookingClick,
    isBookingOpen,
    setIsBookingOpen, rooms, setRooms, houses, setHouses,
    selectedHouse, setSelectedHouse
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider
