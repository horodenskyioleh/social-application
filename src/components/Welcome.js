import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/welcom.scss'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <p>Please login or register to continue..</p>
      <div className="links">
        <Link to="/login" className="login-link">Sign in</Link>
        <Link to="/register" className="register-link">Register</Link>
      </div>
    </div>
  )
}

export default Welcome