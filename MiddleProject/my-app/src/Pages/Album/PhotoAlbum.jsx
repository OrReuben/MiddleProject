import Album from "./Album";
import "./PhotoAlbum.css";

export default function PhotoAlbum() {
  const images = [
    " https://www.havaveadam.co.il/wp-content/uploads/2016/07/65-2.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2016/07/73-2.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2016/07/76-2.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/05/%D7%90%D7%9C%D7%A2%D7%93%D7%95-5-of-9-1.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2017/09/IMG_3494.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/05/%D7%90%D7%9C%D7%A2%D7%93%D7%95-9-of-9.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/05/%D7%90%D7%9C%D7%A2%D7%93%D7%95-1-of-9.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/06/10.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/06/5.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/06/2-1.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2017/09/2X5A1477-1.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2017/09/2X5A1710.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2017/09/DJI_0044.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2017/09/IMG_3606.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/04/pic-295.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/04/pic-434.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/08/RY-153-1.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/08/TalyaOded-3-06.17.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/08/RY-134-2.jpg.webp",
    " https://www.havaveadam.co.il/wp-content/uploads/2016/07/65-2.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2016/07/73-2.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2016/07/76-2.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2018/05/%D7%90%D7%9C%D7%A2%D7%93%D7%95-5-of-9-1.jpg.webp",
    "https://www.havaveadam.co.il/wp-content/uploads/2017/09/IMG_3494.jpg.webp",
  ];
  return (
    <div style={{ paddingTop: 20 }}>
      <Album image={images}></Album>
    </div>
  );
}
