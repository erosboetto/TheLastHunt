import './MyNav.css';
import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'
import ModalContext from "../../context/ModalContext";


const MyNav = () => {
  const { isAuthModalOpen, toggleAuthModal } = useContext(ModalContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
    setFormData({ username: "", password: "", email: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    // Handle login/register logic here
    console.log(formData);
    toggleAuthModal();
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
                alt="TheLastHunt"
                src={logo}
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
              <Link to="/characters" className='link'>
                <div className="nav-link">Personaggi</div>
              </Link>
              <Link to="/planets" className='link'>
                <div className="nav-link">Pianeti</div>
              </Link>
              <Link to="/weapons" className='link'>
                <div className="nav-link">Armi</div>
              </Link>
              <NavDropdown title="Supporto" id="collapsible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/support-form" className='link'>
                    Assistenza
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/requirements" className='link'>
                    Requisiti di sistema
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              {/* Icona utente che apre la finestra di login */}
              <Button onClick={toggleAuthModal} variant="outline-light">
                <span>Accedi</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login/Register Modal */}
      <Modal
        show={isAuthModalOpen}
        onHide={toggleAuthModal}
        centered
        backdrop
        keyboard
      >
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {!isLogin && (
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            <Button variant="primary" type="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={toggleLoginRegister}>
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyNav
