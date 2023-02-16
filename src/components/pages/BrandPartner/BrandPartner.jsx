import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import { useDispatch, useSelector } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import background from "../../assets/background.jpg";
import price from "../../assets/reward.jpeg";
import EngageInService from "../../SharedComponents/EngageInService";
import "./styles.css";

const BrandPartner = () => {
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <div className="auto-container">
          <div className="heading-container">
            <h1>CONGRATULATIONS TO YOU!!!</h1>
          </div>
          <div className="heading-paragraph">
            <p>
              {" "}
              Finding yourself here means you’re one of the lucky people about
              to be partnering with the fastest evolving company that is
              PREVENTING REAL ESTATE LOSSES as well as PROMOTING HAPPINESS &
              LONGEVITY THROUGH LUXURY ECO-COMMUNAL PROPERTY DEVELOPMENT in the
              Real Estate Market across AFRICA.
              <br />
              <br />
              If you have the same value just like us, then welcome on board.
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
              onClick={handleShow}
              class="theme-btn btn-style-four mb-4 mt-3"
            >
              <span class="btn-title">
                ENTER YOUR DETAILS NOW TO GET STARTED.
              </span>
            </button>
          </div>
          {/* <div
          className="phone-number"
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          <a href="tel:+2348094442019 " className="call-link-one">
            {" "}
            CLICK HERE TO CALL{" "}
          </a>
        </div> */}

          {/* <img
          id="firstP"
          style={{ top: "-20px" }}
          className="mt-4"
          src={partner}
          alt="partners"
        /> */}
          {/* </div> */}
        </div>
      </section>
      <section>
        <div className="auto-container">
          <div className=" content-column col-lg-12">
            <p>How it works</p>
            <ul className="list-style-decimal">
              <li>Fill the form with your correct detail</li>
              <li>
                Access the Brand Partner Highlight to select your partnership
                option.
              </li>
              <li>Fill the biodata form.</li>
              <li>Execute your contract. </li>
              <li>
                <div
                  class="btn-box"
                  style={{ display: "inline", marginRight: "10px" }}
                >
                  <button
                    onClick={handleShow}
                    class="theme-btn btn-style-four mb-4 mt-3"
                  >
                    <span class="btn-title">
                      FILL THE FORM NOW TO GET STARTED
                    </span>
                  </button>
                </div>
                {/* <div className="phone-number">
                <a href="tel:+2348094442019 " className="call-link-two">
                  {" "}
                  OR CLICK HERE TO CALL{" "}
                </a>
              </div> */}
              </li>
            </ul>

            {/* <p style={{ fontWeight: 'bold' }}>
              So how exactly do you know the genuinity of a property?
            </p> */}
          </div>
        </div>
      </section>

      {/* <section className="" style={{ background: "#541484" }}>
        <div className="auto-container">
          <p
            style={{
              fontWeight: "bold",
              color: "#ed6c11",
              fontSize: "20px",
              paddingTop: "30px",
            }}
          >
            Our property verification includes but not limited to the following:
          </p>

          <ul
            className="list-style-two ul-text-white"
            style={{ color: "white" }}
          >
            <li>
              Physical land inspection with our land experts for picking
              Coordinates, and engaging in other field research.
            </li>
            <li>
              Correlating the document data with the actual site location data
              and determining the actual status of the land.
            </li>
            <li>Competitive analysis of similar adjoining Properties.</li>
            <li>
              Coordinate Charting at Surveyor General's office for updated
              information.
            </li>
            <li>A comprehensive examination of all documents</li>
            <li>Confirming other government Property requirements</li>
            <li>Authentication of the claimed title.</li>
            <li>Authenticating the property ownership</li>
            <li>Unveiling any possible third-party ownership claims.</li>
            <li>Unraveling the property history.</li>
            <li>Root of title research</li>
            <li>Checking of taxes or collateral issues</li>
            <li>Checking any internal dispute.</li>
            <li>Examining the Structural state of the interest building.</li>
            <li>Flooding susceptibility check.</li>
            <li>Confirming all documents in relation to the structure.</li>
            <li>Ensure interest land use tally with existing use</li>
            <li>
              Confirming the site plan is in conformity with approved layout
              plan
            </li>
            <li>Confirming all planning tallies with the state master plan.</li>
            <li>Etc</li>
          </ul>

          <div
            class="btn-box"
            style={{ display: "inline", marginRight: "10px" }}
          >
            <button
              data-toggle="modal"
              data-target="#landingModal"
              class="theme-btn btn-style-four mb-4 mt-3"
            >
              <span class="btn-title">CONTACT US NOW</span>
            </button>
          </div>
          <div className="phone-number">
            <a href="tel:+2348094442019 " className="call-link-one">
              {" "}
              OR CLICK HERE TO CALL{" "}
            </a>
          </div>
        </div>
      </section> */}

      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-3 pb-5 text-white">
              <h5 style={{ color: "white", textDecoration: "underline" }}>
                <b>MD ADDRESS </b>
              </h5>
              <br />
              <p className="text-light">
                About a decade ago, I congratulated myself for something that
                would later put my life through a furnace, something that would
                change my path, and something that would end up setting some
                record for the Nigerian Real Estate Stakeholders . . . moving to
                the Lekki-Ajah axis for a real estate agent job. Although I've
                been a professional Real Estate Surveyor and Valuer, at first,
                it was so exciting being an agent, but soon followed by a lot of
                heartbreaks. Amongst these heartaches were
              </p>
              <br />
              <ul className="list-style-two ">
                <li className="text-light">
                  My boss was locked in the cell for reporting someone who tried
                  to dupe our client over a property we paid for.
                </li>
                <li className="text-light">
                  Properties being demolished by the government.
                </li>
                <li className="text-light">
                  Flood overtaking lives, homes and other properties.
                </li>
                <li className="text-light">Killing and fighting over land.</li>
                <li className="text-light">
                  The stealing of on-site materials by some dubious masons and
                  even supposed engineers.
                </li>
                <li className="text-light">Building collapse</li>
                <li className="text-light">
                  Unending court cases and evictions etc.
                </li>
              </ul>
              <br />
              <p className="text-light">
                This pushed me to learn and focus more on one mostly ignored but
                very crucial real estate aspect: Property Verification and
                futuristic property development, which I did for another few
                years. My years of expertise in this, combined with my primary
                profession as a Real Estate Surveyor and Valuer, coupled with
                the efforts and contributions of other property professionals we
                put together in our firm over the years; Land Surveyors, Estate
                Surveyors, Town Planners, Architects, Civil Engineers, Property
                Lawyers, Quantity Surveyors, and Researchers… is what brings us
                here today.
                <br />
                <br />
                Our values are simple:
              </p>
              <br />
              <ul className="list-style-two ">
                <li className="text-light">
                  To give eco-communal lifestyle in our estate developments that
                  promotes happiness and longevity.
                </li>
                <li className="text-light">
                  To save lives through saving properties, one property at a
                  time. In short, to prevent real estate losses.
                </li>
                <li style={{ listStyleType: "none" }}>
                  <div
                    class="btn-box"
                    style={{ display: "inline", marginRight: "10px" }}
                  >
                    <button
                      onClick={handleShow}
                      class="theme-btn btn-style-four mb-4 mt-3"
                    >
                      <span class="btn-title">
                        FILL THE FORM NOW TO GET STARTED
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title">Reward Table</span>
          </div>
          <div className="outer-box">
            <figure id="verification-img-v" className="verification-img-v">
              <img
                src={price}
                alt="Professional Charge"
                width="100%"
                height="100%"
              />
            </figure>
            <div className="table-responsive" id="verification-table">
              <table className="table table-bordered table-center">
                <thead style={{ backgroundColor: "#41036E", color: "#ffffff" }}>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">% Reward</th>
                    <th scope="col">Payment Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text">FloraHomes Estate Properties</td>
                    <td className="text">5% of Property Price</td>
                    <td className="text"></td>
                  </tr>
                  <tr>
                    <td className="text">
                      Verification / Professional Advisory Service
                    </td>
                    <td className="text">10% of Company's Professional fees</td>
                    <td className="text"></td>
                  </tr>
                  <tr>
                    <td className="text">Book Sale</td>
                    <td className="text">50% of the Book Price</td>
                    <td className="text">After Payment has been recieved</td>
                  </tr>
                  <tr>
                    <td className="text">Design, Build & Manage</td>
                    <td className="text">5% of Company's Professional fees</td>
                    <td className="text">Upon Full Execution of the Project</td>
                  </tr>
                  <tr>
                    <td className="text">Complete Property Buyer Service</td>
                    <td className="text">10% of Company's Professional fees</td>
                    <td className="text">Upon Full Execution of the Service</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center respo" style={{ color: "#41036E" }}>
              Note: All percentage earnings are subject to review from time to
              time as may be determined by the company board.{" "}
            </p>
            <div
              class="btn-box veriff-first"
              style={{
                display: "block",
                // marginRight: "10px",
                textAlign: "center",
              }}
            >
              <button
                onClick={handleShow}
                class="theme-btn btn-style-four mb-4 mt-3"
              >
                <span class="btn-title">CLICK HERE TO ENTER YOUR DETAIL</span>
              </button>
            </div>
            <br />
            <p>
              For every property you see around, there is a soul attached to it.
              If the property is "alive", the soul breathes, and if the property
              is "not alive", the soul is depressed and weakened. That's to
              remind you that when there are property losses or inefficient
              space designs, it wouldn't just be about the monetary losses, it
              will also be about the devastating health conditions it reflects
              on the victims.{" "}
            </p>
            <br />
            <p>
              On this note, we are hoping we can align our values so that we can
              partner to "PREVENT REAL ESTATE LOSSES AS WELL AS GIVE BOTH THE
              EXISTING AND ASPIRING PROPERTY INVESTORS FUTURISTIC INVESTMENTS".
              This way, the property investors can make informed decisions
              before taking any real estate investment step and they can as well
              have better investment opportunities.{" "}
            </p>
            <br />
            <p>
              We've helped thousands of individuals through our estates,
              services and our free materials, our new goal is to extend our
              help to every nuke and cranny of Nigeria through you and every
              other person that shares similar values.{" "}
            </p>
            <EngageInService
              first_step="Enter Your Detail Now To Request A Call-Back"
              second_step="  Make Payment."
              third_step="    Submit Service Information."
              fourth_step=" Connect with Your Personal Manager."
              onClick={handleShow}
              call_to_action={
                <div
                  class="btn-box"
                  style={{
                    display: "block",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    onClick={handleShow}
                    class="theme-btn btn-style-three mb-4 mt-3"
                  >
                    <span class="btn-title">REQUEST A CALL-BACK NOW</span>
                  </button>
                </div>
              }
            />

            <br />

            <br />
            <hr
              style={{
                border: "1px solid red",
                marginBottom: "10px !important",
              }}
              id="horizontal_line"
            />
            <div style={{}}>
              <h5 style={{ color: "#541484 !important" }}>
                <b> WHO WE ARE</b>
              </h5>
              <p>
                We are Nigeria's No. 1 Property Verification and Real Estate
                Investment company that gives professional end to end Real
                Estate and Property Development services across Nigeria through
                our experienced and ethical team of professionals which includes
                but not limited to; Land Surveyors, Estate Surveyors, Town
                Planners, Property Lawyers, Quantity Surveyors, Civil Engineers,
                Architects, Researchers. . .
              </p>
            </div>
            <br />
            <br />
            <div>
              <h5 style={{ color: "#541484 !important" }}>
                <b> WE ARE KNOWN FOR:</b>
              </h5>
              <ul className="list-style-two">
                <li>
                  Leading at providing the best real estate verification
                  services across Nigeria that indemnifies buyers against both
                  present and future losses of any kind.
                </li>
                <li>
                  Offering end to end 100% done-for-you real estate and property
                  development services to existing and aspiring stakeholders be
                  it individuals, developers, organisations, clubs, groups.
                </li>
                <li>
                  Delivering simplified quality information to the mobile phones
                  of every property investor using technology.
                </li>
                <li>
                  Engaging in community and town planning that protect against
                  life and property loss.
                </li>
                <li>
                  Engaging green architecture that revitalizes every soul
                  occupying the space.
                </li>
                <li>
                  Ensuring all properties to be traded or to be developed go
                  through a thorough Verification process so as to replace loss
                  and fear with trust and peace in the minds of stakeholders.
                </li>
                <li>
                  Giving excellent service and quality of materials that ensure
                  all investments are aimed at futuristic sustainability and not
                  just for short term advantage.
                </li>
                <li>
                  Ensuring timely delivery that produces optimum return on fund
                  input.
                </li>
                <li>
                  Delivering excellent physical equivalents in any of our
                  models.
                </li>
                <li>
                  Ensuring confidentiality and security that protects us and our
                  customers from danger through exposure.
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
        show={show}
        handleClose={handleClose}
      />
      {/* <Footer/> */}
    </>
  );
};

export default BrandPartner;
