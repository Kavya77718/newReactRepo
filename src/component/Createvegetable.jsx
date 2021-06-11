import React,{ Component } from 'react'
import VegetableService from '../services/vegetableService';
  
class Createvegetable extends Component{
    constructor(props){
        super(props)

        this.state={
            vegId:'',
            name :'',
            price:'',
            type:'',
            quantity:''
        }
        this.changevegIdHandler=this.changevegIdHandler.bind(this);
        this.changenameHandler=this.changenameHandler.bind(this);
        this.changepriceHandler=this.changepriceHandler.bind(this);
        this.changetypeHandler=this.changetypeHandler.bind(this);
        this.changequantityHandler=this.changequantityHandler.bind(this);
        this.saveVegetable=this.saveVegetable.bind(this);
    }
    saveVegetable= (e) =>{
        e.preventDefault();
        let vegetable ={vegId:this.state.vegId,name:this.state.name,price:this.state.price,type:this.state.type,quantity:this.state.quantity};
        console.log('vegetable => '+JSON.stringify(vegetable));

        VegetableService.Createvegetable(vegetable).then(res => {
           this.props.history.push('/vegetable');
        });
    }
    changevegIdHandler =(event) =>{
        this.setState({vegId:event.target.value});
    }
    changenameHandler= (event) => {
        this.setState({name:event.target.value});
    }
    changepriceHandler =(event) => {
        this.setState({price:event.target.value});
    }
    changetypeHandler =(event) => {
        this.setState({type:event.target.value});
    }
    changequantityHandler =(event) => {
        this.setState({quantity:event.target.value});
    }
    cancel(){
        this.props.history.push('/vegetable');
    }
render(){
    return(
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Vegetable</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>Vegetable Id</label>
                                      <input placeholder="vegId" name="vegID" className="form-control" value={this.state.vegId} onChange={this.changevegIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Name</label>
                                      <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changenameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Price</label>
                                      <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.changepriceHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Type</label>
                                      <input placeholder="Type" name="type" className="form-control" value={this.state.type} onChange={this.changetypeHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Quantity</label>
                                      <input placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changequantityHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveVegetable}>Save</button>
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
export default Createvegetable