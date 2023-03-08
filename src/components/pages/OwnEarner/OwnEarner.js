import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import "./style.css";
import partner from "../../assets/partner2.jpg";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import EngageInService from "../../SharedComponents/EngageInService";
// import { useDispatch } from "react-redux";
// import makeConsultation from "../../../actions/verificationConsultation";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {useSelector } from "react-redux";
import EstateCard from "../OurEstates/EstateCard";


const OwnEarner = () => {
    const tawkToPropertyId = "5a9e51824b401e45400d70e9";
    const navigation = useHistory();


    const properties = useSelector((state) => state?.properties?.properties)

    const ownEarnerProperty = properties.filter((property) => property?.propertyCategory?._id === "63e65f957fdf84d90fdca647")

    console.log(ownEarnerProperty);
    
  
    // Direct Chat Link
    // https://tawk.to/chat/tawkToPropertyId/tawkToKey
  
    const tawkToKey = "1cit1c3m8";
  
    useEffect(() => {
      tawkTo(tawkToPropertyId, tawkToKey);
    }, []);
  
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
    // const dispatch = useDispatch();
    // const { data, loading, error } = useSelector(
    //   (state) => state.verificationConsultation
    // );
  
    const onSubmit = (e) => {
      e.preventDefault();
      // dispatch(makeConsultation(consultationDetails));
      console.log("submit");
  
      navigation.push("/thank-you-for-submission");
  
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
        <section style={{ background: "#541484", padding: 15, }}>
          <div className="heading-container">
            <h1>Welcome to a new way to do Land Banking.</h1>
          </div>
          <div className="heading-paragraph">
            <p style={{ color: "#fff", fontSize: 20, lineHeight: "26px" }}>
            With opportunity for you to Own landed properties and also Earn at will.

            </p>
          </div>
          <div className="heading-paragraph">
            <p style={{ color: "#fff", fontSize: 20, lineHeight: "26px" }}>
            That makes you achieve financial freedom through being a Landbanker Irrespective of Your Income Level.
            </p>
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
            <span class="btn-title">GET IN TOUCH WITH US</span>
          </button>
        </div>
        
          <img
            id="firstP"
            style={{ top: "-20px" }}
            className="mt-4"
            src={partner}
            alt="partners"
          />
          {/* </div> */}
        </section>
        <section className="mt-5">
        <div className="auto-container">
        <ul className="list-style-one">
          <li>
          Join millions of Nigerian Landbankers across the globe who watch their wealth grow through land value appreciation while they also earn.
          </li>
          <li>
          Become a FloraHomes OWN-EARNER PARTNER
          </li>
          <li>
          1 unit == 1 sqm of land
          </li>
          <li>Earn Over 50% Return on Investment  </li>
        </ul>
        <br />
      </div>
        </section>

        <section>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12 pt-5 pb-5 text-white">
                <h5 style={{ color: "black" }}>
                  <b>Create An Account For Free</b>
                </h5>
                <br />
  
                <ol className="ul-text-dark">
                  <li>
                  Choose your land buying goal (One-time purchase  or repeated purchase).
                  </li>
                  <li style={{ marginTop: "20px" }}>
                  Start with as many units as possible.
                  </li>
                  <li style={{ marginTop: "20px" }}>
                  Choose your repeated purchase plan after your initial purchase: daily, weekly, fortnightly, monthly, or quarterly to keep expanding your landed investments portfolio.
                  </li>
                  <li style={{ marginTop: "20px" }}>
                  Use your land to build or resell it to cash out at a profit anytime in the nearest future.
                  </li>
                  <li
                    style={{ marginTop: "20px" }}
                    className="row align-items-center"
                  >
                   
                    <div
                      class="btn-box veriff-first"
                      style={{
                        display: "block",
                        textAlign: "left",
                      }}
                    >
                      <button
                        data-toggle="modal"
                        data-target="#landingModal"
                        class="theme-btn btn-style-four mb-4 mt-3 clickable-modal"
                      >
                        <span class="btn-title">
                          Get Started For Free
                        </span>
                      </button>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>


        <section style={{ background: "#541484" }}>
          <div className="auto-container">
            <div className="col-lg-12 pt-3 pb-5 ">
              <EngageInService
                first_step="Register For Free"
                second_step="  Choose your Estate goal"
                third_step="    Make payment for your initial purchase"
                fourth_step=" Watch your portfolio grows."
                title="How It Works"
                howToOur={true}
                remove3rdButton={true}
                call_to_action={
                  <div
                    class="btn-box veriff-first"
                    style={{
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    <button
                      href="#"
                      data-toggle="modal"
                      data-target="#landingModal"
                      class="theme-btn btn-style-four mb-4 mt-3"
                    >
                      <span class="btn-title">
                        START THE JOURNEY HERE
                      </span>
                    </button>
                  </div>
                }
                call_to_action2={
                  <div
                    className="phone-number"
                    style={{
                      color: "#ed6c11",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    <a href="tel:+2348094442019 " className="call-link-two">
                      OR CLICK HERE TO CALL
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        <section className="news-section alternate">
        <div className="auto-container">
          <div className="row">
            {ownEarnerProperty?.slice(0, 3)?.map((property) => (
                 <div
                 key={property?._id}
                 className="news-block col-lg-4 col-md-4 col-sm-12 wow fadeInRight animated"
                 style={{ visibility: "visible", animationName: "fadeInRight" }}
               >
                 <EstateCard property={property}/>
               </div>
            ))}
           

          </div>
        </div>
      </section>

  


        <PaymentDetails />
        <LandingPageOptinForm
          onSubmit={onSubmit}
          consultationDetails={consultationDetails}
          setconsultationDetails={setconsultationDetails}
          // data={data}
          // loading={loading}
          // error={error}
        />
        {/* <Footer/> */}
      </>
    );
};

export default OwnEarner;