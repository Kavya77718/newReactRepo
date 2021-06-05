import React,{Component} from "react";
import VegetableService from "../services/vegetableService";
//import { Link } from "react-router-dom";



class Vegetable extends Component{
    constructor(props){
        super(props)
        this.state={
            vegetables:[]
        }
        
    
    this.Createvegetable=this.Createvegetable.bind(this);
    this.update=this.update.bind(this);
}


deleteByvegId(vegId){
    VegetableService.deleteByvegId(vegId).then(res => {
        this.setState({vegetables: this.state.vegetables.filter(vegetable => vegetable.vegId !== vegId)});
    });
}

    Createvegetable=()=>{
        this.props.history.push('/Create-vegetable');
    
    }
    update(vegId){
        this.props.history.push(`/update/${vegId}`);
    }

    componentDidMount(){
        
        VegetableService.getAllVegetables().then((res)=>{
            console.log("data: ", res.data);
            this.setState({vegetables: res.data});
    });
    console.log("vegetables: ", this.state.vegetables);
  };

      render(){
          return(
      <div>
      <h2 className="text-center">Vegetables List</h2>
                <div className="row">    
                <td type="button" onClick={this.Createvegetable}><i className="fa fa-plus"></i>ADD</td>
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
                            this.state.vegetables.map(
                                vegetable =>
                                <tr key ={vegetable.vegId}>
                                    <td>{vegetable.name}</td>
                                    <td>{vegetable.price}</td>
                                    <td>{vegetable.type}</td>
                                    <td>{vegetable.quantity}</td>
                                    <td style={{color:"red"}} onClick={() => this.deleteByvegId(vegetable.vegId)}><i className="fa fa-trash"></i></td>
                                    <td style={{marginLeft:"10px"}} onClick = { () => this.update(vegetable.vegId)}><i className="fa fa-edit"></i></td>
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
export default Vegetable;
