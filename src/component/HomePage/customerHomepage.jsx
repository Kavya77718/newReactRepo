    import { Component } from "react";
    import Navbar from "./navbar";
    import Carousel from './carousel'
    import Footer from "./footer";
    import Card from "./card";
    import Type from "./type";
  

    class CustomerHomePage extends Component{
        state = {  }
        render() { 
            return (  
                <div style={{"backgroundColor": "white"}}>
                    
                    <Navbar /><br></br>           
                    <Carousel/><br></br>
                    <Card/><br></br>
                    <Type/><br></br>
                   
                    <Footer/>

                
                </div>

            );
        }
    }
    
    export default CustomerHomePage;