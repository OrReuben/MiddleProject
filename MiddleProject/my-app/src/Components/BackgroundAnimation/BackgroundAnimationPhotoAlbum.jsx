import PhotoAlbum from "../../Pages/Album/PhotoAlbum";
import "./BackgroundAnimation.css";

export default function BackgroundAnimationPhotoAlbum() {
  return (
    <div>
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
      </ul>
        <PhotoAlbum />
    </div>
    </div>
  );
}
