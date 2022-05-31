import React from 'react';
import './Sectionjoin.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';





function Sectionjoin() {
    return (
      <div className="join" id= "joinpage">
        <h2 className="joinsubtittle">Join the <h2 className="fun">fun.</h2>
  </h2>
      <div className="formulario">
        <Form>
        
          <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput" >Name:</Form.Label>
          <Form.Control id="disabledTextInput"  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email:</Form.   Label>
          <Form.Control id="disabledTextInput"  />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Password:</Form.Label>
        <Form.Control id="disabledTextInput"  />
        </Form.Group>    
    
        <Button  className="btn" type="submit">Join now</Button>
        
        </Form>
      </div>
     
   </div>
    );
  }
  
  
  export default Sectionjoin;