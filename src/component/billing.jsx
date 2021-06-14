import React,{ Component } from  'react';
import BillingService from '../services/billingService';

class Billing extends Component {
    constructor(props){
        super(props)
        
        this.state = {  
            bills:[],
            search:''
        }
        this.updateBill= this.updateBill.bind(this);
        this.addBill=this.addBill.bind(this);
        this.deleteBill = this.deleteBill.bind(this);
        this.viewBill = this.viewBill.bind(this);

    }
    addBill(){
        this.props.history.push('/add-bills');
    }
    updateBill(billingId){
        this.props.history.push(`/update-bills/${billingId}`);
    }

    viewBill(billingId){
        this.props.history.push(`/view-bills/${billingId}`)
    };

    deleteBill(billingId){
        BillingService.deleteBill(billingId).then(res=>{
            this.setState({bills: this.state.bills.filter(bill => bill.billingId !== billingId)});
        });
    }

    componentDidMount(){
        BillingService.getAllBills().then((res) => {
        this.setState({bills: res.data});
        });
    }

    getBillById = () =>{
        let bills=[];
        BillingService.getBillById(this.state.search).then((res)=>{
            bills= res.data;
            this.setState({bills});
            console.log(this.state.bills);
        });
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
  
    render() { 
        return ( 
            <div>
                <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control ml-auto"
                type="search"
                name="id"
                placeholder="Search by id"
                aria-label="Search"
                onChange={this.onChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={this.getBillById}
              >
      
 Search
              </button>
            </form>
             <h2 className="text-center">Bill Lists</h2>
            <div className="row">
                <button className="btn btn-info" onClick={this.addBill}>Add Billing</button>
             </div>

                <div className="row">

                    <table className="table table-striped table-bordered"> 
                    <thead>
                        <tr>
                            <th>transactionMode</th>
                            <th>transactionDate</th>
                            <th>transactionStatus</th>
                          <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bills.map(
                                bill =>
                                <tr key ={bill.billingId}>
                                    <td>{bill.transactionMode}</td>
                                    <td>{bill.transactionDate}</td>
                                    <td>{bill.transactionStatus}</td>
                                    <td>
                                        <button onClick = { () => this.deleteBill(bill.billingId)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewBill(bill.billingId)} className="btn btn-primary">View</button>
                                        <button  style={{marginLeft:"10px"}} onClick = { () => this.updateBill(bill.billingId)} className="btn btn-warning">Update</button>
                                    
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
 
export default Billing;