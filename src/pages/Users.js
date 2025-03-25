import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addFriend, fetchFriends } from '../store/slices/authSlice'
import '../styles/styles-generic.scss'

const usersList = [
    { id: 1, name: 'John'},
    { id: 2, name: 'Jane'},
    { id: 3, name: 'Mike'}
]

const Users = () => {
    const dispatch = useDispatch();
    const friends = useSelector( (state) => state.auth.friends);
    

    useEffect(() => {
        dispatch(fetchFriends());
      }, [dispatch]);

  return (
    <div className='users-container'>
        <h2>Lists of users</h2>
        <ul>
            {
                usersList.map( (user) => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        {/* {!friends.includes(user.name) && (
                            <button onClick={() => dispatch(addFriend(user.name))}>Add in friends</button>
                        )} */}
                        {
                            !friends.some(friend => friend.name === user.name) && (
                                <button onClick={() => dispatch(addFriend(user.name))}>Add to friends</button>
                              )
                        }
                        {
                            friends.some(friend => friend.name === user.name) && (
                                <Link to={`/friend/${user.id}`}>
                                    <button>View profile</button>
                                </Link>
                        )}
                    </li>
                ))
            } 
        </ul>
    </div>
  )
}

export default Users