import React from "react";
import { useMediaQuery } from "react-responsive";

const ThankYou = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });
  const styles = {
    mainContainer: {
      backgroundColor: "#541484",
      height: isSmallScreen ? "auto" : "100vh",
      padding: isSmallScreen ? "30px 15px" : "50px 15px",
    },
    content_container: {
      margin: "auto",
      width: "100%",
      textAlign: "center",
      color: "white",
    },
    header: {
      color: "#ffffff",
    },
    payment_paragraph: {
      color: "#ffffff",
      margin: "10px 0",
      fontSize: "20px",
    },
    payment_link: {
      display: "inline-block",
      margin: "0 10px",
    },
    account: {
      fontSize: "23px",
      fontWeight: "bold",
    },
    account_h3: {
      color: "#ffffff",
      fontWeight: "bold",
    },
    account_header: {
      color: "#ffffff",
      margin: "10px 0",
    },
    account_paragraph: {
      color: "#ffffff",
      margin: "20px 0",
      fontSize: "18px",
    },
  };
  return (
    <section style={styles.mainContainer}>
      <div style={styles.content_container}>
        <h3 style={styles.header}>
          <h4 style={styles.header}>Get a copy of</h4> REAL ESTATE INVESTING
          WITHOUT TEARS.
        </h3>
        <p style={styles.payment_paragraph}>
          Pay with your card using any of the links to your preferred currency
          or pay through transfer following the steps below the links.
        </p>
        <div className="btn-box" style={styles.payment_link}>
          <a
            href="https://paystack.com/pay/investmentchecklist"
            className="theme-btn btn-style-two"
          >
            <span className="btn-title">Pay in Naira </span>
          </a>
        </div>

        <div className="btn-box" style={styles.payment_link}>
          <a
            href="https://flutterwave.com/pay/fhgcchecklist "
            className="theme-btn btn-style-two"
          >
            <span className="btn-title"> Pay in Dollar </span>
          </a>
        </div>

        <h3 style={styles.account_h3}>
          Would you like to transfer directly into the company account?
        </h3>
        <h4 style={styles.account_header}>
          Account Name: FloraHomes Global Consult Limited
        </h4>
        <h4 style={styles.account_header}>
          <span style={styles.account}> Naira Account: </span>Pay N8000 to
          0449454858 GTbank OR 0007101193 Jaiz Bank.
        </h4>
        <h4 style={styles.account_header}>
          <span style={styles.account}> Dollar Account: </span>: Pay $22 to
          0449454865 GTbank OR 0007101210 Jaiz Bank.
        </h4>
        <p style={styles.account_paragraph}>
          Send the evidence of payment, your name, phone number and location of
          payment to hello.florahomesgc@gmail.com{" "}
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
