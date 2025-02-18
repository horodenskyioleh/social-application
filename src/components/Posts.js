import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, addPost, deletePost } from '../store/slices/postsSlice'
import Comments from './Comments'

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector( (state) => state.posts.posts )
    const [newPost, setNewPost] = useState('')

    useEffect( () => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleAddPost = () => {
        if(newPost.trim()) {
            dispatch(
                addPost(
                    {title: newPost, body: 'New Post'}
                ));
                setNewPost('');
        }
    };


  return (
    <div>
        <h2>Posts</h2>
        {/* <input 
            type='text'
            value={newPost}
            onChange={ (e) => setNewPost(e.target.value)}
            placeholder='Write a post'
        />
        <button onClick={handleAddPost}>Add</button>
        <ul>
            {
                posts.map((post) => (
                    <li key={post.id}>
                        {post.title} 
                        <button onClick={ () => dispatch(deletePost( post.id) )}>Delete</button>
                    </li>
                ))
            }
        </ul> */}
        <Comments postId = {posts.id}/>
    </div>
  )
}

export default Posts