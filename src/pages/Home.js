import React from 'react'
import Cards from '../components/Cards'
import Counter from '../components/Counter'
import Navbar from '../components/Navbar'
import { everyWeek } from '../utils/everyWeek'
import { SlSocialFacebook } from 'react-icons/sl'

const navData = [
  {
    route: '/',
    label: <SlSocialFacebook className='icon' />
  },
  {
    route: '/about',
    label: 'About'
  },
  {
    route: '/faq',
    label: 'FAQ'
  }
]

const cardsData = [
  {
    image: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png',
    title: 'titulo prueba 1',
    description: 'lorem ipsum sit admet'
  },
  {
    image: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png',
    title: 'titulo prueba 2',
    description: 'lorem ipsum sit admet'
  },
  {
    image: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png',
    title: 'titulo prueba 3',
    description: 'lorem ipsum sit admet'
  },
  {
    image: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png',
    title: 'titulo prueba 4',
    description: 'lorem ipsum sit admet'
  }
]

function Home () {
  return (
    <section className='home'>
      <Navbar
        color='#ccc'
        navlinks={navData}
        brand={everyWeek(6)}
      />
      <Counter />
      <Cards
        data={cardsData}
      />
    </section>
  )
}

export default Home
