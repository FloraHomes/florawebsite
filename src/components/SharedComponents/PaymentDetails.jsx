import React from "react";
import "../../css/paymentDetails.css";
const PaymentDetails = () => {
  return (
    <>
      <section className="payment-details">
        <div className="details-container">
          <p>
          Kindly make all your payment in favour of any of these account details below...
          </p>
          <ul className="banking-details">
            <li>Acc name: FloraHomes Global Consult Ltd</li>
            <li>Jaiz Bank Plc: 0007101193 (Naira), 0007101210 (Dollar)</li>
            {/* <li>GT bank: 0449454858 (Naira), 0449454865 (Dollar)</li>
            <li>Sterling Bank Plc: 0501420218 (Naira), 0501467363 (Dollar)</li> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PaymentDetails;
