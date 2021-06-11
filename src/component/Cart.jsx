import React, { Component } from "react";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-center">Your cart is empty</h1>
      </div>
    );
  }
}

export default Cart;
    
    //this.Createcart=this.Createcart.bind(this);


    /*Createcart=()=>{
        this.props.history.push('/Create-cart');
    
    }

    componentDidMount(){
        
        CartService.getAllCart().then((res)=>{
            console.log("data: ", res.data);
            this.setState({carts: res.data});
    });
    console.log("carts: ", this.state.carts);
  };*/
/*
      render(){
          return(
      <div>
      <h2 className="text-center">Cart</h2>
                <div className="row">    
                   <table className="table table-striped table-bordered"> 
                    <thead>
                        <tr>
                            <th>Vegetable Name</th>
                            <th>Vegetable Price</th>
                            <th>Vegetable Type</th>
                            <th>Vegetable Quantity</th>
                            <th colSpan="3"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.carts.map(
                                Cart =>
                                <tr key ={cart.cartId}>
                                    <td>{cart.name}</td>
                                    <td>{cart.price}</td>
                                    <td>{cart.type}</td>
                                    <td>{cart.quantity}</td>
                                </tr>

                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
          );
}*/


