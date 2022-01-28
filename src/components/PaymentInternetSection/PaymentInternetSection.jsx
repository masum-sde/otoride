import React from "react";
import PaymentSection from "../PaymentSection/PaymentSection";
import "./PaymentInternetSection.css";
import Internet from "../Internet/Internet";
const PaymentInternetSection = () => {
  return (
    <section className="payment-internet">
      <div className="payment-part">
        <PaymentSection />
      </div>
      <div className="internet-part">
        <Internet />
      </div>
    </section>
  );
};

export default PaymentInternetSection;
