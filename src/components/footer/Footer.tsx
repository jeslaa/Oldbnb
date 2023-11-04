import React from 'react'
import './Footer.scss'
import { BiLogoBitcoin } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      {/* Logo and Oldbnb */}
      <div className='logo'>
      <BiLogoBitcoin />
        Oldbnb
      </div>

      <div className='links'>
        <Link to={'/Policy'}>Avbokningspolicy</Link>
        <Link to={'/ContactUs'}>Kontakta oss</Link>
        <Link to={'/AboutUs'}>Om oss</Link>
      </div>
      <div className='circle-container'>
      <div className='circle'>
        Hej
      </div>

      </div>
    </div>
  )
}

export default Footer