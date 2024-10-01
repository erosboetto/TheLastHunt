import React from 'react';
import Carousel from '../Carousel/Carousel'
import Play from '../Play/Play'
import './Home.css'

const Home = () => {
    return (
    <div className='position' >
        <Play />
        <Carousel />
    </div>
    );
  };
  
  export default Home;