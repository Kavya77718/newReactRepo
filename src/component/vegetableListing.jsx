import React, {useEffect, useState} from "react";
import axios from "axios";
import { Card, Row, Col, Button, Container, Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setvegetables } from "../action/vegetable-actions";
import VegetableComponent from "./vegetableComponent";

const VegetableListing = () => {
  const vegetables = useSelector((state) => state.vegetable.vegetables);
  const dispatch = useDispatch();
  


  const getVegList = async () => {
    const response = await axios.get("http://localhost:8082/api/vegetable/view/").catch((err) => {
      console.log("Err",err);
    });
    dispatch(setvegetables(response.data));
  };

  useEffect(() => {
    getVegList();
  }, []);
  console.log("vegetables:",vegetables);
  return (
    
    
      
    <div className="ui grid container">
    <VegetableComponent />
  </div>
  
);
};
   /* <Container style={{ marginTop: "51px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            width={"100%"}
            height={"500px"}
            alt="900x500"
            src="https://images.financialexpress.com/2020/09/ayurveda-l-pti-1200.jpeg"
          />
          <Carousel.Caption>
            <h3>OAM</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={"100%"}
            height={"500px"}
            alt="900x500"
            src="https://images.financialexpress.com/2020/09/ayurveda-l-pti-1200.jpeg"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={"100%"}
            height={"500px"}
            alt="900x500"
            src="https://images.financialexpress.com/2020/09/ayurveda-l-pti-1200.jpeg"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row xs={1} md={3} kclassName="g-4">
        {products.length &&
          products.map((med) => (
            <Col key={med.medicineId}>
              <Card>
                <Card.Body>
                  <Card.Link>
                    <Link to={`/medicine/${med.medicineId}`}>
                      <Card.Title>{med.medicineName}</Card.Title>
                    </Link>{" "}
                  </Card.Link>
                  <Card.Text>Rs.{med.medicineCost}</Card.Text>
                  <Button variant="primary">AddToCart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>*/
  

export default VegetableListing;