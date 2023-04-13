import React from 'react'
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

function Card() {
  return (
    <div><div className="movie">
    <img src={i1} className="poster" />
    <div className="movie-details">
        <div className="box">
            <h4 className="titel">Cruella</h4>
                <p className="riting">9.7</p>
        </div>
        <div className="overview">
            <h1>overview</h1>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
    </div>
</div></div>
  )
}

export default Card