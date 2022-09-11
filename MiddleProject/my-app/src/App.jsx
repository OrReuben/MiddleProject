import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Payment from "./Pages/Payment/Payment";
import Pricing from "./Components/Pricing/Pricing";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Calender from "./Pages/Calender/Calender";
import OurProduct from "./Components/OurProduct/OurProduct";
import InfoCard from "./Components/card-info/infoCard";

import Reviews from "./Components/Reviews/Reviews";
import LeaveDetails from './Components/leaveDetails/LeaveDetails'









import InfintyText from "./Components/infinty-text/infintyText";
import Svg from "./Components/svg/svg";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="payment" element={<Payment />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="event-date" element={<Calender />} />
        </Routes>
      </div>




    </div>
  );
}

export default App;
