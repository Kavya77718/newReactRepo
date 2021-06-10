import axios from 'axios';


const FEEDBACK_API_BASE_URL = "http://localhost:8080/feedback";

class FeedbackService{
    async getFeedback(){
        return await axios.get(FEEDBACK_API_BASE_URL);
    }
    
    async AddFeedback(feedback){
        return await axios.post(FEEDBACK_API_BASE_URL,feedback);
      }

      async deleteFeedback(feedbackId){
        return await axios.delete(FEEDBACK_API_BASE_URL + '/' + feedbackId)
      }
}
export default new FeedbackService()