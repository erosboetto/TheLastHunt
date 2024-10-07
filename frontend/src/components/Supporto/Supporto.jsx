// FaqPage.js
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Supporto.css'

const FaqPage = () => {
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');
  const [image, setImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  }


  return (
    <div className='div'>
      <h1 className='title'>Supporto</h1>
      <div className='line'></div>
      <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Compilare i campi sottostanti</h2>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Control
                  type="email"
                  placeholder="Inserisci email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Control
                  type="problem"
                  placeholder="Scrivi qui il problema riscontrato*"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Control
                  type="img"
                  placeholder="Inserisci immagine del problema (facoltativo)"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>

            {/* Messaggio di errore in caso di fallimento */}
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

            <Button variant="primary" type="submit" className="mt-3">
              invio
            </Button>
          </Form>
      </Container>
    </div>
  );
};

export default FaqPage;
