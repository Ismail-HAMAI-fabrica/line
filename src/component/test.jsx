import React from 'react'
import i1 from './poster/crealla.jpg'
import i2 from './poster/joker.jpg'
import './hero.css'

function Test() {
  return (
    <div className="swap-container">
  <img src={i1} alt="Image 1" />
  <img src={i2} alt="Image 2" />
</div>
  )
}

export default Test