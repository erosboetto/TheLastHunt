import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Carousel.css';

// Array di immagini importate localmente
const images = [
  { src: require('../img/pianeti/astra-prime.jpg'), alt: 'Immagine 1', descrizione: "Il pianeta centrale e il più grande. È una metropoli galattica avanzata, sede delle principali corporazioni e governi."},
  // { src: require('../img/pianeti/eldora.jpg'), alt: 'Immagine 2', descrizione: "Un paradiso verdeggiante, con lussureggianti giungle tropicali e enormi creature aliene."},
  { src: require('../img/pianeti/zyron.jpg'), alt: 'Immagine 3', descrizione: "Un pianeta minerario desertico simile a Marte. Antiche miniere e città industriali abbandonate sono sparse nel paesaggio."},
  { src: require('../img/pianeti/glaciera.jpg'), alt: 'Immagine 4', descrizione: "Un pianeta completamente coperto di ghiaccio e neve, abitato da tribù locali e creature pericolose."},
  { src: require('../img/pianeti/obsidia.jpg'), alt: 'Immagine 5', descrizione: "Un mondo vulcanico, costantemente sconvolto da eruzioni e scosse sismiche."},
  // { src: require('../img/pianeti/vortex.jpg'), alt: 'Immagine 6', descrizione: "Un pianeta composto da gigantesche formazioni cristalline che emettono energia pura."}
];

const CarouselComponent = () => {
  return (
  <Container className='posizione'>
    <Carousel className='d_carousel' indicators={false} interval={null}>
      {images.map((images, index) => (
        <Carousel.Item key={index}>
          <Container style={{width: '80%'}}>      
              <img
                className="w-100"
                src={images.src}
                alt={images.alt}
              />
          </Container>
          <Container className='border'> 
            <p>{images.descrizione}</p>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
    {/* {images.map((images, index) => (
      <div key={index}>
        
      </div>
    ))} */}
  </Container>
  );
};

export default CarouselComponent;