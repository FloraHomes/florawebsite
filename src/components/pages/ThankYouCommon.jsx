import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ThankYouCommon = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });
  const styles = {
    mainContainer: {
      backgroundColor: "#541484",
      minHeight: "90vh",
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
    small_size_heading: {
      fontSize: isSmallScreen ? "35px" : "48px",
      color: "white",
      fontWeight: "bold",
    },
  };
  return (
    <section style={styles.mainContainer}>
      <div style={styles.content_container}>
        <h3 style={styles.header}>
          <h4 style={{ ...styles.header, marginBottom: "20px" }}>
            You did it🎉🎉🎉
          </h4>
          Thank You For Your Interest. One Of Our Representatives Will Get In
          Touch With You Shortly.
        </h3>
        <p style={styles.payment_paragraph}>
          Better still and for quicker response, you can send a WhatsApp message
          now to FloraCare on
        </p>
        <h1 style={styles.small_size_heading}>+234 802 442 1356</h1>
        <br />
        <br />
        <p style={{ fontSize: "20px", color: "#fff", fontWeight: "bold" }}>
          =======================
        </p>
        <br />
        <h4 style={styles.account_header}>
          For the meantime, you can navigate through this our life-saving blog
          to pick one or two lessons for your Real Estate Investments quest.
        </h4>
        <Link to="/real-estate-mistakes">
          <button className="btn-style-two">
            <span className="btn-title">
              CLICK HERE TO READ ABOUT 23 REAL ESTATE MISTAKES INVESTORS MAKE
            </span>
          </button>
        </Link>
        <br />
        <br />
        <br />
        <h4 style={styles.account_header}>
          Or simply navigate through our website to know more about us.
        </h4>
        <Link to="/">
          <button className="btn-style-two">
            <span className="btn-title">
              CLICK HERE TO NAVIGATE OUR WEBSITE
            </span>
          </button>
        </Link>
        <br />
        <br />

        <h4 style={styles.account_header}>
          ... preventing real estate losses and giving futuristic landed
          property investments.
        </h4>
      </div>
    </section>
  );
};

export default ThankYouCommon;
