import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFriend, removeFriend } from '../store/slices/friendsSlice'

const Friends = () => {
    const dispatch = useDispatch();
    const friends = useSelector( (state) => state.friends.friends );


  return (
    <div>
        <h2>Friends</h2>
        <button onClick={ () => dispatch(addFriend({id: 1, name: 'John'}))}>Add</button>
        <ul>
            {
                friends.map( (friend) => (
                    <li key={friend.id}>
                        {friend.name} <button onClick={ () => dispatch(removeFriend(friend.id)) }>Remove</button>
                    </li> 
                ) )
            }
        </ul>
    </div>
  )
}

export default Friends