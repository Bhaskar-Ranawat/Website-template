import React from 'react'
import '../../index.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div>Logo</div>
        <div className='header-links'>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Community</a>
            <a href="">Support</a>
        </div>
        <div className='header-btn'>
            <button>Login</button>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Header