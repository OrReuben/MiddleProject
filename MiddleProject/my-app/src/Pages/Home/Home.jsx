
import BtmReviews from "../../Components/Reviews/BtmReviews";
import React from 'react'
import videoBg from './VideoBg.mp4'
import './Home.css'
import OurProductCard from "../../Components/OurProduct/OurProduct";
const Home = () => {
  return (
    <div className='Home'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className="content">
        <h1>Welcome</h1>
        <p>Let's bring your dream to reality</p>
      </div>
               <BtmReviews></BtmReviews>
               <OurProductCard></OurProductCard>
    </div>
  )
}

export default Home