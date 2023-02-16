/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";

import Optin_Trigger from "./Optin_Trigger";
import "./flora.css";
import miniFlat from "../../assets/floracity_7.jpg";
import mezzazine from "../../assets/mezzazine.jpg";
import header from "../../assets/flora-images/header2.jpg";
import rocket from "../../assets/rocket.svg";
import background from "../../assets/background.jpg";
import gal1 from "../../assets/flora-images/flora-gal1.jpg";
import gal2 from "../../assets/flora-images/flora-gal2.jpg";
import gal3 from "../../assets/flora-images/flora-gal3.jpg";
import gal4 from "../../assets/flora-images/flora-gal4.jpg";
import imgPark from "../../assets/floraEcopolis-images/FloraCity VIEW 30 1.0 PH.jpg";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import OptinModal from "../../SharedComponents/OptinModal";
import OptinForm from "../../SharedComponents/OptinForm";
import bookvideo from "../../assets/videos/Floracity Ecopolis.mp4";
import FloraModal from "./FloraModal";
import FloraForm from "./FloraForm";
import FloraImagesComponent from "./flora-components/FloraImagesComponent";
import AccordionContainer from "./flora-components/AccordionContainer";
import StepsToOwnYourUnits from "./flora-components/StepsToOwnYourUnits";
import Counter from "../../SharedComponents/CountDown";
import FloracityCountDown from "./flora-components/FloracityCountDown";
import FAQAccordions from "./flora-components/FAQAccordions";
import NewForm from "./NewForm";

// import Footer from "../../layouts/Footer";

const FloraEcopolis = () => {
  const [bookingDetail, setbookingDetail] = useState({});
  const [formData, setformData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
    city: "",
    how_you_hear_about_us: "",
    category: "",
  });
  return (
    <>
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <div className="heading-container-ecopolis">
                <h2>Welcome To </h2>
                <h1>FloraCity Ecopolis</h1>
              </div>

              <div className="heading-paragraph">
                <p style={{ color: "#fff", fontSize: 20, lineHeight: "26px" }}>
                  Communal. Premium-secured. Luxury. Smart. Energy-efficient.
                  Recreational. Green. Finely finished ECO-living.
                </p>
              </div>
              <div className="vidBox">
                <video
                  width="100%"
                  loop="true"
                  autoPlay="autoplay"
                  controls
                  muted
                >
                  <source src={bookvideo} type="video/mp4" />
                </video>
              </div>
              <br />
              <br />
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: "26px",
                    textAlign: "left",
                  }}
                >
                  <strong> Location:</strong> Beside Lekki Free Trade Zone,
                  Ibeju-Lekki, Lagos.
                </p>
              </div>
              <br />
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: "26px",
                    textAlign: "left",
                  }}
                >
                  <strong> Developed by:</strong> FloraHomes Global Consult
                  Limited.
                </p>
              </div>
              <br />
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: "26px",
                    textAlign: "left",
                  }}
                >
                  <strong> Insured by: </strong>Jaiz Takaful Insurance Plc.
                </p>
              </div>
              <br />
              <mark
                style={{
                  backgroundColor: "yellow",
                }}
                className="text yellow-text"
              >
                <strong> IMPORTANT NOTICE:</strong> After filling the interest
                form, <u>DO NOT MAKE ANY PAYMENT </u> until you've been
                contacted by a FloraCare Manager. This is because this offer
                might close at any time from now. Thank you for your
                understanding.
              </mark>
              <br />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="auto-container">
          <div className="row">
            {/* Content Box */}
            <ul className="detail-list-eco">
              <li>
                Despite the fact that Mr Tade Chukwudi Suleiman is rich with
                lucrative business, big mansion, happy family… he still finds
                himself feeling low, empty, depressed and sometimes suicidal.
              </li>
              <li>
                Welcome to a world where we are socially connected and still
                socially disconnected at the same time: latest gadgets, social
                apps, private apartments with their individualised amenities...
                with these and more, a man is being systematically isolated into
                loneliness, depression and quick ageing.
              </li>
              <li>
                This is why we created FloraCity Ecopolis, a low-combustion city
                that utilises clean energy, recycling, passive cooling, natural
                light, reduces auto-motion, has abundance of nature, capitalises
                on sustainability as well as socialising to boost human
                happiness, healthiness and longevity.
              </li>
            </ul>
            <div>
              <ul className="no-margin">
                <li>
                  <b>Before the offer closes...</b>
                </li>
                <li>
                  <b>Own one apartment for yourself OR</b>
                </li>
                <li>
                  <b>Co-own in slot(s) to earn Income.</b>
                </li>
              </ul>
            </div>

            <div className="content-column col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
                <br />
                <br />
                <h4>
                  <b>
                    <font
                      color
                      style={{ color: "black!important", fontSize: "20px" }}
                    >
                      The purchase offers are basically 3.
                    </font>
                  </b>
                </h4>
                <ul className=" list-style-numbers pt-5">
                  <li
                    className="text-dark text-dark"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    The N2m per slot 1-Bedroom Flat co-own which is 40% one-time
                    resell profit in 12 months OR 25% annually in Rental income.
                    Maximum slots per person is 5 slots.
                  </li>
                  <li
                    className="first-inv--items text-dark"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    The N5m per slot 1-Bedroom Duplex Co-own which is 50%
                    one-time resell profit in 12 months OR 35% annually in
                    Rental income. Maximum slots per person is 5 slots.
                  </li>
                  <li
                    className="first-inv--items text-dark"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    The Sole-ownership of any of these apartments as exterior
                    finished delivery together with all the facilities at no
                    extra fee:
                    <ul className="nested-ul-alphabets list-style-one">
                      <li>1 bedroom flat: N17m</li>
                      <li>1 bedroom duplex: N26m</li>
                      <li>2 bedroom flat: N28.5m</li>
                      <li>2 bedroom duplex: N36m</li>
                      <li>3 bedroom flat: N51.5m</li>
                      <li>3 bedroom duplex: N57m</li>
                    </ul>
                  </li>
                </ul>
                <mark
                  style={{
                    backgroundColor: "yellow",
                  }}
                  className="text yellow-text"
                >
                  Please note: Do not make payment after filling the INTEREST
                  form until a FloraCare manager has confirmed that. This is
                  because the offer may close at any time from now.
                </mark>
                <p className="text-center" style={{ marginTop: "10px" }}>
                  <div className="text-center mb-4 mt-4">
                    <FloracityCountDown
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "20px",
                        marginTop: "10px",
                        padding: "2px",
                      }}
                    />
                  </div>
                  <button
                    data-toggle="modal"
                    data-target="#optinForm"
                    className="theme-btn btn-style-one clickable-modal"
                  >
                    <span className="btn-title">
                      CLICK HERE TO FILL THE INTEREST FORM AND A FLORACARE
                      MANAGER WILL CONTACT YOU
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <img src={imgPark} />
              <br />
              <br />
              <br />

              <div className="sec-title">
                <span className="flora-ecopolis">
                  THE ECOPOLIS FEATURES AND FACILITIES
                </span>
              </div>

              <div className="row">
                {/* Bullet Listing Column */}
                <div className="affiliate-block col-lg-12 col-md-12">
                  <ul className="list-style-one flora-list-orange">
                    <li className="text-white">
                      Swimming pool, snooker, table-tennis...
                    </li>
                    <li className="text-white">Nature design landscaping.</li>
                    <li className="text-white">Central car parking area.</li>
                    <li className="text-white">Children play area.</li>
                    <li className="text-white">24/7 Electricity.</li>
                    <li className="text-white">Game room.</li>
                    <li className="text-white">Library.</li>
                    <li className="text-white">Spa.</li>
                    <li className="text-white">Gym.</li>
                    <li className="text-white">Mart.</li>
                    <li className="text-white">Restaurant.</li>
                    <li className="text-white">Laundromat.</li>
                    <li className="text-white">Rooftop sit-out.</li>
                    <li className="text-white">Water treatment system.</li>
                    <li className="text-white">
                      24/7 Executive security system.
                    </li>
                    <li className="text-white">
                      Homes are energy-efficient, luxury, smart...
                    </li>
                    <li className="text-white">
                      Paved roads, drainages, fencing, bio-sewage systems...
                    </li>
                  </ul>

                  <br />
                </div>
                <br />
                <br />
                <div className="heading-paragraph paragraph-color-align">
                  <p>
                    Nothing beats exercising in a well-equipped gym in the
                    company of neighbours turned friends with all their added
                    vibes…
                  </p>
                  <p>
                    Nothing beats sharing drinks with friends within a well
                    suited rooftop sit-out…
                  </p>
                  <p>
                    Nothing beats watching football together with other
                    enthusiasts shouting "goal…" "haaa…" "nooo…" at the same
                    time haha...
                  </p>
                  <p>
                    Nothing beats jumping into the swimming pool together with
                    your friends at night after the whole hustle and bustle of
                    the day…
                  </p>
                  <p>
                    Nothing beats raising a street-smart child who will walk the
                    street and get involved on the playing ground together with
                    other kids…
                  </p>
                  <p>
                    Nothing beats working from home all day long and feeling
                    relaxed like you're working from a recreational park…
                  </p>
                  <p>And more…</p>

                  <p>
                    Be a part of this Eco-footprint project that is promoting
                    happiness and longevity through communal and eco-luxury
                    living.
                  </p>
                  <p>
                    Perfect for live-in, home-away-from-home relaxation,
                    shortlets, annual rentals, vacation spots for individuals,
                    families, clubs & corporates…
                  </p>
                </div>
                <p style={{ color: "#fff", textAlign: "left" }}>
                  Own one apartment fully for yourself OR co-own in slot(s) to
                  earn annual rental or one-time 12 months resell income.
                </p>
              </div>
              <mark
                style={{
                  backgroundColor: "yellow",
                }}
                className="text yellow-text"
              >
                Please note: Do not make payment after filling the INTEREST form
                until a FloraCare manager has confirmed that. This is because
                the offer may close at any time from now.
              </mark>
              <p className="text-center" style={{ marginTop: "10px" }}>
                <div className="btn-box">
                  <div className="text-center mt-4 mb-4">
                    <FloracityCountDown
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "20px",
                        padding: "2px",
                        paddingBottom: "10px",
                      }}
                    />
                  </div>
                  <button
                    data-toggle="modal"
                    data-target="#optinForm"
                    className="theme-btn btn-style-two clickable-modal"
                  >
                    <span className="btn-title">
                      CLICK HERE TO FILL THE INTEREST FORM
                    </span>
                  </button>
                </div>
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
      <FloraImagesComponent />
      <br />
      <StepsToOwnYourUnits />
      <br />
      <br />
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <AccordionContainer />
              <FAQAccordions />
              <mark
                style={{
                  backgroundColor: "yellow",
                }}
                className="text yellow-text "
              >
                Please note: Do not make payment after filling the INTEREST form
                until a FloraCare manager has confirmed that. This is because
                the offer may close at any time from now.
              </mark>
              <p className="text-center" style={{ marginTop: "10px" }}>
                <div className="text-center mb-4 mt-4">
                  <FloracityCountDown
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "2px",
                    }}
                  />
                </div>
                <button
                  data-toggle="modal"
                  data-target="#optinForm"
                  className="theme-btn btn-style-one clickable-modal"
                  style={{ backgroundColor: "#98b285", fontWeight: "bold" }}
                >
                  <span className="btn-title">
                    CLICK HERE TO FILL THE INTEREST FORM AND A FLORACARE MANAGER
                    WILL CONTACT YOU
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloraModal
        bookingDetail={bookingDetail}
        setbookingDetail={setbookingDetail}
        componentId="optinForm"
        title="PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED"
        component={<FloraForm />}
      />
    </>
  );
};

export default FloraEcopolis;
