import React from 'react';
import Carousel from '../Carousel/Carousel'
import Play from '../Play/Play'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
    <Container>
        <Carousel />
        <Play />
    </Container>
    );
  };
  
  export default Home;