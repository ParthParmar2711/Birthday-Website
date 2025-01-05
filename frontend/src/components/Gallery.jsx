// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image1.jpg")}
        >
          <img src="/images/image1.jpeg" alt="Gallery Image 1" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image2.jpg")}
        >
          <img src="/images/image2.jpeg" alt="Gallery Image 2" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image3.jpg")}
        >
          <img src="/images/image3.jpeg" alt="Gallery Image 3" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image4.jpg")}
        >
          <img src="/images/image4.jpeg" alt="Gallery Image 4" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image5.jpg")}
        >
          <img src="/images/image5.jpeg" alt="Gallery Image 5" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image6.jpg")}
        >
          <img src="/images/image6.jpeg" alt="Gallery Image 6" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image7.jpg")}
        >
          <img src="/images/image7.jpeg" alt="Gallery Image 7" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image8.jpg")}
        >
          <img src="/images/image8.jpeg" alt="Gallery Image 8" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image9.jpg")}
        >
          <img src="/images/image9.jpeg" alt="Gallery Image 9" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image10.jpg")}
        >
          <img src="/images/image10.jpeg" alt="Gallery Image 10" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image11.jpg")}
        >
          <img src="/images/image11.jpeg" alt="Gallery Image 11" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image12.jpg")}
        >
          <img src="/images/image12.jpeg" alt="Gallery Image 12" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image13.jpg")}
        >
          <img src="/images/image13.jpeg" alt="Gallery Image 13" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image14.jpg")}
        >
          <img src="/images/image14.jpeg" alt="Gallery Image 14" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image15.jpg")}
        >
          <img src="/images/image15.jpeg" alt="Gallery Image 15" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image16.jpg")}
        >
          <img src="/images/image16.jpeg" alt="Gallery Image 16" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image17.jpg")}
        >
          <img src="/images/image17.jpeg" alt="Gallery Image 17" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image18.jpg")}
        >
          <img src="/images/image18.jpeg" alt="Gallery Image 18" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image19.jpg")}
        >
          <img src="/images/image19.jpeg" alt="Gallery Image 19" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image20.jpg")}
        >
          <img src="/images/image20.jpeg" alt="Gallery Image 20" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image21.jpg")}
        >
          <img src="/images/image21.jpeg" alt="Gallery Image 21" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image22.jpg")}
        >
          <img src="/images/image22.jpeg" alt="Gallery Image 22" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image23.jpg")}
        >
          <img src="/images/image23.jpeg" alt="Gallery Image 23" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image24.jpg")}
        >
          <img src="/images/image24.jpeg" alt="Gallery Image 24" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image25.jpg")}
        >
          <img src="/images/image25.jpeg" alt="Gallery Image 25" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image26.jpg")}
        >
          <img src="/images/image26.jpeg" alt="Gallery Image 26" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image27.jpg")}
        >
          <img src="/images/image27.jpeg" alt="Gallery Image 27" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image28.jpg")}
        >
          <img src="/images/image28.jpeg" alt="Gallery Image 28" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image29.jpg")}
        >
          <img src="/images/image29.jpeg" alt="Gallery Image 29" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image30.jpg")}
        >
          <img src="/images/image30.jpeg" alt="Gallery Image 30" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image31.jpg")}
        >
          <img src="/images/image31.jpeg" alt="Gallery Image 31" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image32.jpg")}
        >
          <img src="/images/image32.jpeg" alt="Gallery Image 32" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image33.jpg")}
        >
          <img src="/images/image33.jpeg" alt="Gallery Image 33" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image34.jpg")}
        >
          <img src="/images/image34.jpeg" alt="Gallery Image 34" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image35.jpg")}
        >
          <img src="/images/image35.jpeg" alt="Gallery Image 35" />
        </div>
        <div
          className="gallery-item"
          onClick={() => handleImageClick("/images/image36.jpg")}
        >
          <img src="/images/image36.jpeg" alt="Gallery Image 36" />
        </div>
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
