import './MyNav.css';
import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'
import ModalContext from "../../context/ModalContext";
import { baseUrl } from "../../helpers/const";
import { useAuth } from "../../context/AuthContext";
import axios from 'axios';


const MyNav = () => {
  const { isAuthModalOpen, toggleAuthModal } = useContext(ModalContext);
  const { token, login, logout } = useAuth();
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

    try {
      const endpoint = isLogin ? "login" : "register";
      const response = await axios.post(`${baseUrl}/api/auth/${endpoint}`, formData);

      login(response.data.token);
      toggleAuthModal();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const resetForm = () => {
    setFormData({ username: "", password: "", email: "" });
    if (!isLogin) {
      toggleLoginRegister();
    }
  };

  const handleClose = () => {
    resetForm();
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
              <Nav.Link as={Link} to="/info#characters">Personaggi</Nav.Link>
              <Nav.Link as={Link} to="/info#planets">Pianeti</Nav.Link>
              <Nav.Link as={Link} to="/info#weapons">Armi</Nav.Link>
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
              {/* Login/Register button */}
              {token ? (
                <Button
                  variant="outline-light"
                  onClick={handleLogout}
                  className="logout-button"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outline-light"
                  onClick={toggleAuthModal}
                  className="login-button"
                >
                  Accedi
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login/Register Modal */}
      <Modal
        show={isAuthModalOpen}
        onHide={handleClose}
        centered
        backdrop
        keyboard
      >
        <Modal.Header closeButton className="closebutton">
          <Modal.Title>{isLogin ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Form Fields */}
            {!isLogin && (
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
            )}

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
  );
};

export default MyNav
