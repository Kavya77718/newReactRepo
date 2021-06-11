import React, { Component } from 'react';
import VegetableService from '../services/vegetableService';


class ViewVegetable extends Component {
    constructor(props){
        super(props)
        this.state={
            vegId: this.props.match.params.vegId,
            vegetable:{}
        }
    }

    componentDidMount(){
        VegetableService.viewVegetableById(this.state.vegId).then( res =>{
            this.setState({vegetable: res.data});
        })
    }
    back(){
        this.props.history.push('/vegetable');
    }
    render() { 
        return ( 
            <div>
                <br/><br/>
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Vegetable Details</h3>
                <div className="card bg-success text-light">
                <div className ="card-body">
                <h1>{this.props.match.params.vegId}</h1>
                    <div className ="row">
                        <label><b>Vegetable Name:</b> </label>
                        <div>{this.state.vegetable.name}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vegetable Type: </b></label>
                        <div>{this.state.vegetable.type}</div>
                    </div>
                    <div className ="row">
                        <label><b>Price: </b></label>
                        <div>{this.state.vegetable.price}</div>
                    </div>
                    <div className ="row">
                        <label><b>Quantity: </b></label>
                        <div>{this.state.vegetable.quantity}</div>
                    </div>
                    <div>
                    <button className="btn btn-dark"  onClick={this.back.bind(this)} style={{marginLeft:"200px"}}>Back</button>
                    </div>
                        
                </div>

                </div>
            </div>
            </div>
         )
    }
}
 
export default ViewVegetable;