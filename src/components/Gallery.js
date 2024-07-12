import React, { useState } from 'react';
import Drink1 from "../assets/Gallery/Drink1.jpg";
import Drink2 from "../assets/Gallery/Drink2.jpg";
import Drink3 from "../assets/Gallery/Drink3.jpg";
import Drink4 from "../assets/Gallery/Drink4.jpg";
import Drink5 from "../assets/Gallery/Drink5.jpg";
import Drink6 from "../assets/Gallery/Drink6.jpg";
import Drink7 from "../assets/Gallery/Drink7.jpg";
import Truck1 from "../assets/Gallery/Truck1.jpg";
import Truck2 from "../assets/Gallery/Truck2.jpg";
import Truck3 from "../assets/Gallery/Truck3.jpg";
import Truck4 from "../assets/Gallery/Truck4.jpg";
import Truck5 from "../assets/Gallery/Truck5.jpg";
import Truck6 from "../assets/Gallery/Truck6.jpg";
import Other1 from "../assets/Gallery/Other1.jpg";
import Other2 from "../assets/Gallery/Other2.jpg";
import '../App.css'; // Ensure this imports your CSS file

const galleryItems = [
  { id: 1, type: 'image', src: Drink1, alt: 'Drink 1' },
  { id: 2, type: 'image', src: Drink2, alt: 'Drink 2' },
  { id: 3, type: 'image', src: Drink3, alt: 'Drink 3' },
  { id: 4, type: 'image', src: Drink4, alt: 'Drink 4' },
  { id: 5, type: 'image', src: Drink5, alt: 'Drink 5' },
  { id: 6, type: 'image', src: Drink6, alt: 'Drink 6' },
  { id: 7, type: 'image', src: Drink7, alt: 'Drink 7' },
  { id: 1, type: 'image', src: Truck1, alt: 'Truck 1' },
  { id: 2, type: 'image', src: Truck2, alt: 'Truck 2' },
  { id: 3, type: 'image', src: Truck3, alt: 'Truck 3' },
  { id: 4, type: 'image', src: Truck4, alt: 'Truck 4' },
  { id: 5, type: 'image', src: Truck5, alt: 'Truck 5' },
  { id: 6, type: 'image', src: Truck6, alt: 'Truck 6' },
  { id: 7, type: 'image', src: Other1, alt: 'Other 1' },
  { id: 7, type: 'image', src: Other2, alt: 'Other 2' },
  // Add more items here
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => openModal(item)}>
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video src={item.src} alt={item.alt} />
            )}
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            {currentItem.type === 'image' ? (
              <img src={currentItem.src} alt={currentItem.alt} />
            ) : (
              <video src={currentItem.src} controls />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
