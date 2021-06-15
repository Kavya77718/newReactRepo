import axios from "axios";

const ORDER_API_BASE_URL = "http://localhost:8081";

class OrderService {
  async getAllOrders() {
    return await axios.get(ORDER_API_BASE_URL + "/order");
  }

  async createOrder(order) {
    return await axios.post(ORDER_API_BASE_URL + "/order", order);
  }
  async getOrderById(orderNo) {
    return await axios.get(ORDER_API_BASE_URL + "/order/id/" + orderNo);
  }

  async updateOrder(orderid, order) {
    return await axios.put(ORDER_API_BASE_URL + "/order/" + orderid, order);
  }

  async deleteOrder(orderid) {
    return await axios.delete(ORDER_API_BASE_URL + "/order/" + orderid);
  }
}

export default new OrderService();
