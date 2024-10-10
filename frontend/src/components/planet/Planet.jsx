import {React, useEffect, useState} from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Planet.css';
import axios from 'axios';


const Planet = ({ id }) => {
  const [planets, setPlanets] = useState([]);
  const fetchPlanets = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/planets");
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPlanets().then((data) => setPlanets(data));
  }, []);

  return (
  <Container id={id} className='posizione'>
    <Carousel className='d_carousel' indicators={false} interval={null}>
      {planets && planets.length > 0 && planets.map((planet) => (
        <Carousel.Item key={planet._id} className='b_carousel'>
          <Container style={{width: '80%'}}>      
              <img
                className="w-100"
                src={planet.src}
                alt={planet.name}
              />
          </Container>
          <Container className='desc'> 
            <p>{planet.description}</p>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  );
};

export default Planet;