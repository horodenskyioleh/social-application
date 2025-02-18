import React from 'react'
import '../styles/home.scss'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <div className='home'>
        <h1>Home page</h1>
        {/* <div className='posts'>
            <p>here are the posts: </p>
        </div> */}
        <Posts />
    </div>
  )
}

export default Home