import React, { Component } from 'react';
import VegetableService from '../services/vegetableService';

class UpdateVegetable extends Component {

    constructor(props){
        super(props)
        this.state = {
            vegId:this.props.match.params.vegId,
            name :'',
            type:'',
            price:'',
            quantity:'',
            description:''
        }
        this.changevegIdHandler=this.changevegIdHandler.bind(this);
        this.changenameHandler=this.changenameHandler.bind(this);
        this.changetypeHandler=this.changetypeHandler.bind(this);
        this.changepriceHandler=this.changepriceHandler.bind(this);
        this.changequantityHandler=this.changequantityHandler.bind(this);
        this.changedescriptionHandler=this.changedescriptionHandler.bind(this);
        this.editvegetable=this.editvegetable.bind(this);
    }

    componentDidMount(){
        VegetableService.viewVegetableById(this.state.vegId).then((res) =>{
            let vegetable=res.data;
            this.setState({vegId:vegetable.vegId,name:vegetable.name,type:vegetable.type,price:vegetable.price,quantity:vegetable.quantity,description:vegetable.description});
        });
    }

    editvegetable = (e) => {
        e.preventDefault();
        let vegetable ={vegId:this.state.vegId,name:this.state.name,type:this.state.type,
            price:this.state.price,quantity:this.state.quantity,description:this.state.description};
        console.log('vegetable=>'+JSON.stringify(vegetable));

        VegetableService.update(this.state.vegId,vegetable).then((res) => {
              this.props.history.push(`/vegetable`);
        });

    }
    changevegIdHandler =(event) =>{
        this.setState({vegId:event.target.value});
    }
    changenameHandler= (event) => {
        this.setState({name:event.target.value});
    }
    changetypeHandler =(event) => {
        this.setState({type:event.target.value});
    }
    changepriceHandler =(event) => {
        this.setState({price:event.target.value});
    }
    changequantityHandler =(event) => {
        this.setState({quantity:event.target.value});
    }
    changedescriptionHandler =(event) => {
        this.setState({description:event.target.value});
    }

    cancel(){
        this.props.history.push('/vegetable');
    }



    render() { 
        return (  
            <div>
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.cropId}</h1>
                        
                                    <div className="form-group">
                                      <label>vegId</label>
                                      <input placeholder="VegId" name="vegId" className="form-control" value={this.state.vegId} onChange={this.changevegIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Name</label>
                                      <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changenameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Type</label>
                                      <input placeholder="Type" name="type" className="form-control" value={this.state.type} onChange={this.changetypeHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Price</label>
                                      <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.changepriceHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Quantity</label>
                                      <input placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changequantityHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Description</label>
                                      <input placeholder="Description" name="description" className="form-control" value={this.state.description} onChange={this.changedescriptionHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.editvegetable.bind(this)}>Save</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default UpdateVegetable