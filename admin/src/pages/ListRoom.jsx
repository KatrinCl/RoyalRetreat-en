import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { backendUrl } from '../App'

const ListRoom = ({isAdmin}) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/room/list', { withCredentials: true })

      if (response.data.success) {
        setList(response.data.rooms)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeRoom = async id => {
    if (!isAdmin) {
      return null
    }

    try {
      const response = await axios.post(backendUrl + '/api/room/remove', { id }, { withCredentials: true })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [isAdmin])

  return (
    <div>
      <p>Room List</p>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='grid grid-cols-4 items-center border bg-gray-100 text-sm p-2'>
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map(item => (
          <div key={item.id} className='grid grid-cols-4 items-center'>
            <img className='w-30' src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p className='flex items-center justify-center text-red-500 cursor-pointer' onClick={() => removeRoom(item.id)}>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListRoom
