// import Calender from "../../Components/Callender/Callender";

import React from 'react'
import videoBg from './VideoBg.mp4'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className="content">
        <h1>Welcome</h1>
        <p>Let's bring your dream to reality</p>
      </div>
    </div>
  )
}

export default Home