import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFriend } from '../store/slices/authSlice'
import '../styles/styles-generic.scss'

const usersList = [
    { id: 1, name: 'John'},
    { id: 2, name: 'Jane'},
    { id: 3, name: 'Mike'}
]

const Users = () => {
    const dispatch = useDispatch();
    const friends = useSelector( (state) => state.auth.friends);

  return (
    <div className='users-container'>
        <h2>Lists of users</h2>
        <ul>
            {
                usersList.map( (user) => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        {!friends.includes(user.name) && (
                            <button onClick={() => dispatch(addFriend(user.name))}>Add in friends</button>
                        )}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Users