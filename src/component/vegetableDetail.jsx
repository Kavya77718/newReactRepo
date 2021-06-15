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
        const res= await axios.get(`http://localhost:8082/api/vegetable/viewvegetablebyid/${encodeURI(vegId)}`).then(res=>{
            console.log("response of single",res);
            setveg(res.data);
        }).catch(err=>{
            console.error(err)
          
        })
        
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
     