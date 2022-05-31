import React from 'react';
import Logo from '../images/logo.png';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Navbartop.css';


function Navbartop() {
  
    return (                       
     
  <Navbar sticky="top" bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand ><img src={Logo}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="React Bootstrap logo" />Soundcloud</Navbar.Brand>
    <Nav className="me-auto justify-content-end" >
      <Nav.Link href="#discoverpage">Discover</Nav.Link>
      <Nav.Link href="#joinpage">Join</Nav.Link>
      
    </Nav>
    
    </Container>
  </Navbar>



           
    
      );
  }
  
  export default Navbartop;
  