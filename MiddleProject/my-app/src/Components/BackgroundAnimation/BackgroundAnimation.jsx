import PhotoAlbum from "../../Pages/Album/PhotoAlbum";
import "./BackgroundAnimation.css";

export default function BackgroundAnimation() {
  return (
    <div className="area">
      <ul className="circles">
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
        <PhotoAlbum />
      </ul>
    </div>
  );
}
