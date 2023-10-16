import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar: React.FC<{}> = () => {
  return (
    <div className='navbar'>
      {/* LOGO / IMAGE */}
      <span>Logo</span>

      {/* LINKS */}
      <nav className='nav'>
        <Link className='links hover' to="/">Hem</Link>
        <Link className='links hover' to="/AboutUs">Om Oss</Link>
        <Link className='links hover' to="/ContactUs">Kontakta Oss</Link>
        <button className='login'><Link className='links' to="/Login">Logga in</Link></button>
        

      </nav>
    </div>
  )
}

export default Navbar