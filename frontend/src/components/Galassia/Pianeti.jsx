import React, { useState, useEffect } from 'react';
import './Pianeti.css';
import zyron from '../img/zyron.jpg';

const Pianeti = () => {
  // Array di immagini
  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    zyron,
    'https://via.placeholder.com/300x200?text=Image+3'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia immagine ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      console.log(images)
    }, 3000);

    return () => clearInterval(interval); // Pulisce l'interval alla fine
  }, [images.length]);

  return (
    <div>
      <img src={images[currentIndex]} alt="Slideshow" style={{ width: '500px', height: '400px' }} />
    </div>
  );
};

export default Pianeti;

