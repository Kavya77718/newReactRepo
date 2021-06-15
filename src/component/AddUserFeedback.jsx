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
  const[rating, setRating]= useState({
  }) 
  const[comments, setComments]= useState({
  }) 
      

     const handleSubmit=(vegId) => {
      if (vegId === null) {
        alert("login");
      } else {
        console.log("veg",vegId)
        const res = axios.post(`http://localhost:8080/feedback/${encodeURI(localStorage.getItem('userId'))}/${encodeURI(localStorage.getItem('vegId'))}/${encodeURI(localStorage.getItem('rating'))}/${encodeURI(localStorage.getItem('comments'))}`)
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err);
        })
      }
        };   
       
   
  
    return (
      <div style={{ width: "480px", margin: "auto", marginTop: "50px" }}>

        <Form onSubmit={handleSubmit}>
        <Form.Control
            size="lg"
            style={{ width: "425px" }}
            placeholder="Rating"
            onChange={(e) =>
                setRating({ ...rating, rating: e.target.value })
                }/>
                <Form.Control
            size="lg"
            style={{ width: "425px" }}
            placeholder="Comments"
            onChange={(e) =>
                setComments({ ...comments, comments: e.target.value })
                }/>
        
          <Button  variant="primary" type="submit">
            Submit
          </Button> 
        </Form>
      </div>
    );
              }
    export default AddUserFeedback;