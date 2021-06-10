import React, { Component } from 'react';
import AddressService from '../services/addressService';


class ViewAddress extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            address:{}
        }
    }

    componentDidMount(){
        AddressService.getAddressById(this.state.id).then( res =>{
            this.setState({address: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Address Details</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.id}</h1>
                    <div className ="row">
                        <label><b> flat No: </b></label>
                        <div>{this.state.address.flatNo}</div>
                    </div>
                    <div className ="row">
                        <label><b> Building Name:</b> </label>
                        <div>{this.state.address.buildingName}</div>
                    </div>
                    <div className ="row">
                        <label><b> Area: </b></label>
                        <div>{this.state.address.area}</div>
                    </div>
                    <div className ="row">
                        <label><b> City:</b> </label>
                        <div>{this.state.address.location}</div>
                    </div>
                    <div className ="row">
                        <label><b> State: </b></label>
                        <div>{this.state.address.state}</div>
                    </div>
                    <div className ="row">
                        <label><b> Pincode:</b> </label>
                        <div>{this.state.address.pincode}</div>
                    </div>
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewAddress;