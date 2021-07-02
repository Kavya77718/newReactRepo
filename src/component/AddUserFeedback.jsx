import React from "react";
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react';
import { useEffect } from 'react';
import {Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-foundation';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { Form} from "react-bootstrap";



let id = localStorage.getItem('userId');
function AddUserFeedback() {
 
  const[rating, setRating]= useState(0) 
  const[comments, setComments]= useState("") 

  const postFeedback=async()=>{
    const response = await axios.post(`http://localhost:8080/feedback/${encodeURI(localStorage.getItem('userId'))}/${encodeURI(rating)}/${encodeURI(comments)}`)
    
  }
      

     const handleSubmit=(e) => {
       e.preventDefault()
        postFeedback()    
        alert("feedback  added")    
      };

      
           
       
   
  
    return (
      <div style={{ width: "480px", margin: "auto", marginTop: "50px" }}>

        <Form onSubmit={handleSubmit}>
          <h2>   Give your Feedback</h2>
        <Form.Control
            size="lg"
            style={{ width: "425px" }}
            value={rating} 
            onChange={event=>setRating(event.target.value)} 
            type="text"/>
                <Form.Control
            size="lg"
            style={{ width: "425px" }}
           value={comments} 
           onChange={event=>setComments(event.target.value)} 
           type="text Area"/>
        
          <Button variant="primary" type="submit" >
            Submit
          </Button> 
          <Button as={Link} to= "/" variant="primary" type="submit" >
            Back
          </Button>
        </Form>
      </div>
    );
              }
    export default AddUserFeedback;