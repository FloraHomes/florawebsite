import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import "./style.css";
import "./own-earner.css";
import partner from "../../assets/partner2.jpg";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EstateCard from "../OurEstates/EstateCard";
import surv from "../../assets/lb.jpeg";
import iconShape from "../../assets/icon-shape.png";
import { fetchStories } from "../../../redux/slices/storiesSlice";

const OwnEarner = () => {
  const tawkToPropertyId = "5a9e51824b401e45400d70e9";
  const navigation = useHistory();
  const dispatch = useDispatch();

  const properties = useSelector((state) => state?.properties?.properties);
  const stories = useSelector((state) => state?.stories?.stories);

  // console.log(stories);

  const ownEarnerProperty = properties?.filter(
    (property) => property?.propertyCategory === "own-earner"
  );

  // Direct Chat Link
  // https://tawk.to/chat/tawkToPropertyId/tawkToKey

  const tawkToKey = "1cit1c3m8";

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
    dispatch(fetchStories());
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
      <section className="owne-hero">
        <div className="owne-hero-overlay" />
        <div className="owne-container owne-hero-container">
          <div className="left">
            <p className="p1">LAND BANKING - OWN &amp; EARN</p>
            <h1 className="owne-heading">
              Welcome to the most profitable way to build wealth with Land
              Banking Across Nigeria.
            </h1>
            <p className="p2">
              With opportunity for you to Own various landed properties in bits
              while you watch your capital grow irrespective of your income
              level and location and also Earn Weekly Referral Income.
            </p>
            <a href="https://florahomes-app.netlify.app/">
            <button className="owne-btn">Create an own-earner account</button>
            </a>
          </div>
          <div className="right" />
        </div>
        <img src={partner} alt="partners" className="bottom-img" />
      </section>

      <section>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 text-white">
            <h2 className="top-h2">
              Achieve financial freedom through Land Banking Irrespective of
              Your Income Level and Location.
            </h2>
            <div className="heading-paragraph">
              <p
                style={{ color: "#000", textAlign: "left", lineHeight: "26px" }}
              >
                ● Join millions of Nigerian Landbankers across the globe who
                watch their wealth grow through land value appreciation while
                they also earn.
              </p>
              <p
                style={{ color: "#000", textAlign: "left", lineHeight: "26px" }}
              >
                ● Become a FloraHomes OWN-EARNER PARTNER
              </p>
              <p
                style={{ color: "#000", textAlign: "left", lineHeight: "26px" }}
              >
                ● 1 unit == 1 sqm of land
              </p>
              <p
                style={{ color: "#000", textAlign: "left", lineHeight: "26px" }}
              >
                ● Earn Over 50% Return on Investment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section alternate">
        <div className="auto-container">
          <div className="mb-5">
            <h2 className="top-h2">Our Properties</h2>
            <div className="heading-paragraph">
              <p
                style={{ color: "#000", textAlign: "left", lineHeight: "26px" }}
              >
                Our properties listing are genuine and verifiable with plethora
                of smart land bankers already investing with us. Our own-earner
                property portfolio covers areas in Ibeju-lekki, Epe, Ajah,
                Ibadan, Osogbo, Ilorin, Abuja, Kaduna, Kano and Portharcourt
              </p>
            </div>
          </div>
          <div className="row">
            {ownEarnerProperty?.slice(0, 3)?.map((property) => (
              <div
                key={property?._id}
                className="news-block col-lg-4 col-md-4 col-sm-12 wow fadeInRight animated"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <EstateCard property={property} />
              </div>
            ))}
          </div>

          <div className="registeration_login">
            <div className="btn-box mt-3">
              <Link to="/estates" className="theme-btn btn-style-three">
                <span className="btn-title">Explore more properties</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="auto-container">
        <div className="row">
          <div className="mb-5" style={{ zIndex: 50 }}>
            <h2 className="top-h2">
              <span style={{ color: "#ED6C11" }}>Adeoye Julius</span> - Land
              Banker of the Month
            </h2>
          </div>
          <div className="col-sm mt-3">
            <span className="icon-dots"></span>

            <div className="image-box">
              <figure className="image">
                <img id="bmw" src={surv} alt="" />
                <img src={iconShape} alt="" className="bmw2" />
              </figure>
            </div>
          </div>

          <div className="col-sm">
            <p>
              What I find remarkable is that this text has been the industry's
              standard dummy text ever since some printer in the 1500s took a
              galley of type and scrambled it to make a type specimen book; it
              has survived not only four centuries of letter-by-letter resetting
              but even the leap into electronic typesetting, essentially
              unchanged except for an occasional 'ing' or 'y' thrown in. It's
              ironic that when the then-understood Latin was scrambled, it
              became as incomprehensible as Greek; the phrase 'it's Greek to me'
              and 'greeking' have common semantic roots!” (The editors published
              his letter in a correction headlined “Lorem Oopsum”).
            </p>
          </div>
        </div>
      </div>

      {stories?.length > 0 && (
        <section className="achieve">
          <div className="owne-container">
            <h2>Customers' Story</h2>
            <div className="owne-cards">
              {stories?.map((story) => (
                   <div className="owne-card" key={story?._id}>
                   <img src={story?.photoUrl} alt={story?.firstName} />
                   <h3 style={{color: "#541484"}}>{story?.firstName} {story?.lastName}</h3>
                   <p className="font-bold italic text-lg">
                     {story?.story}
                   </p>
                   {/* <a href="https://florahomes-app.netlify.app/" style={{color: "red", cursor:"pointer"}}><strong>Sign Up</strong></a> */}
                 </div>
              ))}
             
           
            </div>
          </div>
          <div className="registeration_login">
            <div className="btn-box mt-3">
              <a href="https://florahomes-app.netlify.app/" className="theme-btn btn-style-three">
                <span className="btn-title">Start your journey with us</span>
              </a>
            </div>
          </div>
        </section>
      )}

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
