import axios from "axios";

const PAYMENT_API_BASE_URL = "http://localhost:8081";

class PaymentService {
  async getAllPayments() {
    return await axios.get(PAYMENT_API_BASE_URL + "/payments");
  }

  async createPayment(payment) {
    return await axios.post(PAYMENT_API_BASE_URL + "/payments", payment);
  }

  async updatePayment(paymentId, payment) {
    return await axios.put(
      PAYMENT_API_BASE_URL + "/payments/" + paymentId,
      payment
    );
  }

  async deletePayment(paymentId) {
    return await axios.delete(PAYMENT_API_BASE_URL + "/payments/" + paymentId);
  }
}

export default new PaymentService();
