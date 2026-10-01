import "./Gallery.css";
import galleryImg from "../assets/gallery.png";

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <h2>Фоточки</h2>
      </div>

      <div className="gallery-image-container">
        <img src={galleryImg} alt="Фоточки галерея" />
      </div>

      <div className="gallery-pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}

export default Gallery;