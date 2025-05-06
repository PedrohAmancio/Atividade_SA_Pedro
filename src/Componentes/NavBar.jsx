import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
function NavBar() {
  return (
    <>
      
      <Navbar expand="lg" style={{ width: "200vh", height: "10vh" }} bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/home">
            <img
             src="https://senai.me/wp-content/uploads/2019/09/logo-senai.jpg"
             alt="Logo Senai"
             className="navbar-logo"
           />
        
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/Home" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/Historia" className="nav-link">História</Nav.Link>
          <Nav.Link href="/Cadastro" className="nav-link">Cadastro</Nav.Link>
          <Nav.Link href="/Login" className="nav-link">Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default NavBar;