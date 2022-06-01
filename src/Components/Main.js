import React from 'react';
import Landingpage from '../images/landing-page-girl.png';
import './Main.css';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

//d-flex justify-content-center align-items-center
function Main() {
    return (
      <Container className="Landing " id="main">
        <Row className="Row">
          <Col className="girl">
          <img className="heroimage" src={Landingpage} />
            </Col>
          <Col className="texto">
          <h1>Feel the music</h1>
          <p className= "sub-title">Stream over 20 thousend song with one click</p>
          <Button className="text-center" href= "#joinpage" variant="primary" size="sm">Join now</Button>{' '}
          </Col>
        </Row>
        
       
        
      

    
        
       
      
 

        </Container>
      );
  }
  
  export default Main;