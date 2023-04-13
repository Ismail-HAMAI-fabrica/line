import React from 'react'
import './hero.css'
import logo from '../assets/cinestreame.png'
import i1 from './poster/crealla.jpg'
import i2 from './poster/joker.jpg'
import i3 from './poster/71v2Tz+8ToL.jpg'
import i4 from './poster/uk_imax_online_1sht.jpg'
import i5 from './poster/image.jpg'
import i6 from './poster/91jrKX9xjQL.jpg'
import ii1 from './poster/Fight_club_RVB_72.jpg'
import ii2 from './poster/forrest.jpg'
import ii3 from './poster/s-l1600.jpg'
import ii4 from './poster/madmax.jpg'
import ii5 from './poster/yourName.jpg'
import ii6 from './poster/silenVoice.jpg'




setInterval(() => {
  // `test${1}`  === "test1"
  let num = Math.floor(Math.random() * 6) 
  console.log({num});
  const container = document.querySelector(`.containern--${num}`);
  if (container.classList.contains("swap")) {
    container.classList.remove("swap");
  } else {
    container.classList.add("swap");
  }
  console.log(container);
  
}, 2500);

function Hero() {
  return (
<div className="containern">
  <img src={logo} alt="" className="logo" />

    <div className="continernbh containern--0">
    <img src={ii2} alt="" />
    <img src={i2} alt="" />

    </div>
    <div className="continernbh containern--1">
    <img src={ii1} alt="" />
    <img src={i1} alt="" />
    </div>
    <div className="continernbh containern--2">
    <img src={ii3} alt="" />
    <img src={i3} alt="" />
    </div>
    
    <div className="continernbh containern--3">
    <img src={ii4} alt="" />
    <img src={i5} alt="" />
    </div>

    <div className="continernbh containern--4">
    <img src={ii5} alt="" />
    <img src={i4} alt="" />
    </div>

    <div className="continernbh containern--5">
    <img src={ii6} alt="" />
    <img src={i6} alt="" />
    </div>
    
    

</div>

  )
}

export default Hero