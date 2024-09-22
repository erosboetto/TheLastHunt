import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css';

// Array di immagini importate localmente
const images = [
  { src: require('../img/pianeti/astra-prime.jpg'), alt: 'Immagine 1' },
  // { src: require('../img/pianeti/eldora.jpg'), alt: 'Immagine 2' },
  { src: require('../img/pianeti/zyron.jpg'), alt: 'Immagine 3' },
  { src: require('../img/pianeti/glaciera.jpg'), alt: 'Immagine 4' },
  { src: require('../img/pianeti/obsidia.jpg'), alt: 'Immagine 5' },
  // { src: require('../img/pianeti/vortex.jpg'), alt: 'Immagine 6' }
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className='d_img'>          
            <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
            />
          </div>

          <Carousel.Caption>
            <h3>{image.alt}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;