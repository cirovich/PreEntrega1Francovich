import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from "./Carrito"
import {NavLink,Link} from "react-router-dom"

function Header() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Link to="/"><h1>Cerveza TOSKA</h1></Link>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="me-auto">
            <NavLink to="/cat/1">categoria 1</NavLink>
            <NavLink to="/cat/2">categorias 2</NavLink>
            </Nav>
            <Carrito/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;