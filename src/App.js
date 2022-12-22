import React from 'react'
import Router from './config/Router'
import Navbar from './components/Navbar'
import { everyWeek } from './utils/everyWeek'
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

function App () {
  return (
    <>
      <Navbar
        color='#ccc'
        navlinks={navData}
        brand={everyWeek(6)}
      />
      <Router />
    </>
  )
}

export default App
