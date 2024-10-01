import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Armi = () => {
    return (
    <Container>
        <p>Armi</p>
    </Container>
    );
  };

//   const [setArmi] = useState([]);

//   // Chiamata API per ottenere le FAQ
//   const fetchArmi = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/armi');
//       const data = await response.json();
//       setArmi(data);
//     } catch (error) {
//       console.error('Errore nel recuperare le FAQ:', error);
//     }
//   };

//   // Esegui la chiamata API quando il componente viene montato
//   useEffect(() => {
//     fetchArmi();
//   }, []);

//   return (
//     <div className='div_color'>
//         <h1>Armi</h1>
//     </div>
//   );
// };
  
  export default Armi;