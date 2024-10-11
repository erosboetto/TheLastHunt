import { React, useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Planet.css';
import axios from 'axios';
import { baseUrl } from "../../helpers/const";


const Planet = ({ id }) => {
  const [planets, setPlanets] = useState([]);
  const fetchPlanets = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/planets`);
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPlanets().then((data) => setPlanets(data));
  }, []);

  return (
    <Container id={id} className='container-carousel'>
      <h2>Esplora tutti i pianeti della galassia di Arcturus</h2>
      <Carousel className='carousel-dimension' indicators={false} interval={null}>
        {planets && planets.length > 0 && planets.map((planet) => (
          <Carousel.Item key={planet._id} className='carousel-item'>
            <img
              className="image-carousel"
              src={planet.src}
              alt={planet.name}
            />
            <div className='carousel-description'>{planet.description}</div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Planet;