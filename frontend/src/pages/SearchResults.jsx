import React, { useEffect, useState, useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const SearchResults = () => {
  const { axios, backendUrl } = useContext(AppContext)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  const query = new URLSearchParams(location.search)
  const checkIn = query.get('checkIn')
  const checkOut = query.get('checkOut')
  const guests = query.get('guests')

  useEffect(() => {
    const fetchAvailable = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${backendUrl}/api/bookings/search-available`, {
          params: { checkIn, checkOut, guests },
        })

        if (data.success) {
          setResults(data.available)
        } else {
          toast.error(data.message || 'Error loading')
        }
      } catch (error) {
        console.error(error)
        toast.error('Error loading available options')
      } finally {
        setLoading(false)
      }
    }

    if (checkIn && checkOut) {
      fetchAvailable()
    }
  }, [checkIn, checkOut, guests, axios, backendUrl])

  if (loading) {
    return (
      <div className='min-h-screen p-6 flex justify-center items-center'>
        <p>Searching for available options...</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold mb-2'>Available Options</h1>
        <p className='text-gray-600'>
          {checkIn} - {checkOut} • {guests} {guests === '1' ? 'guest' : 'guests'}
        </p>
      </div>

      {results.length === 0 ? (
        <div className='text-center py-10'>
          <p className='text-lg mb-4'>No available options for selected dates</p>
          <p className='text-gray-600'>Try changing dates or number of guests</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {results.map(item => (
            <div key={`${item.type}-${item.id}`} className='border rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <img src={item.image?.[0] || '/images/default.jpg'} alt={item.name} className='w-full h-90 object-cover rounded-t-lg' />
              <div className='p-4'>
                <div className='flex justify-between items-start mb-2'>
                  <h2 className='font-bold text-lg'>{item.name}</h2>
                  <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded capitalize'>{item.type === 'hotel' ? 'Hotel' : 'House'}</span>
                </div>

                <p className='text-gray-700 mb-2'>${item.price} / night</p>

                <ul className='text-sm text-gray-600 mb-3'>
                  {item.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                  {item.features.length > 3 && <li>• and {item.features.length - 3} more</li>}
                </ul>

                {item.bonus && <p className='text-green-600 text-sm mb-2'>{item.bonus}</p>}

                <Link onClick={()=>window.scrollTo(0,0)}
                  to={item.route}
                  state={{
                    item,
                    checkIn,
                    checkOut,
                    guests,
                  }}
                  className='block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors'>
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
