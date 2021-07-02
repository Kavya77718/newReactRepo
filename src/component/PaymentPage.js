import React, { Component } from "react";
import Navbar from "../component/HomePage/navbar";
import "./paymentPage.css";
import Hdfc from "../photos/Hdfc.png";
import Axis from "../photos/Axis.png";
import ceditCard from "../photos/ceditCard.png";
import gpay from "../photos/gpay.png";
import icici from "../photos/icici.png";
import jio from "../photos/jio.png";
import kotak from "../photos/kotak.png";
import Mobikwik from "../photos/Mobikwik.jpg";
import phonePe from "../photos/phonePe.png";
import pnb from "../photos/pnb.png";
import sbi from "../photos/sbi.png";
import upi from "../photos/upi.png";
import amazonPay from "../photos/amazonPay.png";

export default class PaymentPage extends Component {
  constructor(props) {
    super(props);
  }
  gotoHomePageHandle = () => {
    alert("Thanks for the order");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div class="body2">
          <div>
            <div class="container paymentcontainer">
              <center>
                <div class="paymentjs-head">
                  <h2>CHOOSE PAYMENT METHOD</h2>
                </div>
              </center>
              <div class="panel-group">
                <div class="panel panel-default">
                  <div class="panel-heading paymentjs-option">
                    <h4 class="panel-title paymentjs-option">
                      <a
                        data-toggle="collapse"
                        href="#collapse1"
                        className="paymentjs-option"
                      >
                        NetBanking
                      </a>
                    </h4>
                  </div>
                  <div id="collapse1" class="panel-collapse collapse pay-pad">
                    <div className="container col-auto container-fluid">
                      <form>
                        <center>
                          <table className="table  text-center table-responsive table-bordered">
                            <tr>
                              <td>
                                <button className="btn">
                                  <img
                                    src={Hdfc}
                                    width="200px"
                                    height="200px"
                                  />
                                </button>
                              </td>
                              <td>
                                <button className="btn">
                                  <img src={sbi} width="200px" height="200px" />
                                </button>
                              </td>
                              <td>
                                <button className="btn">
                                  <img
                                    src={Axis}
                                    width="200px"
                                    height="200px"
                                  />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button className="btn">
                                  <img
                                    src={icici}
                                    width="200px"
                                    height="200px"
                                  />
                                </button>
                              </td>
                              <td>
                                <button className="btn">
                                  <img
                                    src={kotak}
                                    width="200px"
                                    height="200px"
                                  />
                                </button>
                              </td>
                              <td>
                                <button className="btn">
                                  <img src={pnb} width="200px" height="200px" />
                                </button>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <h4 className="payment-option">Other Bank</h4>
                        <select
                          className="bank-option"
                          onfocus="this.size=5;"
                          onblur="this.size=1;"
                          onchange="this.size=1; this.blur();"
                        >
                          <option value="">Select Other Bank</option>
                          <option value="HDFC Bank">HDFC BANK</option>
                          <option value="Axis Bank">Axis Bank</option>
                          <option value="SBI">State Bank of India</option>
                          <option value="ICICI">ICICI Bank</option>
                          <option value="Kotak">Kotak Mahindra Bank</option>
                          <option value="PNB">Punjab National Bank</option>
                          <option value="Bank of India">Bank of India</option>
                          <option value="Indian Bank">Indian Bank</option>
                          <option value="Canara Bank">Canara Bank</option>
                          <option value="City Union Bank">
                            City Union Bank
                          </option>
                          <option value="Bank of Baroda">Bank of Baroda</option>
                          <option value="Karur Vysya">Karur Vysya</option>
                          <option value="IDBI Bank">IDBI Bank</option>
                          <option value="Yes Bank">Yes Bank</option>
                          <option value="IndusInd Bank">IndusInd Bank</option>
                          <option value="Federal Bank">Federal Bank</option>
                        </select>
                        <center>
                          <input
                            type="button"
                            onClick={this.gotoHomePageHandle}
                            className="btn btn-primary btn-block"
                            value="Proceed"
                          />
                        </center>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Credit and Debit Card */}
                <div class="panel panel-default">
                  <div class="panel-heading pay-head">
                    <h4 class="panel-title paymentjs-option">
                      <a
                        data-toggle="collapse"
                        href="#collapse2"
                        className="paymentjs-option"
                      >
                        Credit / Debit Card
                      </a>
                    </h4>
                  </div>
                  <div id="collapse2" class="panel-collapse collapse pay-pad">
                    <form>
                      <h4 className="paymentjs-option">
                        Pay using Credit Card
                      </h4>
                      <img src={ceditCard} height="40px" width="50px" />
                      <br />
                      <input
                        type="number"
                        className="col-12 col-sm-12 payment-input"
                        placeholder="CARD NUMBER"
                        name="cardNumber"
                        id="cardNumber"
                        maxLength="16"
                      />
                      <br />
                      <input
                        type="number"
                        className="col-5 col-sm-5 payment-input"
                        placeholder="CVV"
                        name="cardCVV"
                        id="cardCVV"
                        length="3"
                        maxLength="3"
                      />
                      <b className="col-2 col-sm-2">Expiry Date</b>
                      <input
                        type="number "
                        placeholder="MM/YY"
                        className="col-5 col-sm-5 payment-input"
                      />
                      <br />
                      <input
                        type="text"
                        className="col-12 col-sm-12 payment-input"
                        placeholder="CARD HOLDER NAME"
                        name="cardHolderName"
                        id="cardHolderName"
                        maxLength="30"
                      />
                      <br />
                      <br />
                      <center>
                        <input
                          type="button"
                          onClick={this.gotoHomePageHandle}
                          className="btn btn-primary"
                          value="Proceed"
                        />
                      </center>
                    </form>
                  </div>
                </div>
                {/* UPI */}
                <div class="panel panel-default">
                  <div class="panel-heading pay-head">
                    <h4 class="panel-title paymentjs-option">
                      <a
                        data-toggle="collapse"
                        href="#collapse3"
                        className="paymentjs-option"
                      >
                        UPI
                      </a>
                    </h4>
                  </div>
                  <div id="collapse3" class="panel-collapse collapse  pay-pad">
                    <form>
                      <center>
                        <h4 className="paymentjs-option">
                          Click on Any UPI option
                        </h4>
                      </center>
                      <button class="btn upi-button">
                        <img src={amazonPay} width="130" height="100" />
                      </button>
                      <button class="btn upi-button">
                        <img src={gpay} width="100" height="100" />
                      </button>
                      <button class="btn upi-button">
                        <img src={phonePe} width="100" height="100" />
                      </button>
                      <button class="btn upi-button">
                        <img src={upi} width="130" height="100" />
                      </button>
                      <button class="btn upi-button">
                        <img src={Mobikwik} width="100" height="100" />
                      </button>
                      <button class="btn upi-button">
                        <img src={jio} width="100" height="100" />
                      </button>
                    </form>
                  </div>
                </div>
                {/* Cash On Delivery */}
                <div class="panel panel-default">
                  <div class="panel-heading pay-head">
                    <h4 class="panel-title paymentjs-option">
                      <a
                        data-toggle="collapse"
                        href="#collapse4"
                        className="paymentjs-option"
                      >
                        Cash On Delivery
                      </a>
                    </h4>
                  </div>

                  <div id="collapse4" class="panel-collapse collapse  pay-pad">
                    <center>
                      {" "}
                      <h4 className="paymentjs-option">
                        You can Switch to UPI or Card Payment Any Time while on
                        Cash on Delivery
                      </h4>
                    </center>
                    <form action="/">
                      <center>
                        <input
                          type="button"
                          onClick={this.gotoHomePageHandle}
                          className="btn btn-primary"
                          value="Proceed"
                        />
                      </center>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/**Ending Tag */}
          </div>
        </div>
      </div>
    );
  }
}