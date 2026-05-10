import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { backendUrl } from '../App'

const ListHouse = ({ isAdmin }) => {
  const [listHouse, setListHouse] = useState([])

  const fetchListHouse = async () => {
    if (!isAdmin) {
      return null
    }

    try {
      const response = await axios.get(backendUrl + '/api/house/list', { withCredentials: true })

      if (response.data.success) {
        setListHouse(response.data.houses)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeHouse = async id => {
    try {
      const response = await axios.post(backendUrl + '/api/house/remove', { id }, { withCredentials: true })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchListHouse()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchListHouse()
  }, [isAdmin])

  return (
    <div>
      <p>House List</p>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='grid grid-cols-4 items-center border bg-gray-100 text-sm p-2'>
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {listHouse.map(item => (
          <div key={item.id} className='grid grid-cols-4 items-center'>
            <img className='w-30' src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p className='flex items-center justify-center text-red-500 cursor-pointer' onClick={() => removeHouse(item.id)}>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListHouse
