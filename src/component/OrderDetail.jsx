import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function OrderDetail() {
  const [orders, setOrders] = useState([]);
  const getOrder = () => {
    const res = axios
      .get(
        `http://localhost:8081/orders/customer/${encodeURI(
          localStorage.getItem("userId")
        )}`
      )
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {orders.length &&
            orders.map((order) => (
              <Col key={order.orderId}>
                <Card>
                  <Card.Body>
                    {" "}
                    <Card.Title>
                      <Link style={{ textDecoration: "none" }}>
                        OrderId:{order.orderNo}
                      </Link>
                    </Card.Title>
                    <Card.Text>ordered Date:{order.orderDate}</Card.Text>
                    <Card.Text>Rs.{order.totalAmount}</Card.Text>
                    <Card.Text>Status:{order.status}</Card.Text>
                    <Card.Text>Delivery By: Today</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetail;