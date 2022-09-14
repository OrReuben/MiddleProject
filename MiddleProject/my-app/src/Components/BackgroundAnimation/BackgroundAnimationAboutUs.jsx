import About from "../../Pages/About/About";
import "./BackgroundAnimation.css";

export default function BackgroundAnimationAboutUs() {
  return (
    <div>
    <div className="area" >
      <ul className="circles" style={{zIndex: 1, opacity:30}}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        <About />
    </div>
    </div>
  );
}
