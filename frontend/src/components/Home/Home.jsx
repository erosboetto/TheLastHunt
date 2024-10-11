import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Play from '../Play/Play'
import './Home.css'

const Home = () => {
    console.log('Home')
    return (
    <div className='position' >
        <Play />
        <div className='line'></div>
        <Container className='desc'>
            <h1>ESPLORA LA GALASSIA</h1> 
            <p>
                The Last Hunt è il gioco single player open world ambientato nella galassia di Arcturus.
                Avrai la possibilità di esplorare pianeti, far parte di corporazioni corrotte, viaggiare da mondi a mondi e prendere decisioni che varieranno il proseguimento della tua storia.
                Rischia tutto nei panni di Zara Valen, un intrepida cacciatrice di taglie in cerca di verità e giustizia, combatti, ruba e uccidi per riportare ordine nella galassia e diventare la più rinomata tra i cacciatori di taglie.
            </p> 
        </Container>
        <div className='download'>
            <Button className='mainDiv'>
                <Link to="/requirements" className='link'>
                    <h2>SCARICA ORA</h2>
                </Link>
            </Button>
        </div>
    </div>
    );
  };
  
  export default Home;