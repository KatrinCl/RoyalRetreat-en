import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const Add = ({isAdmin}) => {
  const { type } = useParams()

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState('')
  const [features, setFeatures] = useState('')
  const [bonus, setBonus] = useState('')
  const [warning, setWarning] = useState('')
  const [price, setPrice] = useState('')

  const onSubmitHandler = async e => {
    e.preventDefault()

    if (!isAdmin) {
      return null
    }

    const featuresArray = features
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0)

    try {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('features', JSON.stringify(featuresArray))
      formData.append('bonus', bonus)
      formData.append('warning', warning)
      formData.append('price', price)

      image1 && formData.append('image1', image1)
      image2 && formData.append('image2', image2)
      image3 && formData.append('image3', image3)
      image4 && formData.append('image4', image4)

      const response = await axios.post(backendUrl + `/api/${type}/add/${type}`, formData, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } })

      console.log(response.data)

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setFeatures('')
        setBonus('')
        setWarning('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error({ success: false, message: error.message })
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Add {type === 'room' ? 'Room' : 'House'}</h2>
        <p>Upload image</p>
        <div className='flex flex-row w-120 gap-2'>
          <label htmlFor='image1'>
            <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='' />
            <input onChange={e => setImage1(e.target.files[0])} type='file' id='image1' hidden />
          </label>
          <label htmlFor='image2'>
            <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
            <input onChange={e => setImage2(e.target.files[0])} type='file' id='image2' hidden />
          </label>
          <label htmlFor='image3'>
            <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
            <input onChange={e => setImage3(e.target.files[0])} type='file' id='image3' hidden />
          </label>
          <label htmlFor='image4'>
            <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' />
            <input onChange={e => setImage4(e.target.files[0])} type='file' id='image4' hidden />
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p>Name *</p>
        <input onChange={e => setName(e.target.value)} value={name} className='border w-80 p-2 rounded' type='text' placeholder='Name' required />
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <p>Features *</p>
        <textarea onChange={e => setFeatures(e.target.value)} value={features} rows={5} required className='border w-80 p-2 rounded' placeholder={`Enter each feature on a new line\nFor example:\nDouble bed\nAir conditioning\nWi-Fi`} />
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <p>Bonus</p>
        <textarea onChange={e => setBonus(e.target.value)} value={bonus} rows={5} className='border w-80 p-2 rounded' placeholder='Enter privileges for this room' />
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <p>Warnings</p>
        <textarea onChange={e => setWarning(e.target.value)} value={warning} rows={5} className='border w-80 p-2 rounded' placeholder='Enter warnings' />
      </div>

      <div className='flex flex-col gap-2'>
        <p>Price per night *</p>
        <input onChange={e => setPrice(e.target.value)} value={price} className='border w-80 p-2 rounded' type='number' placeholder='Price' required />
      </div>

      <button className='border w-40 rounded-full p-2 cursor-pointer hover:border-gray-500' type='submit'>
        Add
      </button>
    </form>
  )
}

export default Add
