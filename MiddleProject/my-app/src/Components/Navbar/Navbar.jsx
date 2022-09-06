import { Link } from "react-router-dom";
function Navbar() {
    return (
      <div className="Navbar">
        <nav>
      <li className="home"><Link to="/">Home</Link></li>
        <ul>
      <li className="nav-link"><Link to="payment">Payment</Link></li>
      <li className="nav-link"><Link to="register">Register</Link></li>
      <li className="nav-link"><Link to="about">About</Link></li>
      </ul>
      </nav>
      </div>
    );
  }
  
  export default Navbar;
  