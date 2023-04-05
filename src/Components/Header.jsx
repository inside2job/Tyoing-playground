import React from 'react'
import AccountCircle from './AccountCircle'
import typo from '../download.jpg'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
        <img className='logo-pic' src={typo} alt='Logo' />
        </div>
        <div className="user-btn">
            <AccountCircle/>
        </div>
    </div>
  )
}

export default Header