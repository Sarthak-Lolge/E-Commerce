import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={assets.logo} style={{width : "10rem"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ms-5">
            <Nav.Link as={NavLink}>
              <button className='btn btn-danger'>Logout</button>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;