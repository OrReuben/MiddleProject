import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Payment from "./Pages/Payment/Payment";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="payment">Payment</Link></li>
      <li><Link to="register">Register</Link></li>
      <li><Link to="about">About</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
