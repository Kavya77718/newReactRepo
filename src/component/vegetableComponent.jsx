import React from 'react'
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../action/product_Actions";
import { setCart } from "../action/shopping-actions";
import { connect } from "react-redux";
import { addToCart } from "../action/shopping-actions";
const { useEffect,useState } = React;


const axios = require("axios");
let id = localStorage.getItem('userId');
function VegetableComponent({addToCart}) {
    const products = useSelector((state) => state.product.products);
   

   
  const dispatch = useDispatch();

  const getCartItems = async () => {
    let id = localStorage.getItem('userId');
    console.log("userid",id)
    const res = await axios.get(
      `http://localhost:8080/getproducts/cart/${encodeURI(id)}`
    );
    console.log("cart res", res);

    dispatch(setCart(res.data));
  };

  useEffect(() => {
    getCartItems();
  }, []);
  console.log(products);
    return (
        <div>

             <Container>
      <Row xs={1} md={3} className="g-4">
        {products.length &&
          products.map((veg) => (
            <Col key={veg.vegId}>
              <Card>
                <Card.Body>
                  {" "}
                  <Card.Title>
                    <Link
                      to={`vegetable/${veg.vegId}`}
                      style={{ textDecoration: "none" }}
                    >
                      {veg.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>Rs.{veg.price}</Card.Text>
                  {/* <Card.Text>{med.medicineDescription}</Card.Text> */}
                  <Button onClick={()=> {addToCart(veg.vegId,id);getCartItems()}} variant="primary">
                    AddToCart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

export default connect(mapStateToProps,{ addToCart })(VegetableComponent);