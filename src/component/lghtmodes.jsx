import React from 'react'
import lighmode from '../assets/4808961-200.png'
import { useState } from 'react'

function Lghtmodes() {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
    
  return (<>
    <a onClick={handleClick} className='myStyle'><img src={lighmode} alt="" /></a></>
  )
}

export default Lghtmodes