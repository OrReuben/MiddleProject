import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Payment from "./Pages/Payment/Payment";
import Navbar from "./Components/Navbar/Navbar";
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <div className="App">
      <CssBaseline /> 
      <Navbar />  
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
