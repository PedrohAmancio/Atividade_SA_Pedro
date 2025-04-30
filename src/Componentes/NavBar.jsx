import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/home">
            <img
              src="https://senai.me/wp-content/uploads/2019/09/logo-senai.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Toma_gap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Historia">Historia</Nav.Link>
            <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default NavBar;