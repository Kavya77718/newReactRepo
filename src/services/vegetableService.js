import axios from "axios";

const VEGETABLE_API_BASE_URL = "http://localhost:8082/api/vegetable";

class VegetableService{
    async getAllVegetables(){

        return await axios.get(VEGETABLE_API_BASE_URL+"/view");
    }
    async deleteByvegId(vegId) {
        return await axios.delete(VEGETABLE_API_BASE_URL + "/" + vegId);
      }
    async Createvegetable(vegetable) {

        return await axios.post(VEGETABLE_API_BASE_URL, vegetable);
      }
    async update(vegId,vegetable){
        return await axios.put(VEGETABLE_API_BASE_URL + "/update/" + vegId,vegetable);
      }
      async viewVegetableById(vegId) {
        return await axios.get(VEGETABLE_API_BASE_URL + "/" + vegId);
      }
}
export default new VegetableService()

 