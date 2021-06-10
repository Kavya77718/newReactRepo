import React, { Component } from 'react';
import AddressService from '../services/addressService';

class UpdateAddress extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
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
        this.updateAddress=this.updateAddress.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
      
    }

    componentDidMount(){
            AddressService.getAddressById(this.state.id).then((res) =>{
                let address=res.data;
                this.setState({flatNo: this.state.flatNo, buildingName: this.state.buildingName, area: this.state.area,
                    location: this.state.location, pincode: this.state.pincode, state: this.state.state
                });
            });
        }

        updateAddress = (e) => {
            e.preventDefault();
            let address={id:this.state.id,flatNo: this.state.flatNo, buildingName: this.state.buildingName, area: this.state.area,
                location: this.state.location, pincode: this.state.pincode, state: this.state.state  };
            console.log('address => '+ JSON.stringify(address));
    
            AddressService.updateAddress(this.state.id,address).then(res => {
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


    render(){
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Address </h3>
                            <div className="card-body">
                                <form>
                                
                                <div className="form-group">
                                        <label>AddressId:</label>
                                        <input placeholder="AddressId" name="AddressId" className="form-control" value={this.state.id} onChange={this.changeIdHandler}/>
                                </div>
                                    <div className="form-group">
                                        <label>flatNo:</label>
                                        <input placeholder="flat no" name="flatno" className="form-control" value={this.state.flatNo} onChange={this.changeFlatNoHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Building Name:</label>
                                        <input placeholder="Building Name" name="buildingName" className="form-control" value={this.state.buildingName} onChange={this.changeBuildingNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Area:</label>
                                        <input placeholder="Area" name="Area" className="form-control" value={this.state.area} onChange={this.changeAreaHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input placeholder="City" name="city" className="form-control" value={this.state.location} onChange={this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>State:</label>
                                        <input placeholder="State" name="state" className="form-control" value={this.state.state} onChange={this.changeStateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Pincode:</label>
                                        <input placeholder="Pincode" name="pincode" className="form-control" value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                    </div>
                
                                    <button className="btn btn-success" onClick={this.updateAddress}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default UpdateAddress;