import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { Row, Col,Card,Container } from "react-bootstrap";

function UserFeedback() {
    const[feedback,setFeedback]=useState([]);
    const getFeedback= ()=>{
        const res= axios.get(`http://localhost:8080/feedback/${encodeURI(localStorage.getItem('userId'))}/`)
        .then(res=>{
            console.log(res)
            setFeedback(res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(() => {
        getFeedback();
    }, [])
    return (
        <div>
            <Container>
      <Row xs={1} md={3} className="g-4">
        {feedback.map((feedback) => (
            <Col key={feedback.feedbackId}>
              <Card>
                <Card.Body>
                  {" "}
                  <Card.Title>
                    <Link
                      style={{ textDecoration: "none" }}
                    >
                      feedbackId:{feedback.feedbackId}
                    </Link>
                  </Card.Title>
                  <Card.Text>rating:{feedback.rating}</Card.Text>
                  <Card.Text>comments:{feedback.comments}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
        </div>
    )
}

export default UserFeedback;