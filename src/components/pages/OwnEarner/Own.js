import React from "react";
import "../../../css/own.css";
import bannerImage from "../../assets/owb.png";
import bodyImage from "../../assets/owb3.png";
import EstateCard from "../OurEstates/EstateCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import me from "../../assets/me.jpg";
import iconShape from "../../assets/icon-shape.png";

const Own = () => {
  const properties = useSelector((state) => state?.properties?.properties);

  const ownEarnerProperty = properties?.filter(
    (property) => property?.propertyCategory === "Own-earner"
  );
  const stories = useSelector((state) => state?.stories?.stories);
  return (
    <>
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="auto-container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 className="heroH2">
                  Welcome to the most profitable way to build wealth with Land
                  Banking Across Nigeria.
                </h2>
                <div className="heading-paragraph">
                  <p
                    style={{
                      color: "#f2f2f2",
                      textAlign: "left",
                      lineHeight: "30px",
                    }}
                    className="mt-3"
                  >
                    Our properties listing are genuine and verifiable with
                    plethora of smart land bankers already investing with us.
                    Our own-earner property portfolio covers areas in
                    Ibeju-lekki, Epe, Ajah, Ibadan, Osogbo, Ilorin, Abuja,
                    Kaduna, Kano and Portharcourt
                  </p>
                </div>
                <div>
                  <a
                    href="https://jaza.com.ng/"
                    className="btn-get-started scrollto"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img mb-5">
                <img src={bannerImage} className="img-fluid animated" alt />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="auto-container">
              <div className="row justify-content-between">
                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                  <img
                    src={bodyImage}
                    className="img-fluid"
                    alt
                    data-aos="zoom-in"
                  />
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                  <h3 data-aos="fade-up">Grow a future with us</h3>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    Achieve financial freedom through Land Banking Irrespective
                    of Your Income Level and Location.
                  </p>
                  <p>
                    Every purchase is at the going market rate with updates on
                    partners' dashboard from time to time. Therefore, recurrent
                    purchasers are advised to buy as many units for the initial
                    purchases which is always at the lowest rate
                  </p>
                  <div className="row">
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <h4>Buy &amp; Earn</h4>
                      <p>
                        Our referral system is flawless. You are sure to earn
                        10% of your referee first payment.
                      </p>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <h4>Secure a future</h4>
                      <p>
                        Because property value is always on the rise, as a
                        land-banker you are building a stable future.
                      </p>
                    </div>
                    <div className="registeration_login">
                      <div className="btn-box">
                        <a href="https://jaza.com.ng/" className="theme-btn btn-style-three">
                          <span className="btn-title">
                            Start your journey with us
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="auto-container">
            <div className="mb-3">
              <h2 className="top-h2">Our Properties</h2>
              <div className="heading-paragraph">
                <p
                  style={{
                    color: "#000",
                    textAlign: "left",
                    lineHeight: "26px",
                  }}
                >
                  Our properties listing are genuine and verifiable with
                  plethora of smart land bankers already investing with us. Our
                  own-earner property portfolio covers areas in Ibeju-lekki,
                  Epe, Ajah, Ibadan, Osogbo, Ilorin, Abuja, Kaduna, Kano and
                  Portharcourt
                </p>
              </div>
            </div>
            <div className="row">
              {ownEarnerProperty?.slice(0, 3)?.map((property) => (
                <div
                  key={property?._id}
                  className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <EstateCard property={property} />
                </div>
              ))}
            </div>

            <div className="registeration_login">
              <div className="btn-box">
                <Link to="/estates" className="theme-btn btn-style-three">
                  <span className="btn-title">Explore more properties</span>
                </Link>
              </div>
            </div>
          </div>

          {stories?.length > 0 && (
            <section id="services" className="services section-bg mt-5">
              <div className="auto-container" data-aos="fade-up">
                <div className="section-title">
                  <p>Our Own-Earners' Story</p>
                </div>
                <div className="row">
                  {stories?.map((story) => (
                    <div
                      className="col-md-6 col-lg-3 d-flex align-items-stretch"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <img
                            src={story?.photoUrl}
                            alt={story?.firstName}
                            height={100}
                            width={100}
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                        <h4 className="title">
                          {story?.firstName} {story?.lastName}
                        </h4>
                        <p className="description">{story?.story}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className="auto-container mt-5">
            <div className="row">
              <div className="mb-5" style={{ zIndex: 50 }}>
                <h2 className="top-h2">
                  <span style={{ color: "#ED6C11" }}>Ibrahim Olayioye</span> -
                  Land Banker of the Month
                </h2>
              </div>
              <div className="col-sm mt-3">
                <span className="icon-dots"></span>

                <div className="image-box">
                  <figure className="image">
                    <img id="bmw" src={me} alt="" />
                    <img src={iconShape} alt="" className="bmw2" />
                  </figure>
                </div>
              </div>

              <div className="col-sm">
                <p>
                  As your partner, Your commitment to your land-banking goal
                  this month has not gone unnoticed to us. By your continous
                  investment, you are not only making a financially savvy
                  decison for the present, you are also making efforts that
                  guarantees long term benefit. Your investment is a testament
                  to your foresight and strategic thinking. You have shown a
                  deep understanding of the potential of land banking to
                  generate returns over the long term, and we are honored to
                  have you as a valued member of our community.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Own;
