import React from "react";
import { NavLink, Route } from 'react-router-dom';
import { connect, useSelector } from "react-redux";
import { logoutUser } from "../../action/userActions";

import {
  Key,
  PencilSquare,
  Person,
  List,
  Bell,
  Cart,
  HeartFill,
  PersonCircle,
  BasketFill,
  Search,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom";

export function Navbar() { 

  return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" to="#">Veggies</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="#">Products</NavLink>
            </li>
            </ul>
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
                <NavLink class="nav-link " to="/profile" tabindex="-1" aria-disabled="true">Profile</NavLink>
            </li>
        <li class="nav-item">
                <NavLink class="nav-link " to="#" tabindex="-1" aria-disabled="true">Login</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link " to="#" tabindex="-1" aria-disabled="true">Register</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link " to="/cart" tabindex="-1" aria-disabled="true">Cart</NavLink>
            </li>
        </ul>
        </div>
        </nav>
        </div>
  );
}
