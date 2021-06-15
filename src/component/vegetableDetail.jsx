import React from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'

const { useEffect,useState } = React;
function VegetableDetail() {
    const {vegId}= useParams();
const [veg, setveg] = useState({})
    const fetchVegDetail= async()=>{
        const res= await axios.get(`http://localhost:8080/api/vegetable/viewvegetablebyid/${vegId}`)
        setveg(res.data)
        console.log(veg)
         
        
    }
    useEffect(() => {
      fetchVegDetail();
      
    }, [])
    console.log(veg.name)
    return (
        <div>
            <Card>
            <Card.Body>
                  {" "}
                  <Card.Title>
                    <Link
                      style={{ textDecoration: "none" }}
                    >
                      {veg.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>Rs.{veg.price}</Card.Text>
                  <Card.Text>{veg.description}</Card.Text>
                 
                 
                </Card.Body>
                
            </Card>
        </div>
    )
}

export default VegetableDetail