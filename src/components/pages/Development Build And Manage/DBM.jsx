import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import { useDispatch, useSelector } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import EngageInService from "../../SharedComponents/EngageInService";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import partner from "../../assets/partner2.jpg";
import PhotoGallery from "../../layouts/PhotoGallery";



const DBM = () => {
  const tawkToPropertyId = "5a9e51824b401e45400d70e9";

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
          <h1>
          Welcome to FloraHomes 100% Design, Build & Manage Service.
          </h1>
        </div>
        <div className="heading-paragraph" >
          <p>
            {" "}
            Join us as we create futuristic plus sustainable designs and structures that improve lifestyle across Africa
          </p>
        </div>
        {/* <div
          class="btn-box veriff-first"
          style={{
            display: "block",
            // marginRight: "10px",
            textAlign: "center",
          }}
        >
          <a href="tel:+2348094442019">
          <button
            // data-toggle="modal"
            // data-target="#landingModal"
            class="theme-btn btn-style-four mb-4 mt-3"
          >
            <span class="btn-title">REQUEST A CALL-BACK NOW</span>
          </button>
          </a>
        </div> */}
        {/* <div
          className="phone-number"
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          <a href="tel:+2348094442019" className="call-link-one">
            {" "}
            CLICK HERE TO CALL{" "}
          </a>
        </div> */}

        <img
          id="firstP"
          style={{ top: "-20px" }}
          className="mt-4"
          src={partner}
          alt="partners"
        />
        {/* </div> */}
        <div className="heading-paragraph">
          <p>
          Whether as an individual investor, corporate organisation, club or developer company...
          </p>
        </div>
       
      </section>


     

      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12  text-white">
             <p>
             Let our team of construction professionals bring your design and building project to life across Nigeria and Africa at 100% done for you from start to finish without hassle. You just relax, focus on other important stuff and watch us deliver.
             </p>

             <p>
             Our Design Build & Manage Service involves full execution of landed property projects from conceptualization, architectural design, 3D visualisation, animation, complete working drawings, structural drawings,  engineering designs, building approval processing, site preparation, construction, finishing, landscaping, interior works, remodelling, renovation, management… all at 100% done for you.
             </p>

             <p>
             Either you want a bespoke service or our customised offers, we pride ourselves at providing efficient, detailed finished as well as high end design, build and management services across sectors such as residential real estate, commercial, recreational, institutional, etc.

             </p>
            </div>
          </div>
          <div className="mt-5">
            <h5 className="text-center mb-3"><b>What We Have Done</b></h5>
          <PhotoGallery/>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="auto-container">
        
          <div className="outer-box">
            <div>
              <h5 style={{ color: "#541484 !important" }}>
                <b>HOW TO ENGAGE THIS SERVICE</b>
              </h5>
              <ul className="list-style-two">
                <li>
                Enter your detail to discuss job and payment 
                </li>
                <li>
                Make Payment 
                </li>
                <li>
                Submit Project Information
                </li>
                <li>
                Connect with Your Personal Manager.
                </li>
              </ul>
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
      <PaymentDetails />
      <LandingPageOptinForm
        onSubmit={onSubmit}
        consultationDetails={consultationDetails}
        setconsultationDetails={setconsultationDetails}
        data={data}
        loading={loading}
        error={error}
      />
      {/* <Footer/> */}
    </>
  );
};

export default DBM;
