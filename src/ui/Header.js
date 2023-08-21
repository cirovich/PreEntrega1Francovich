import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from "./Cart"

function Header() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Cerveza TOSKA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Institucional">Institucional</Nav.Link>
              <Nav.Link href="#Pedidos">Pedidos</Nav.Link>
            </Nav>
            <Cart/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;