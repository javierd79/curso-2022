/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import '../assets/styles/Navbar.css'

function Navbar ({ brand, navlinks, color }) {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false)

  function toggleOpen () {
    return setOpen(!open)
  }

  return (
    <nav style={{ backgroundColor: color }} className='navbar'>
      <h1 className='brand'>{brand}</h1>
      <ul className={`elements ${open ? 'open' : 'close'}`}>
        {
          navlinks.map((element, index) => {
            return (
              <li
                key={index}
                className='element'
              >
                <a href={element.route}>
                  {element.label}
                </a>
              </li>
            )
          })
        }
      </ul>
      <button
        className='toggle'
        onClick={() => toggleOpen()}
      >
        ...
      </button>
    </nav>
  )
}

export default Navbar
