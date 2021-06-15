import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setvegetables } from "../action/vegetable-actions";
import vegetable_reducer from "../reducer/vegetable_reducer";
import vegetable_Types from "../services/vegetable_Types";

const { useEffect } = React;

const axios = require("axios");

function VegetableHome() {
  const vegetables = useSelector((state) => state.vegetable.vegetables);
  const dispatch = useDispatch();

  const getVegList = async () => {
    const { data } = await axios.get("http://localhost:8080/api/vegetable/view");
    console.log(data)

    dispatch(setvegetables(data));
  };

  useEffect(() => {
    getVegList();
  }, []);
  console.log(vegetables);

  return (
    <Container style={{ marginTop: "51px" }}>
      <Row xs={1} md={3} className="g-4">
        {vegetables.length &&
          vegetables.map((veg) => (
            <Col key={veg.vegId}>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.vegan.io/blog/assets/10-healthiest-vegetables-to-include-in-your-vegan-diet-2018-04-16/healthiest-vegetables-df1cf550711076d052eaade12c38289a2637c38e546182d3c0136a90cb0bb0b3.jpg"/>
                  <Card.Body>
                  <Card.Title>{veg.name}</Card.Title>
                  <Card.Title>{veg.type}</Card.Title>
                  <Card.Text>Rs.{veg.price}</Card.Text>
                  <Card.Link href="http://localhost:3000/cart"><button type="button" color="#ffffff">AddToCart</button></Card.Link>
              
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default VegetableHome;
