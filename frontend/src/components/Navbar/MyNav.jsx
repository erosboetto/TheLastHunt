import './MyNav.css';
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import copertina from '../img/copertina.jpg'

const MyNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Flag per alternare tra login e registrazione
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // Per la registrazione
  const [errorMessage, setErrorMessage] = useState('');

  // Funzione per aprire e chiudere la modale
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
    setIsLogin(true);
    resetForm();
  };

  // Funzione per alternare tra login e registrazione
  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
    setErrorMessage(''); // Resetta eventuali errori
    resetForm();
  };

  // Funzione per resettare i campi del form
  const resetForm = () => {
    setUsername('');
    setPassword('');
    setEmail('');
  };

  // Gestione del submit per il login e la registrazione
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const endpoint = isLogin ? 'login' : 'register'; // Login o registrazione
    const body = isLogin
      ? { username, password } // Dati per il login
      : { username, email, password }; // Dati per la registrazione

    try {
      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        console.log(`${isLogin ? 'Login' : 'Registration'} successful`);
        handleModalClose(); // Chiudi modale
      } else {
        setErrorMessage(data.message || `${isLogin ? 'Login' : 'Registration'} failed`);
      }
    } catch (error) {
      setErrorMessage(`Error during ${isLogin ? 'login' : 'registration'}: ` + error.message);
    }
  };

  return (
  <>
    <Navbar
      expand="lg"
      className="navbar"
      data-bs-theme="dark"
      sticky='top'
    >
      <Container fluid>
        <Link to="/" className='link'>
          <Navbar.Brand>
            <img
              alt=""
              src={copertina}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className="font-link">TheLastHunt</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Personaggi" className='link'>
              <div className="nav-link">Personaggi</div>
            </Link>
            <Link to="/Pianeti" className='link'>
              <div className="nav-link">Pianeti</div>
            </Link>
            <Link to="/Armi" className='link'>
              <div className="nav-link">Armi</div>
            </Link>
            <NavDropdown title="Supporto" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Supporto/Faq" className='link'>
                  Assistenza
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Supporto/Req" className='link'>
                  Requisiti di sistema
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            {/* Icona utente che apre la finestra di login */}
            <Button onClick={handleModalShow} variant="outline-light">
              <span>Accedi</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* Modale di Login/Registrazione */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Registrazione'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* Campo Email visibile solo nella registrazione */}
            {!isLogin && (
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Messaggio di errore in caso di fallimento */}
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

            <Button variant="primary" type="submit" className="mt-3">
              {isLogin ? 'Login' : 'Registrati'}
            </Button>
          </Form>

          {/* Toggle tra login e registrazione */}
          <p className="mt-3">
            {isLogin ? "Non hai un account?" : "Hai già un account?"}
            <Button variant="link" onClick={toggleLoginRegister}>
              {isLogin ? 'Registrati' : 'Accedi'}
            </Button>
          </p>
        </Modal.Body>
      </Modal>
</>
  )
}

export default MyNav
