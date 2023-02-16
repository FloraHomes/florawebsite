import React from "react";
import { Link } from "react-router-dom";

import notFound from "../assets/404.jpg";

const styles = {
  mainContainer: {
    textAlign: "center",
    margin: "auto",
  },
  header: {
    margin: "auto",
    textAlign: "center",
  },
  image: {
    height: "350px",
    width: "350px",
  },
  btnContainer: {
    marginTop: "15px",
  },
};
const NotFound = () => (
  <>
    <div style={styles.mainContainer}>
      {/* <h1 style={styles.header}>404 - Page Not Found!</h1> */}
      <img style={styles.image} src={notFound} alt="404" />
      <p style={styles.header}>
        Hnmmm... Seems you have hit a wrong route. <br /> The page you're
        looking for doesn't exists or has been removed.
      </p>
      <div style={styles.btnContainer} className="btn-box">
        <Link className="theme-btn btn-style-two" to="/">
          Go Home
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
