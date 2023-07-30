import React from 'react'
import ClubLogo from './images/CluBlogo.png'
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav'>
      <img src={ClubLogo} alt="" />
      <p>i Technoz</p>
    </div>
  )
}

export default Nav
