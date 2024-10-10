import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <p className="footer-text">
          <strong>EPICODE</strong> - Copyright &copy; {currentYear}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
