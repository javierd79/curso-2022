import React from 'react'
import Navbar from '../components/Navbar'
import { everyWeek } from '../utils/everyWeek'

const navData = [
  {
    route: '/',
    label: 'Home'
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

function Home () {
  return (
    <section className='home'>
      <Navbar
        color='#ccc'
        navlinks={navData}
        brand={everyWeek(6)}
      />
    </section>
  )
}

export default Home
