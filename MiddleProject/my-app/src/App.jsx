import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Payment from "./Pages/Payment/Payment";
import Pricing from "./Components/Pricing/Pricing";
import Mission from "./Components/Mission/Mission";
import BtmReviews from "./Components/Reviews/BtmReviews";



function App() {
  return (
    <div className="App">
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
      {/* <Pricing /> */}
      <Mission/>
      <BtmReviews/>
    </div>
  );
}

export default App;
