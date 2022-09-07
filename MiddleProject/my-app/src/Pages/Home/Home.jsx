import Calender from "../../Components/Callender/Callender";
import LeaveDetails from "../../Components/leaveDetails/LeaveDetails";
import BtmReviews from "../../Components/Reviews/BtmReviews";


function Home() {
    return (
      <div className="Home">
        Home
       <p> hello username </p> 
       < Calender />
       <BtmReviews></BtmReviews>
       <LeaveDetails></LeaveDetails>
      </div>
    );
  }
  
  export default Home;