import React, { useState } from "react";

// import cpbs from "../../assets/productAssets/cpbs.png";
import background from "../../assets/background.jpg";
import price_table from "../../assets/price_table.png";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import { useDispatch, useSelector } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import EngageInService from "../../SharedComponents/EngageInService";
import partner from "../../assets/partner2.jpg";

const Affilate = () => {
  const [consultationDetails, setconsultationDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsaap_number: "",
    category: "",
    est_of_interest: "",
    contact_me: "",
    message: "",
    how_you_hear_about_us: "",
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.verificationConsultation
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(makeConsultation(consultationDetails));
    setconsultationDetails({
      full_name: "",
      email: "",
      phone_number: "",
      whatsaap_number: "",
      category: "",
      est_of_interest: "",
      contact_me: "",
      message: "",
      how_you_hear_about_us: "",
    });
  };
  return (
    <>
      <section style={{ background: "#541484" }}>
        <div className="heading-container">
          <h1 style={{ color: "#fff" }}>
          CONGRATULATIONS TO YOU!!!
          </h1>
        </div>
        <div className="heading-paragraph">
          <p>
            {" "}
            Finding yourself here means you’re one of the blessed people about to be partnering with the fastest evolving company that is PREVENTING REAL ESTATE LOSSES as well as PROMOTING HAPPINESS & LONGEVITY THROUGH LUXURY ECO-COMMUNAL PROPERTY DEVELOPMENT in the Real Estate Market across AFRICA.
          </p>
          <p>If you have the same value just like us, then welcome on board.</p>
        </div>
        <div
          class="btn-box veriff-first"
          style={{
            display: "block",
            // marginRight: "10px",
            textAlign: "center",
          }}
        >
          <button
            data-toggle="modal"
            data-target="#landingModal"
            class="theme-btn btn-style-four mb-4 mt-3"
          >
            <span class="btn-title">CLICK HERE TO GET STARTED</span>
          </button>
        </div>
      
      
        <img
          id="firstP"
          style={{ top: "-20px" }}
          className="mt-4"
          src={partner}
          alt="partners"
        />
    


      </section>
      <section>
      <div className="auto-container">
        <div className=" content-column col-lg-12">
          <p style={{textAlign: "left"}}>How it works</p>
          <ul className="list-style-decimal">
            <li>
            Fill the form with your correct detail
            </li>
            <li>
            Access the Brand Partner Highlight to select your partnership option.
            </li>
            <li>Access your dashboard </li>
            <li>Start promoting &amp; Earning.</li>
          </ul>

          <button
            data-toggle="modal"
            data-target="#landingModal"
            class="theme-btn btn-style-four mb-4 mt-3"
          >
            <span class="btn-title">CLICK HERE TO GET STARTED</span>
          </button>

        </div>
        </div>
      </section>

      
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <br />
              <h3 style={{color: 'white'}}><b>Reward Table</b></h3><br />

              <div style={{marginLeft: 30}}>
              <p style={{ color: "white" }}>1. &nbsp; 5% on all FloraHomes Estate properties at every successful sale closure by the Brand Partner.</p>
              <p style={{ color: "white" }}>2. &nbsp; 10% on Verification service and Professional advisory service.</p>
              <p style={{ color: "white" }}>3. &nbsp; 50% on successful book sales referred.</p>
              <p style={{ color: "white" }}>4. &nbsp; 5% of company professional fee on Design Build & Manage Service upon full execution of project. </p>
              <p style={{ color: "white" }}>5. &nbsp; 10% of company professional fee upon full execution of a complete property buyer service referred.</p>
              <p style={{ color: "white" }}>6. &nbsp; All percentage earnings are subject to review from time to time as may be determined by the company board.  </p>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "none" }}>
          <div className="container">
            <div className="text-center">
              <div className="btn-box">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform"
                  className="theme-btn btn-style-four"
                >
                  <span className="btn-title">Engage Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      <section>
      <div className="auto-container">
        <div className=" content-column col-lg-12">
          <p style={{textAlign: "left"}}>Our values are simple</p>
          <ul className="list-style-decimal">
            <li>
            To give eco-communal lifestyle in our estate developments that promotes happiness and longevity.
            </li>
            <li>
            To save lives through saving properties, one property at a time. In short, to prevent real estate losses.
            </li>
          
          </ul>

          <button
            data-toggle="modal"
            data-target="#landingModal"
            class="theme-btn btn-style-four mb-4 mt-3"
          >
            <span class="btn-title">CLICK HERE TO GET STARTED</span>
          </button>

        </div>
        </div>
      </section>
      <br />
    

      {/* <br /> */}
      <div className="auto-container">
        <lable>
        For every property you see around, there is a soul attached to it. If the property is "alive", the soul breathes, and if the property is "not alive", the soul is depressed and weakened. That's to remind you that when there are property losses or inefficient space designs, it wouldn't just be about the monetary losses, it will also be about the devastating health conditions it reflects on the victims.   
        </lable>
        <br/><br/>

        <lable>
        On this note, we are hoping we can align our values so that we can partner to "PREVENT REAL ESTATE LOSSES AS WELL AS GIVE BOTH THE EXISTING AND ASPIRING PROPERTY INVESTORS FUTURISTIC INVESTMENTS". This way, the property investors can make informed decisions before taking any real estate investment step and they can as well have better investment opportunities.   
        </lable>
        <br/><br/>

        <lable>
        We've helped thousands of individuals through our estates, services and our free materials, our new goal is to extend our help to every nuke and cranny of Nigeria through you and every other person that shares similar values. 

        </lable>
        <br />
        
        <br />
        <br />
     
      </div>

      <PaymentDetails />
      <LandingPageOptinForm
        onSubmit={onSubmit}
        consultationDetails={consultationDetails}
        setconsultationDetails={setconsultationDetails}
        data={data}
        loading={loading}
        error={error}
      />

    </>
  );
};

export default Affilate;
