import React, { Component } from 'react';
import FeedbackService from '../services/feedbackService';
class AddFeedback extends Component {
    constructor(props){
        super(props)
        this.state = {
            feedbackId:'',
            rating:'',
            comments:'',
        
        }
        this.changeRatingHandler=this.changeRatingHandler.bind(this);
        this.changeCommentsHandler=this.changeCommentsHandler.bind(this);
        this.saveFeedback=this.saveFeedback.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    saveFeedback = (e) => {
        e.preventDefault();
        let feedback={feedbackId:this.state.feedbackId,rating: this.state.rating, comments: this.state.comments};
        console.log('feedback => '+ JSON.stringify(feedback));

        FeedbackService.AddFeedback(feedback).then(res => {
            this.props.history.push(`/feedback`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({feedbackId: event.target.value})
    }

    changeRatingHandler=(event) =>{
        this.setState({rating: event.target.value})
    }

    changeCommentsHandler=(event) =>{
        this.setState({comments: event.target.value})
    }

    cancel(){
        this.props.history.push('/feedback');
    }


    render() { 
        return ( 
            <div>
            <div className="container">
                <div className="row">
                    <div className="caed col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Feedback</h3><br></br>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                    <label>FeedbackId:</label>
                                    <input placeholder="Id" name="FeedbackId" 
                                    className="form-control" value={this.state.feedbackId} 
                                    onChange={this.changeIdHandler}/>
                            </div>
                                <div className="form-group">
                                    <label>Rating:</label>
                                    <input placeholder="rating" rating="rating" 
                                    className="form-control" value={this.state.rating} 
                                    onChange={this.changeRatingHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Comments:</label>
                                    <input placeholder="comments" name="Comments" 
                                    className="form-control" value={this.state.comments} 
                                    onChange={this.changeCommentsHandler}/>
                                </div>
                               
                                <button className="btn btn-success"
                                 onClick={this.saveFeedback}> Save</button>
                                <button className="btn btn-danger" 
                                onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                            </form>
                        
                        </div>
                    </div>
                </div>
            </div>

        </div>
         );
    }
}
 
export default AddFeedback;