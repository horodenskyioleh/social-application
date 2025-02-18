import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../store/slices/commentsSlice'

const Comments = ( {postId} ) => {
    const dispatch = useDispatch()
    const comments = useSelector( (state) => state.comments.comments[postId] || [] )
    const [newComment, setNewComment] = useState('')

  

  return (
    <div>
        <h4>Comments: </h4>
        <ul>
            {
                comments.length > 0 ? ( //control if there are the post
                    comments.map( (comment, index ) => (
                        <li key={index}>{comment}</li>
                    ))
                ) : ( <p>There aren't a post</p>)
                // comments.map( (comment, index ) => (
                //     <li key={index}>{comment}</li>
                // ))
            }
        </ul>
        <input 
            type='text'
            value={newComment}
            onChange={ (e) => setNewComment(e.target.value)}
            placeholder='Add a comment ...'
        />
        <button onClick={() => dispatch(addComment({postId, text: newComment}))}>Add</button>
    </div>
  )
}

export default Comments