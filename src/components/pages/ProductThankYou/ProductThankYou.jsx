import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ProductThankYou = () => {
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
          <h4 style={styles.header} className="mb-4">
            You did it🎉🎉🎉
          </h4>{" "}
          THANK YOU FOR YOUR INTEREST. ONE OF OUR REPRESENTATIVES WILL GET IN
          TOUCH WITH YOU SHORTLY.
        </h3>
        <p className="mt-4" style={styles.payment_paragraph}>
          For the meantime, you can navigate through this our life-saving blog
          to pick one or two lessons for your Real Estate Investments quest.
        </p>
        <div className="btn-box mt-4 mb-3" style={styles.payment_link}>
          <Link to="/real-estate-mistakes" className="theme-btn btn-style-two">
            <span className="btn-title">Real Estate Mistake </span>
          </Link>
        </div>
        <p style={styles.payment_paragraph}>
          Or have you read it before now? Then, navigate through our website for
          more tips.
        </p>

        <div className="btn-box mt-5" style={styles.payment_link}>
          <Link to="/" className="theme-btn btn-style-two">
            <span className="btn-title">
              {" "}
              CLICK HERE TO NAVIGATE OUR WEBSITE{" "}
            </span>
          </Link>
        </div>

        <p style={styles.payment_paragraph} className="mt-5">
          ... preventing real estate losses and giving futuristic landed
          property investments.
        </p>
      </div>
    </section>
  );
};

export default ProductThankYou;
