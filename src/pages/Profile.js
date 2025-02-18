import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Friends from '../components/Friends'
import { logoutUser } from '../store/slices/authSlice'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/profile.scss'

const Profile = () => {
    const user = useSelector( (state) => state.auth.user );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);


  return (
    <>
      {user && <Navbar />}
      <div className="container profile"> 
        
        <h2>Profile</h2>
        {
            user ? (
              <div className="profile-card">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                    alt="Avatar"
                    className="profile-avatar"
                />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">Welcome, {user.name} !</p>
                <button className="logout-btn" onClick={() => dispatch(logoutUser())}>Exit</button>
              </div>
               
            ) : <p className="not-logged-in">You didn't enter on the your account</p>
        }
        {/* <h2>Profile</h2> */}
        <Friends />

    </div>
    </>

    
  )
}

export default Profile