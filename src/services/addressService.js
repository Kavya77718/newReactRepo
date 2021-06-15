import axios from 'axios';

const ADDRESS_API_BASE_URL = "http://localhost:8080/address";
class AddressService{
        async getAllAddress(){
            return  await axios.get(ADDRESS_API_BASE_URL);
        }
        async deleteAddress(id){
            return await axios.delete(ADDRESS_API_BASE_URL + '/' + id)

        }
        async getAddressById(id){
            return await axios.get(ADDRESS_API_BASE_URL + '/' +id);
          }
        async createAddress(address){
            return await axios.post(ADDRESS_API_BASE_URL,address);
          }
        async updateAddress(id,address){
            return await axios.put(ADDRESS_API_BASE_URL + '/' + id,address);
          }
    
}
export default new AddressService();