import './MyNav.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import copertina from '../img/copertina.jpg'

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-dark mb-3"
      bg="black"
      data-bs-theme="dark"
      sticky='top'
    >
      <Container fluid>
        <Link to="/">
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
          <Nav className="me-auto">
            <Link to="/Personaggi">
              <div className="nav-link">Personaggi</div>
            </Link>
            <Link to="/Armi">
              <div className="nav-link">Armi</div>
            </Link>
            <Link to="/Supporto">
              <div className="nav-link">Supporto</div>
            </Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNav
