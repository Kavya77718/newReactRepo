import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../action/product_Actions";
import { setCart } from "../action/shopping-actions";
import { connect } from "react-redux";
import { addToCart } from "../action/shopping-actions";
import VegetableComponent from './vegetableComponent'
const { useEffect,useState } = React;

const axios = require("axios");
let id = localStorage.getItem('userId');

function VegetableListing({ addToCart }) {
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
    const { data } = await axios.get("http://localhost:8080/api/vegetable/view");

    dispatch(setProducts(data));
  };

  useEffect(() => {
    getVegList();
    // getCartItems();
  }, []);
  console.log(products);

  return (
    <div>
    <br/>
    <br/>
   <VegetableComponent />
   </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};


export default connect(mapStateToProps, { addToCart })(VegetableListing);