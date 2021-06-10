import React, { Component } from 'react';
import FeedbackService from '../services/feedbackService';
class Feedback extends Component {
    constructor(props) {
        super(props)

      this.state = {
                feedbacks: []
        }
        this.addFeedback = this.addFeedback.bind(this);
        this.deleteFeedback = this.deleteFeedback.bind(this);
    }

    componentDidMount(){
        FeedbackService.getFeedback().then((res)=>{
            this.setState({feedbacks: res.data});
        });     
    }

    addFeedback(){
        this.props.history.push('/add-feedback');
    }

    deleteFeedback(feedbackId){
        FeedbackService.deleteFeedback(feedbackId).then(res =>{
            this.setState({feedbacks: this.state.feedbacks.filter(feedback => feedback.feedbackId !== feedbackId)});
        });
    }

    render() { 
        return (  <div>
            <h2 className="text-center">Feedback List</h2>
            <div className = "row">
            <div className = "row">
               <button className="btn btn-primary"
                onClick={this.addFeedback} 
                style={{marginBottom:"10px", marginLeft:"13px"}}> 
                 Add Feedback</button>
            </div>
            <br></br>
                <table className = "table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th> Rating</th>
                               <th> Comments</th>                              
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.feedbacks.map(
                                   feedback => 
                                   <tr key = {feedback.feedbackId}>
                                        <td> {feedback.rating} </td>   
                                        <td> {feedback.comments}</td>                                       
                                        <td>                                 
                                         <button onClick = { () => this.deleteFeedback(feedback.feedbackId)} className="btn btn-danger">Delete</button>
                                         </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

            </div>

       </div> );
    }
}
 
export default Feedback;