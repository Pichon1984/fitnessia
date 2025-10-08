import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'

function HeaderComponents() {
  return (
    <Navbar bg="light" expand="md" sticky="top">
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto justify-content-center" variant="tabs
">
          <Nav.Link as={NavLink} to="/" eventKey="/home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/instructoria" eventKey="/instructoria">
            InstructorIa
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contactpage" eventKey="/contactpage">
            Contacto
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" eventKey="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderComponents;

