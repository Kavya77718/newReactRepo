import React, { Component } from 'react';
import AddressService from '../services/addressService';
class AddAddress extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            flatNo: '',
            buildingName: '',
            area: '',
            location:'',
            pincode: '',
            state: ''
        }
        this.changeFlatNoHandler=this.changeFlatNoHandler.bind(this);
        this.changeBuildingNameHandler=this.changeBuildingNameHandler.bind(this);
        this.changeAreaHandler=this.changeAreaHandler.bind(this);
        this.changeLocationHandler=this.changeLocationHandler.bind(this);
        this.changePincodeHandler=this.changePincodeHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.saveAddress=this.saveAddress.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    saveAddress = (e) => {
        e.preventDefault();
        let address={id:this.state.id,flatNo: this.state.flatNo, buildingName: this.state.buildingName, area: this.state.area,
                     location: this.state.location, pincode: this.state.pincode, state: this.state.state  };
        console.log('address => '+ JSON.stringify(address));

        AddressService.createAddress(address).then(res => {
            this.props.history.push(`/address`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({id: event.target.value})
    }

    changeFlatNoHandler=(event) =>{
        this.setState({flatNo: event.target.value})
    }

    changeBuildingNameHandler=(event) =>{
        this.setState({buildingName: event.target.value})
    }

    changeAreaHandler=(event) =>{
        this.setState({area: event.target.value})
    }

    changeLocationHandler=(event) =>{
        this.setState({location: event.target.value})
    }

    changeStateHandler=(event) =>{
        this.setState({state: event.target.value})
    }

    changePincodeHandler=(event) =>{
        this.setState({pincode: event.target.value})
    }

    cancel(){
        this.props.history.push('/address');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form onClick={this.saveAddress}>
                                
                                    <div className="form-group">
                                        <label>flatNo:</label>
                                        <input placeholder="flat no" 
                                        name="flatno" 
                                        className="form-control" 
                                        value={this.state.flatNo} 
                                        onChange={this.changeFlatNoHandler} 
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Building Name:</label>
                                        <input placeholder="Building Name" 
                                        name="buildingName" className="form-control" 
                                        value={this.state.buildingName} 
                                        onChange={this.changeBuildingNameHandler}
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Area:</label>
                                        <input placeholder="Area"
                                         name="Area" className="form-control"
                                         value={this.state.area}
                                         onChange={this.changeAreaHandler}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input placeholder="City"
                                        name="city" 
                                        className="form-control" 
                                        value={this.state.location} 
                                        onChange={this.changeLocationHandler}
                                        required placeholder="Enter a city" />
                                    </div>
                                    <div className="form-group">
                                        <label>State:</label>
                                        <input placeholder="State" name="state"
                                        className="form-control" 
                                        value={this.state.state} 
                                        onChange={this.changeStateHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Pincode:</label>
                                        <input placeholder="Pincode" 
                                        name="pincode" 
                                        className="form-control" 
                                        value={this.state.pincode} 
                                        onChange={this.changePincodeHandler}
                                        />
                                    </div>
                
                                    <button className="btn btn-success"
                                     >
                                     Save
                                     </button>
                                    <button className="btn btn-danger" 
                                    onClick={this.cancel.bind(this)} 
                                    style={{marginLeft:"10px"}}>
                                    Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default AddAddress;