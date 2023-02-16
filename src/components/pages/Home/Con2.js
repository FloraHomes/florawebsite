import React from "react";
import { Link } from "react-router-dom";
import mock from "../../assets/mock-up.png";

const Con2 = () => {
  return (
    <div className="container-fluid con2">
      <div className="row">
        <div className="col-sm">
          <img src={mock} alt="mock" />
        </div>
        <div className="col-sm col2">
          <h2 className="text-light">
            21 Real Estate Mistakes That Make People Lose Money In Property
            Investment.
          </h2>
          <p className="text-light">
            Don't fall victim to landed property scam, demolition, third party
            claimant and other losses in Nigeria Real Estate.
          </p>
          <Link to="/real-estate-mistakes" className="custom-btn btn btn-lg">
            Access Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Con2;
