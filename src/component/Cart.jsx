import React, { useState } from 'react'
import axios from 'axios'
import {Card, Container, Row,Button, Col} from 'react-bootstrap'
import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux' 

function Cart() {
    const cartItems = useSelector((state) => state.shop.cart.vegetables);
   
   console.log("cart",cartItems)

    return (
        <Container>
        <Row xs={1} md={3} className="g-4">
        {cartItems&&
          cartItems.map((vege) => (
            <Col key={vege.vegId}>
              <Card>
                <Card.Body>
                    {" "}
                    <Card.Title><Link to="/description" style={{textDecoration:"none"}}>{vege.name}</Link></Card.Title>
                    <Card.Text>Rs.{vege.price}</Card.Text>
                    <Card.Text>qty:{vege.quantity}</Card.Text>
                  <Button variant="secondary">delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <Button as={Link} to="/order" >checkout</Button>
    </Container>
    )
}

export default Cart
