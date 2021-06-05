import React, { Component } from 'react';
import VegetableService from '../services/vegetableService';

class UpdateVegetable extends Component {

    constructor(props){
        super(props)
        this.state = {
            vegId:this.props.match.params.vegId,
            vegetable:{
            name:'',
            type: '',
            price:'',
            quantity:''
        }
    }
       
       /* this.changeTransactionModeHandler=this.changeTransactionModeHandler.bind(this);
        this.changeTransactionDateHandler=this.changeTransactionDateHandler.bind(this);
        this.changeTransactionStatusHandler=this.changeTransactionStatusHandler.bind(this);*/
        this.update=this.update.bind(this);
        //this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    componentDidMount(){
        VegetableService.viewVegetableById(this.state.vegId).then((res) =>{
            let vegetable=res.data;
            this.setState({
                vegetable
            });
        });
    }

    update = (e) => {
        e.preventDefault();
        const {vegetable}=this.state;
        //let bill={transactionMode: this.state.transactionMode, transactionDate: this.state.transactionDate, transactionStatus: this.state.transactionStatus};
        console.log('vegetable => '+ vegetable);


        VegetableService.update(this.state.vegId,vegetable).then((res) => {
              this.props.history.push(`/vegetable`);
        })
        

    }
    handleChange = (event) => {
        event.preventDefault();
        const vegetable = this.state.vegetable;
        vegetable[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ vegetable });
      };
    /*changeTransactionModeHandler=(event) =>{
        this.setState({transactionMode: event.target.value})
    }

    changeTransactionDateHandler=(event) =>{
        this.setState({ transactionDate: event.target.value})
    }

    changeTransactionStatusHandler=(event) =>{
        this.setState({ transactionStatus: event.target.value})
    }*/
    cancel(){
        this.props.history.push('/');
    }

    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Page</h3>
                            <div className="card-body">
                                <form onSubmit={this.update}>
                                    
                                    <h1>{this.props.match.params.vegId}</h1>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input id="name" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Type:</label>
                                        <input id="type" placeholder="Type" name="type" className="form-control" value={this.state.type} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input id="price" placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity:</label>
                                        <input id="quantity" placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.handleChange}/>
                                    </div>
                                    <button className="btn btn-success" type="submit"> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}> Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default UpdateVegetable;