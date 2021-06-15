import React from 'react'
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setvegetables } from "../action/vegetable-actions";
import { setCart } from "../action/shopping-actions";
import { connect } from "react-redux";
import { addToCart } from "../action/shopping-actions";
const { useEffect } = React;


const axios = require("axios");
let id = localStorage.getItem('userId');
function VegetableComponent({addToCart}) {
    const vegetables = useSelector((state) => state.veg.vegetables);

  const dispatch = useDispatch();

  const getCartItems = async () => {
    let id = localStorage.getItem('userId');
    console.log("userid",id)
    const res = await axios.get(
      `http://localhost:8082/getproducts/cart/${encodeURI(id)}`
    );
    console.log("cart res", res);

    dispatch(setCart(res.data));
  };
  const handleAdd = (vegid) => {
    if (vegid === null) {
      alert("login");
    } else {
      console.log("veg",vegid)
      addToCart(vegid,id);
      getCartItems();
    }
  };

  const getVegList = async () => {
    const { data } = await axios.get("http://localhost:8082/api/vegetable/view");

    dispatch(setvegetables(data));
  };

  useEffect(() => {
    getCartItems();
    // getCartItems();
  }, []);
  console.log(vegetables);
    return (
        <div>
             <Container>
      <Row xs={1} md={3} className="g-4">
        {vegetables.length &&
          vegetables.map((veg) => (
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
                  {/* <Card.Text>{veg.vegicineDescription}</Card.Text> */}
                  <Button onClick={()=> {addToCart(veg.vegId,id)}} variant="primary">
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