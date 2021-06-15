import axios from "axios";

const CART_API_BASE_URL = "http://localhost:8080/api/cart";

class CartService{
    async getAllVegetables(){

        return await axios.get(CART_API_BASE_URL+"/viewAllItems");
    }
   
    /*async Createvegetable(vegetable) {

        return await axios.post(VEGETABLE_API_BASE_URL, vegetable);
      }*/
}
export default new CartService()

 