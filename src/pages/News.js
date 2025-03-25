import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from '../store/slices/newPostsSlice';
import '../styles/news.scss'

const News = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const user = useSelector((state) => state.auth.user);
    const [content, setContent] = useState('');

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handlePost = () => {
        if (content.trim()) {
          dispatch(addPost({ userId: user.id, content }));
          setContent('');
        }
    };
    


    console.log(posts)
  return (
    <div className="news-container">
      <h2>News</h2>
      
      {user && (
        <div className="new-post">
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="What's new?" />
          <button onClick={handlePost}>Publish</button>
        </div>
      )}

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

  


export default News