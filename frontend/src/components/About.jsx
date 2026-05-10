import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex mx-4 md:my-15 bg-gray-50 my-5'>
      <div className='flex gap-10 md:m-5 '>
        <div>
          <div className='lg:grid grid-cols-2 gap-2 hidden lg:w-150'>
            <img src={assets.holl1} alt='' />
            <img src={assets.glass1} alt='' />
            <img src={assets.sauna1} alt='' />
            <img src={assets.pool} alt='' />
          </div>
        </div>
        <div>
          <p className='text-2xl sm:text-4xl'>About Us</p>
          <div className='flex flex-col mt-5 items-center text-sm sm:text-l font-normal'>
            <p>
              What associations come to mind with "Royal Retreat"? For us personally, it's something very cozy, soulful, and familiar. Nothing else could be in a place created with warmth and love. <br /> <br />
              Royal Retreat SPA hotel is a city-located place for pleasant and comfortable leisure within Russia's "Golden Ring". <br /> <br />
              The hotel territory includes:
              <br />
            </p>
            <ul className='mt-4 ml-4 list-disc'>
              <li>free secured parking</li>
              <li>4 beautiful banquet halls</li>
              <li>4 guest cottages for large groups, with their own sauna, hammam, pools and outdoor jacuzzi</li>
              <li>5 guest Barn cottages with relaxation area on the veranda and BBQ zone</li>
              <li>14 lodge apartments with mini-veranda and shared BBQ zone</li>
              <li>spa complex with a large 25-meter pool, all-season heated outdoor pool, jacuzzi zone, children's pool, Finnish and herbal saunas, hammam, relaxation room with video projector and massage chairs</li>
              <li>sauna with furako</li>
              <li>mini-hotel with standard rooms</li>
              <li>children's and sports playgrounds</li>
              <li>large flower park with fountain, pier, gazebos, children's playground and summer tent, this park is our pride, ideal place for beautiful photo sessions, outdoor weddings and celebrations</li>
            </ul>
             <br />
            <p>
              All this is located surrounded by a well-maintained pond, with fishing opportunities. Thanks to cooperation with partners, guests have access to various entertainment: horse rides, quad biking, snowmobiling,
              airplane flights, skydiving.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
