
import React from 'react'
import videoBg from './VideoBg.mp4'
import './Home.css'
import Mission from '../../Components/Mission/Mission'
import OurProduct from '../../Components/OurProduct/OurProduct'
import InfoCard from '../../Components/card-info/infoCard'

import Mission from '../../Components/Mission/Mission'
import Reviews from '../../Components/Reviews/Reviews'
import BtmReviews from '../../Components/Reviews/BtmReviews'
import LeaveDetails from '../../Components/leaveDetails/LeaveDetails'


const Home = () => {
  return (
    <div className='Home'>

     
<div>

      
</div>

      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className="content">
        <h1>Welcome</h1>
        <p>Let's bring your dream to reality</p>
        
        <span className="hero__scroll aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
				Scroll down <br/>
				<i className="chevron bottom"></i>
			</span>

      </div>
        {/* <Mission /> */}
        



    </div>

  )
}

export default Home