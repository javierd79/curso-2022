import React from 'react'
import Cards from '../components/Cards'

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
      <Cards
        data={cardsData}
      />
    </section>
  )
}

export default Home
