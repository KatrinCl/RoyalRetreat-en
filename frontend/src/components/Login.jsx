import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Login = () => {
  const [state, setState] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setShowLogin, backendUrl, navigate, setUser, axios } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(backendUrl + `/api/user/${state}`, { name, email, password })
      if (data.success) {
        navigate('/')
        setUser(data.user)
        setShowLogin(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='z-50 fixed inset-0 bg-black/50 flex items-center justify-center' onClick={() => setShowLogin(false)}>
      <form
        className='w-96 max-w-full bg-white p-8 rounded-xl shadow-lg flex flex-col items-center relative'
        onClick={(e) => e.stopPropagation()}
        onSubmit={onSubmitHandler}>
        <p className='text-xl md:text-2xl text-gray-700 mb-4'>{state === 'login' ? 'Login' : 'Register'}</p>

        {state === 'register' && (
          <div className='flex flex-col gap-3 w-full'>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Name' className='border rounded px-3 py-2' />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className='border rounded px-3 py-2' />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className='border rounded px-3 py-2' />
          </div>
        )}

        {state === 'login' && (
          <div className='flex flex-col gap-3 w-full'>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className='border rounded px-3 py-2' />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className='border rounded px-3 py-2' />
          </div>
        )}

        {state === 'register' ? (
          <p onClick={() => setState('login')} className='mt-4 text-sm cursor-pointer'>
            Already have an account? <span className='text-red-500'>click here</span>
          </p>
        ) : (
          <p onClick={() => setState('register')} className='mt-4 text-sm cursor-pointer'>
            Create an account? <span className='text-red-500'>click here</span>
          </p>
        )}

        <button className='mt-6 border border-gray-500 px-6 py-2 rounded-full hover:bg-gray-100 cursor-pointer' type='submit'>
          {state === 'register' ? 'Create Account' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login
