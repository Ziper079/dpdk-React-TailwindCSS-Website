import React from 'react'
import video from '../assets/video1.mp4'
const Home = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
<video src={video} autoPlay loop muted />
<div className="content">
    <h1>Hi my name is Zian Lalleman</h1>
    <p>And welcome to my website!</p>

</div>
    </div>
  )
}

export default Home