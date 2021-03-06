import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Order() {
  const history = useHistory();

  const [totalAmount, setTotalAmount] = useState("");
  const setTotal = async () => {
    const res = await axios.get(
      `http://localhost:8080/gettotal/cart/${encodeURI(
        localStorage.getItem("userId")
      )}`
    );
    setTotalAmount(res.data);
  };
  useEffect(() => {
    setTotal();
  }, []);

  const [address, setAddress] = useState({
    flatNo: "",
    buildingName: "",
    area: "",
    location: "",
    pincode: "",
    state: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios
      .post(
        `http://localhost:8081/customer/${encodeURI(
          localStorage.getItem("userId")
        )}/address`,
        address
      )

      .then((res) => {
        console.log(res.data);

        history.push("/paymentpage");

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
  };

  return (
    <div style={{ width: "480px", margin: "auto", marginTop: "50px" }}>
      <h2> Confirm Shipping Address</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>Flat No</Form.Label>
          <Form.Control
            placeholder="flatNo"
            onChange={(e) => setAddress({ ...address, flatNo: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBuilding">
          <Form.Label>BuildingName</Form.Label>
          <Form.Control
            onChange={(e) =>
              setAddress({ ...address, buildingName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridArea">
          <Form.Label>Area</Form.Label>
          <Form.Control
            onChange={(e) => setAddress({ ...address, area: e.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={(e) =>
              setAddress({ ...address, location: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>State</Form.Label>
          <Form.Control
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          />
        </Form.Group>
        <h5>total cost for your order Rs.{totalAmount + 50}</h5>
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default Order;