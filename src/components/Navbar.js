import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../store/slices/authSlice'
import '../styles/styles-generic.scss'
import '../styles/navbar.scss'

const Navbar = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    if (!user) return null; //якщо не має користувача не показує меню
    
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            
            <div className='navbar-links'>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Frinds</Link>
                <Link to="/chat/:id">Messages</Link>
                <Link to="news">News</Link>
                
            </div>
            <div className='button-exit'>
              <button 
                className="logout-btn" 
                onClick={() => dispatch(logoutUser())}
              >Exit</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar