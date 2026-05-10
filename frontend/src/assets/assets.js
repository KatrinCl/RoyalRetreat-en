import logo1 from './logo4.png'
import sauna from './sauna.jpg'
import sauna1 from './sauna1.jpg'
import sauna2 from './sauna2.jpg'
import sauna3 from './sauna3.jpg'
import sauna4 from './sauna4.jpg'
import sauna5 from './sauna5.jpg'
import sauna6 from './sauna6.jpg'
import sauna7 from './sauna7.jpg'
import furako from './furako.jpg'
import glass from './glass.webp'
import glass1 from './glass1.jpg'
import holl from './holl.webp'
import holl1 from './holl1.jpg'
import pool from './pool1.jpeg'
import pool3 from './pool3.jpg'
import pool4 from './pool4.jpg'
import call from './call.svg'
import location from './location.svg'
import tg from './tg.svg'
import whatsapp from './whatsapp.svg'
import insta from './insta_icon.svg'
import b1 from './b1.jpg'
import b2 from './b2.jpeg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'
import b5 from './b5.jpg'
import b6 from './b6.jpg'
import h1 from './h1.jpg'
import h2 from './h2.jpg'
import h3 from './h3.jpg'
import h4 from './h4.jpg'
import h5 from './h5.jpg'
import h6 from './h6.jpg'
import h7 from './h7.jpg'
import h8 from './h8.webp'
import h9 from './h9.jpg'
import banner_house from './banner2.jpg'
import banner_house1 from './banner3.jpg'
import banner_kids from './banner_kids.jpg'
import arrow from './arrowIcon.svg'
import hotel_icon from './hotel_icon.svg'
import kid1 from './kid1.webp'
import kid2 from './kid2.webp'
import kid3 from './kid3.webp'
import kid4 from './kid4.jpg'
import relax from './relax1.jpg'
import massage from './massage.jpg'
import massage1 from './massage-side.webp'
import massage_side from './massage-side1.jpg'
import hero from './hero.jpeg'


import banner from './pool_banner1.jpg'

export const assets = {
  banner, logo1, sauna, sauna1, glass, holl, pool, glass1, holl1, call, location, tg, whatsapp, insta,
  b1, b2, b3, b4, b5, b6, h1, h2, h3, h4, h5, h6, h7, h8, h9, banner_house, banner_house1, arrow, hotel_icon, sauna2, sauna3, sauna4, furako, banner_kids, kid1, kid2, kid3, kid4, pool3,
  pool4, sauna5, sauna6, sauna7, relax, massage, hero, massage1, massage_side,
}


export const roomCommonData = [
  {
    id: 1,
    name: "Standard Room STD1",
    image: '/roomImg1.png',
    price: 180,
    features: [
      "1–2 guests | STD1",
      "Double bed",
      "Bathroom with shower",
      "TV",
      "Air conditioning",
      "WI-FI",
      "Mini refrigerator",
      "Free parking on the complex premises",
    ],
    bonus: "✨ Visit the spa complex with a 30% discount off the regular price.",
    warning: `⚠️ PLEASE NOTE: 
Use of the SPA center, sauna with furako, and SPA hotel territory (lake, kids' room, beach — guesht houses territory) is not included in the accommodation cost and is paid separately. 

For mini-hotel guests, the park territory with a mini-kids' playground and garden with a fountain is available.`
  },
  {
    id: 2,
    name: "Room 2",
    image: '/roomImg2.png',
    price: 220,
    features: [
      "2–3 guests",
      "Double bed",
      "Balcony with city view",
      "Air conditioning",
      "WI-FI",
      "Mini refrigerator",
    ],
    bonus: "Free breakfast included.",
    warning: null
  },
  {
    id: 3,
    name: "Room 3",
    image: '/roomImg3.png',
    price: 280,
    features: [
      "Suite",
      "Large bed",
      "Separate living room",
      "TV",
      "WI-FI",
      "Air conditioning",
    ],
    bonus: "Access to SPA complex VIP zone.",
    warning: null
  },
  {
    id: 4,
    name: "Room 4",
    image: '/roomImg4.png',
    price: 350,
    features: [
      "Apartments",
      "Kitchen",
      "Work area",
      "WI-FI",
      "Air conditioning",
    ],
    bonus: "Free parking and late checkout.",
    warning: null
  },
]

export const houseCommonData = [
  {
    id: 1,
    name: "House 1",
    image: assets.h5,
    price: 450,
    features: [
      "Up to 4 people",
      "First floor: veranda, entrance hall, changing room, bathroom, kitchen-living room, pool (22-28°C), hammam and showers",
      "Second floor: 3 bedrooms (double bed), bathroom, 1 bedroom (2 bunk beds)"
    ],
    bonus: "✨ Visitors receive a discount on the SPA complex.",
    warning: null
  },
  {
    id: 2,
    name: "House 2",
    image: assets.h2,
    price: 380,
    features: [
      "2–3 people",
      "Veranda",
      "Entrance hall",
      "Bathroom",
      "Kitchen-living room",
      "1 bedroom"
    ],
    bonus: "Free breakfast included.",
    warning: null
  },
  {
    id: 3,
    name: "House 3",
    image: assets.h8,
    price: 420,
    features: [
      "Up to 3 people",
      "Veranda",
      "Entrance hall",
      "Changing room",
      "Bathroom",
      "Kitchen-living room",
      "1 bedroom"
    ],
    bonus: "Free access to kids' playground.",
    warning: null
  },
  {
    id: 4,
    name: "House 4",
    image: assets.h9,
    price: 480,
    features: [
      "Up to 4 people",
      "Veranda",
      "Entrance hall",
      "Changing room",
      "Bathroom",
      "Kitchen-living room",
      "1 bedroom"
    ],
    bonus: null,
    warning: null
  },
  {
    id: 5,
    name: "House 5",
    image: assets.h1,
    price: 350,
    features: [
      "2–3 people",
      "Veranda",
      "Entrance hall",
      "Changing room",
      "Bathroom",
      "Kitchen-living room",
      "1 bedroom"
    ],
    bonus: null,
    warning: null
  },
  {
    id: 6,
    name: "House 6",
    image: assets.h7,
    price: 520,
    features: [
      "Up to 4 people",
      "Veranda",
      "Entrance hall",
      "Changing room",
      "Bathroom",
      "Kitchen-living room",
      "2 bedrooms"
    ],
    bonus: "Late checkout without extra charge.",
    warning: null
  }
]



export const kidItems = [
  {
    id: 1,
    title: 'Kids\' Room',
    image: assets.kid4,
    description: 'A paradise corner for your kids',
    modalTitle: 'Children\'s Playroom',
    imageModal: assets.kid4,
    modalContent: `
            Play complex with dry pool with slide, climbing wall, table football and air hockey,
            dollhouse, Lego table, coloring books, puzzles - everything needed for comfortable and interesting
            your child's leisure time.

            And admission is completely free for all SPA hotel guests!
  `,
    rules: [
      'Children under 7 only with adult supervision',
      'Change shoes required',
      'Food and drinks not allowed',
      'Parents are responsible for children'
    ]
  },
  {
    id: 2,
    title: 'Kids\' Playground',
    image: assets.kid2,
    description: 'Enjoy active games',
    modalTitle: 'Children\'s Playground',
    imageModal: assets.kid2,
    modalContent: `Modern kids' playground with swings, slides, sandbox and safe surfacing. 
        Perfect place for active leisure and developing children's physical skills.`,
    rules: [
      'Children under 5 only under adult supervision',
      'Use equipment according to age restrictions',
      'Observe turn-taking on slides and swings'
    ]
  },
  {
    id: 3,
    title: 'Master Classes',
    image: assets.kid3,
    description: 'For curious and creative minds',
    modalTitle: 'Creative Master Classes',
    imageModal: assets.kid3,
    modalContent: `Daily creative master classes: drawing, modeling, crafts. 
        Developing creative thinking and fine motor skills in children under the guidance of experienced teachers.`,
    rules: [
      'Advance registration required',
      'Recommended age: from 4 years',
      'All materials provided'
    ]
  }
]