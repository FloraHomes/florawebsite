import React, { useState, Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import tawkTo from "tawkto-react";

import partner from "../../assets/partner2.jpg";
import workers from "../../assets/workers.jpg";
import cardImg1 from "../../assets/blog1.jpg";
import cardImg12 from "../../assets/blog2.jpg";
import cardImg3 from "../../assets/blog3.jpg";
import surv from "../../assets/land-verification.jpg";
import iconShape from "../../assets/icon-shape.png";
import mdspeech1 from "../../assets/mdspeech1.jpg";
import homevideo from "../../assets/videos/home_video.mp4";
import Footer from "../../layouts/Footer";
import { SliderData as slides } from "./sliderData";
import Con2 from "./Con2";
import BlogCard from "../BlogDetails.jsx/BlogCard";
// import Nav from "../../layouts/Nav";

const Home = () => {
  const tawkToPropertyId = "6187cbd66bb0760a49417fc1";
  const tawkToKey = "1fjt78g7i";

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const history = useHistory();

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 10000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Fragment>
      {/* <Nav /> */}
      <div className="newP">
        <div className="beginning">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
            data-interval="6500"
          >
            <div className="carousel-inner">
              <div className="auto-container">
                <div className="carousel-item active">
                  <div>
                    <HeadShake>
                      <h3 className="text-light">We are</h3>
                    </HeadShake>
                    <Fade bottom>
                      <h2 className="text-light font-weight-bolder">
                        FloraHomes GC,
                      </h2>
                      <p className="text-light">
                        Foremost Online Property Verification & Real Estate
                        Investment Company.
                      </p>
                      <button
                        onClick={() => history.push("/about")}
                        type="button"
                        className="btn-1 custom-btn btn btn-lg"
                      >
                        About Us
                      </button>
                    </Fade>
                  </div>
                </div>

                <div className="carousel-item">
                  <div>
                    <HeadShake>
                      <h3 className="text-light">Welcome to the world of</h3>
                    </HeadShake>
                    <Fade bottom>
                      <h2 className="text-light font-weight-bolder">
                        SECURE, STERLING &amp; SEAMLESS
                      </h2>
                      <p className="text-light">
                        Services In Real Estate & Property Development
                      </p>
                      <button
                        type="button"
                        onClick={() => history.push("/product")}
                        className="custom-btn btn btn-lg"
                      >
                        Our Services
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev control"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next control"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <img id="firstP" src={partner} alt="partners" />
        </div>

        {/* <div className="img"> */}
        {/* <h4 className="text-center" style={{ visibility: "hidden" }}>
            Affiliated Professional Bodies
          </h4> */}

        {/* </div> */}

        <div className="container con1">
          <div className="row">
            <div className="col-sm">
              <span className="icon-dots"></span>

              <div className="image-box">
                <figure className="image">
                  <img id="bmw" src={surv} alt="" />
                  <img src={iconShape} alt="" className="bmw2" />
                </figure>
              </div>
            </div>

            <div className="col-sm">
              <h4>Why we get</h4>
              <h2 style={{ color: "#1e1f36", fontWeight: "700" }}>
                Our hands dirty for you
              </h2>
              <h5 className="mb-4">
                To Prevent Real Estate Losses by running end-to-end property
                verification on every subject property before you pay for them,
                one property at a time.
              </h5>
              <p>
                When our certified professionals that include Estate Surveyors &
                Valuers, Land Surveyors, Property Lawyers, Townplanners, Civil
                Engineers, Architects, Builders, Journalists, Quantity
                Surveyors, Researchers etc. take your interest land or building
                through our verification checklist before you pay for it, then
                be assured that you've been indemnified against eviction,
                demolition, 3rd party claimants, scam, collapse and any other
                form of property losses anywhere across Nigeria.
              </p>
            </div>
          </div>
        </div>

        <Con2 />

        {/* first cards */}
        <div className="con3">
          <div className="text-center">
            <h4>Products</h4>
            <h2>Services we render</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                </div>

                <div className="word">
                  <h4 className="text-center">Verification Service</h4>
                  <p>
                    Due to the prevalence of demolition, eviction, dispute and
                    scam issues relating to landed properties, we set out to
                    help individuals and corporate investors to verify and clear
                    their subject of interest either before paying for the new
                    found property...
                  </p>
                </div>

                <div className="chevron">
                  <Link to="/verification">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="col-sm">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="currentColor"
                    className="bi bi-house-door"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </div>

                <div className="word">
                  <h4 className="text-center">
                    Complete Property Buyer Services
                  </h4>
                  <p>
                    Our property acquisition team is always available and ready
                    to help prospective property buyers handle their property
                    purchase from start to finish at 100% done-for-you either
                    land or building, within Estate or with Omo-Onile, for
                    individual or corporate large expanse across Nigeria...
                  </p>
                </div>

                <div className="chevron">
                  <Link to="/cpbs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/product"
              type="button"
              className="custom-btn cuz btn btn-lg"
              style={{ background: "#541484", boxShadow: "none" }}
            >
              View All Products
            </Link>
          </div>
        </div>

        {/* <div className='sec2'>
          <h2 className='text-center'>WHAT WE STAND FOR</h2>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe
              id='inlineFrameExample'
              title='FloraHomeGC Intro Video'
              loading='lazy'
              className='embed-responsive-item'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/gkAYHJvo8as?autoplay=1&mute=1'
              allowFullScreen
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div> */}

        {/* <div className='sec3'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <h4>PURPOSE</h4>
                <h2>our promise to you</h2>
                <h5 className="mb-3 text-bolder">We help you prevent real estate losses by;</h5>
                <ul>
                  <li className='noB'>
                  Running end-to-end property verification on every subject property before you pay for them, one property at a time.
                  </li>
                  <li className='noB'>
                  Providing 100% done-for-you real estate and property development services to existing and aspiring property investors.
                  </li>
                  <li className='noB'>
                  Making verified and futuristic properties accessible to every individual and corporate investors.
                  </li>
                  <li className='noB'>
                  Delivering simplified quality information to the mobile phones of every property investor using technology.
                  </li>
                
                </ul>
                <button type='button' className='custom-btn btn btn-lg'>
                  Learn More...
                </button>
              </div>
              <div className='col-sm'>
                <div className='clipBorder'>
                  <img src={workers} alt='workers' />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <section
          className="video-section"
          style={{ backgroundImage: `url(${mdspeech1})` }}
        >
          <div className="auto-container">
            <div className="content-box">
              <h2 className="mb-4">WHAT WE STAND FOR</h2>

              <video
                id="player"
                controls
                src={homevideo}
                style={{ plyrColorMain: "#541484" }}
              />
              {/* <source src="assets/movies/home_video.mp4" type="video/mp4" ></source> */}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="anim-icons full-width">
            <span
              className="icon icon-circle-blue wow fadeIn animated"
              style={{ visibility: "visible", animationName: "fa-spin" }}
            />
            <span
              className="icon icon-dots wow fadeInleft animated"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            />
            <span
              className="icon icon-circle-1 wow zoomIn animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            />
          </div>
          <div className="auto-container">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">PURPOSE</span>
                    <h2>Our Promise To You</h2>
                    <p className="font-weight-bold mt-3">
                      We Help You Prevent Real Estate Losses By;
                    </p>
                    <div className="text">
                      <ul className="list-style-two">
                        <li>
                          Running end-to-end property verification on every
                          subject property before you pay for them, one property
                          at a time.
                        </li>
                        <li>
                          Providing 100% done-for-you real estate and property
                          development services to existing and aspiring property
                          investors.
                        </li>
                        <li>
                          Making verified and futuristic properties accessible
                          to every individual and corporate investors.
                        </li>
                        <li>
                          Delivering simplified quality information to the
                          mobile phones of every property investor using
                          technology.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="btn-box">
                    <Link to="/about" className="theme-btn btn-style-three">
                      <span className="btn-title">Learn more...</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="image-box">
                  <figure
                    className="image wow fadeIn animated"
                    style={{ visibility: "visible", animationName: "fadeIn" }}
                  >
                    <img src={workers} alt="FHGC Project Planning" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sec4">
          <div className="testTile text-center">
            <h4>TESTIMONIAL</h4>
            <h2>What Clients Say</h2>
          </div>

          <section className="slider">
            <i className="fa fa-chevron-left" onClick={prevSlide} />
            <i className="fa fa-chevron-right" onClick={nextSlide} />
            {slides.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <div className="slid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="46"
                        fill="currentColor"
                        className="bi bi-chat-left-quote"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"
                        />
                      </svg>
                      <p className="statement">{slide.p}</p>
                      <div className="slidFooter">
                        <p className="text-center" id="name">
                          {slide.name}
                        </p>
                        <p className="text-center">
                          {slide.rating.map((r, index) => {
                            return (
                              <i
                                key={index}
                                className="fa fa-star"
                                aria-hidden="true"
                              ></i>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        </div>

        <div className="sec5">
          <div className="auto-container">
            <div className="text-center">
              <h4>BLOGS</h4>
              <h2>Eye-Opening Content</h2>
            </div>
            <div className="card-deck">
              <BlogCard
                title="Lagos Set To Go Digital in Land Related Services Come 2021"
                category="Property Documentation"
                date="2020-12-14"
                link="/blog-1"
                image={cardImg1}
              />
              <BlogCard
                title="Know Your Land Size"
                category="Real Estate Investment"
                date="2020-10-07"
                link="/blog-2"
                image={cardImg12}
              />
              <BlogCard
                title="Know Your Property Title"
                category="  Property Authentication & Verification"
                date="2020-05-07"
                link="/blog-3"
                image={cardImg3}
              />
            </div>
          </div>
        </div>

        {/* <div className='sec6'></div> */}
      </div>
      <div className="registeration_login">
        <p className="lorCaption text-center">
          Join <strong>millions</strong> of real estate investors, buyers,
          developers, professionals, realtors, contractors, organisations and
          other stakeholders that are getting ahead in their investment
          knowledge, profitability, security and networking.
        </p>

        <div className="btn-box mt-3">
          <Link to="/login-register" className="theme-btn btn-style-three">
            <span className="btn-title">Register/Login</span>
          </Link>
        </div>
      </div>

      {/* <LorR /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
