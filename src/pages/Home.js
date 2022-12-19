import React from 'react'
import Navbar from '../components/Navbar'
import { everyWeek } from '../utils/everyWeek'
import { SlSocialFacebook } from 'react-icons/sl'
import Users from '../components/Users'

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

function Home () {
  return (
    <section className='home'>
      <Navbar
        color='#ccc'
        navlinks={navData}
        brand={everyWeek(6)}
      />
      <Users />
    </section>
  )
}

export default Home
