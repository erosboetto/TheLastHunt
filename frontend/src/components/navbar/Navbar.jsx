import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import ModalContext from "../../context/ModalContext";
import { useAuth } from "../../context/AuthContext";
import { baseUrl } from "../../helpers/const";
import "./Navbar.css";

const NavbarComponent = () => {
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

  return (
    <>
      <Navbar expand="lg" className="navbar" variant="dark" sticky="top">
        <Container fluid>
          {/* Logo on the left */}
          <Navbar.Brand as={Link} to="/" className="brand me-auto">
            <img
              src={logo}
              alt="TheLastHunt"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            <span className="font-link">TheLastHunt</span>
          </Navbar.Brand>

          {/* Toggle button on the right in mobile view */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            {/* Navigation items */}
            <Nav className="mx-auto nav-links">
              <Nav.Link as={Link} to="/info">
                Info
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/characters">
                Characters
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to="/planets">
                Planets
              </Nav.Link>
              <Nav.Link as={Link} to="/weapons">
                Weapons
              </Nav.Link> */}
              <NavDropdown title="Support" id="support-dropdown">
                <NavDropdown.Item as={Link} to="/support-form">
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/requirements">
                  System Requirements
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

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
                Login / Register
              </Button>
            )}
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

export default NavbarComponent;
