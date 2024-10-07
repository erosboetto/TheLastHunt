import React, { useEffect, useState } from 'react';
import './Supporto.css'

const Requisiti = () => {
  const [Requ, setRequ] = useState([]);

  // Chiamata API per ottenere le FAQ
  const fetchRequ = async () => {
    console.log('supporto');
    try {
      const response = await fetch('http://localhost:5000/api/requ');
      const data = await response.json();
      setRequ(data);
    } catch (error) {
      console.error('Errore nel recuperare le FAQ:', error);
    }
  };

  // Esegui la chiamata API quando il componente viene montato
  useEffect(() => {
    fetchRequ();
  }, []);

  return (
    <div className='div_color'>
      <h1>Requisiti</h1>
      <ul>
        {Requ.map((Reqs, index) => (
          <li key={index}>
            <strong>{Reqs.question}</strong>
            <p>{Reqs.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requisiti;