import axios from 'axios';

const BILLING_API_BASE_URL = "http://localhost:8080/billing";
class BillingService{
        async getAllBills(){
            return  await axios.get(BILLING_API_BASE_URL);
        }
        async deleteBill(billingId){
            return await axios.delete(BILLING_API_BASE_URL + '/' + billingId)

        }
        async getBillById(billingId){
            return await axios.get(BILLING_API_BASE_URL + '/' + billingId)

        }
        async createBill(bill){
            return await axios.post(BILLING_API_BASE_URL,bill);
          }
          async updateBill(billingId,bill){
            return await axios.put(BILLING_API_BASE_URL + '/update/' + billingId , bill);
          }
}
export default new BillingService()