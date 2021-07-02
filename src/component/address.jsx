import React,{ Component } from  'react'
import AddressService from '../services/addressService';

class Address extends Component {
    constructor(props){
        super(props)
        
        this.state = {  
            addresses:[]
        }
        
        this.addAddress=this.addAddress.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
        this.viewAddress = this.viewAddress.bind(this);
        this.updateAddress=this.updateAddress.bind(this);

    }
    addAddress(){
        this.props.history.push('/add-address');
    }

    updateAddress(id){
        this.props.history.push(`/update-address/${id}`);
    }

    viewAddress (id){
        this.props.history.push(`/view-address/${id}`);
    }


    deleteAddress(id){
       AddressService.deleteAddress(id).then(res => {
            this.setState({addresses: this.state.addresses.filter(address =>address.id !== id)});
        });
    }

    componentDidMount(){
        AddressService.getAllAddress().then((res) => {
        this.setState({addresses: res.data});
        });
    }
    
    
  
    render() { 
       return ( 
            <div>
             <h2  className="text-center">Address List</h2>
             <div className="row">
                
             </div>
                <div className="row">
                    <table className="table table-striped table-bordered"> 
                    <thead>
                        <tr>
                            <th>Flat No</th>
                            <th>Building Name</th>
                            <th>Area</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.addresses.map(
                                address =>
                                <tr key ={address.id}>
                                    <td>{address.flatNo}</td>
                                    <td>{address.buildingName}</td>
                                    <td>{address.area}</td>
                                    <td>{address.location}</td>
                                    <td>{address.state}</td>
                                    <td>{address.pincode}</td>
                                    <td>
                                        <button onClick = { () => this.deleteAddress(address.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewAddress(address.id)} className="btn btn-primary">View</button>
                                    </td>
                                  
                                </tr>
                                
                            )
                        
                        }
                    </tbody>
                    </table>
                </div>
           
            </div>
         );
    }
}
 
export default Address;