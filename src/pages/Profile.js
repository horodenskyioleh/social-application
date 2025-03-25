import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Friends from '../components/Friends'
//import { logoutUser } from '../store/slices/authSlice'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

import '../styles/profile.scss'

const Profile = () => {
    const user = useSelector( (state) => state.auth.user );

    const [friends, setFriends] = useState([]);
    
    const navigate = useNavigate();

    useEffect( () => {
      if (!user) {
        navigate('/login');

      } else {
        axios.get(`http://localhost:8080/users/${user.id}`)
        .then((res) => setFriends(res.data.friends || []))
        .catch((err) => console.error("Помилка завантаження друзів:", err));
      }
    }, [user, navigate]);




  return (
    <>
      
      <div className="container profile"> 
        
        <h2>Profile</h2>
        
            
              <div className="profile-card">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                    alt="Avatar"
                    className="profile-avatar"
                />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">Welcome, {user.name} !</p>
                
                </div>
        <h3>Friends:</h3>
        <ul>
        {friends.length > 0 ? (
          friends.map((friend) => (
            <li key={friend.id}>
              <Link to={`/friend/${friend.id}`}>{friend.username}</Link>
            </li>
          ))
        ) : (
          <p>No friends</p>
        )}
      </ul>
                
            
        
        {/* <h2>Profile</h2> */}
        {/* <Friends /> */}

      </div>
    </>

    
  )
}

export default Profile