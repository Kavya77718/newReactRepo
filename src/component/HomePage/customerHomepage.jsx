    import { Component } from "react";
    import Navbar from './navbar_old';
    import Carousel from './carousel';
    import Footer from "./footer";
    import Card from "./card";
    import Type from "./type";
    import Content from "./content";

    class CustomerHomePage extends Component{
        state = {  }
        render() { 
            return (  
                <div style={{"backgroundColor": "white"}}>      
                    <br></br>                                        
                    <Carousel/><br></br>                  
                    <Type/><br></br>
                    <Content/>
                    <Footer /> 
                    

                
                </div>

            );
        }
    }
    
    export default CustomerHomePage;