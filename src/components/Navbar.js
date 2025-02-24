import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/styles-generic.scss'
import '../styles/navbar.scss'

const Navbar = () => {
    const user = useSelector((state) => state.auth.user)
    if (!user) return null; //якщо не має користувача не показує меню
    
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            
            <div className='navbar-links'>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Frinds</Link>
                <Link to="/chat">Messages</Link>
                <Link to="/setting">Setting</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar