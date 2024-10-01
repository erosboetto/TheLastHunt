// FaqPage.js
import React, { useEffect, useState } from 'react';
import './Supporto.css'

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);

  // Chiamata API per ottenere le FAQ
  const fetchFaqs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/faqs');
      const data = await response.json();
      setFaqs(data);
      console.log('supporto');
    } catch (error) {
      console.error('Errore nel recuperare le FAQ:', error);
    }
  };

  // Esegui la chiamata API quando il componente viene montato
  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className='div_color'>
      <h1>Domande Frequenti</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqPage;
