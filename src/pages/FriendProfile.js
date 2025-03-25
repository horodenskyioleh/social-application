import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFriends, addFriend } from '../store/slices/authSlice';

import '../styles/friendProfile.scss'

 // Додаємо мокові дані для демонстрації
 const friendsData = [
  { id: "1", name: "John", bio: "I love traveling and programming!" },
  { id: "2", name: "Jane", bio: "photographer and traveler." },
  { id: "3", name: "Mike", bio: "Sports and music fan." }
];

const FriendProfile = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const friends = useSelector((state) => state.auth.friends);

   
    const friend = friendsData.find((f) => f.id === id);

    useEffect(() => {
      if (user) {
        dispatch(fetchFriends(user.id));
      }
    }, [dispatch, user]);

    if (!friend) {
        return <h2>User not found</h2>;
    }


  return (
    // <div className="friend-profile">
    //   <h2>{friend.name}</h2>
    //   <p>{friend.bio}</p>
    // </div>
    <div className="friend-profile">
      <h2>{friend.name}</h2>
      <p>{friend.bio}</p>
      {user && user.id !== friend.id && !friends.includes(friend.id) && (
        <button onClick={() => dispatch(addFriend({ userId: user.id, friendId: friend.id }))}>
          Add to Friends
        </button>
      )}
    </div>

  )
}

export default FriendProfile