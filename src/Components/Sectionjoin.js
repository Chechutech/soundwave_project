import React from 'react';
import './Sectionjoin.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';





function Sectionjoin() {
    return (
      <div className="join" id= "joinpage">
        <h2 className="joinsubtittle">Join the <span className="fun">fun.</span>
        </h2>
        <div className="formulario">
         <Form>
          <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput" >Name:</Form.Label>
          <Form.Control id="disabledTextInput"  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email: </Form.Label>
          <Form.Control id="disabledTextInput"  />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Password:</Form.Label>
        <Form.Control id="disabledTextInput"  />
        </Form.Group>    
    
        <Button  type="submit">Join now</Button>
        
        </Form>
      </div>
    </div>
    );
  }
  
  
  export default Sectionjoin;