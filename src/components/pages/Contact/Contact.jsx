/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import LorR from "../LoginAndRegister/LorR";
import bg from "../../assets/productAssets/about-bg.jpg";

import Footer from "../../layouts/Footer";
const Contact = () => {
  return (
    <>
      <div>
        <section
          className="page-title"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="auto-container">
            <h1>Contact Us</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="contact-page-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="contact-column col-lg-4 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>Contact Info</h2>
                  </div>
                  <ul className="contact-info">
                    <li>
                      <span className="icon fa fa-map-marker-alt" />
                      <p>
                        <strong>Suite 6, U-Mudi Filling Station,</strong>
                      </p>
                      <p>Lekki-Epe Express, Ibeju-Lekki, Lagos.</p>
                    </li>
                    <li>
                      <span className="icon fa fa-phone-volume" />
                      <p>
                        <strong>Call Us</strong>
                      </p>
                      <p>+234 809 444 2019</p>
                    </li>
                    <li>
                      <span className="icon fa fa-envelope" />
                      <p>
                        <strong>Mail Us</strong>
                      </p>
                      <p>
                        <a href="mailto:hello@florahomesgc.com">
                          hello.florahomesgc@gmail.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <span className="icon fa fa-clock" />
                      <p>
                        <strong>Available 24/7 Online</strong>
                      </p>
                      <p>For Call: Mon - Sat (8am to 6pm)</p>
                    </li>
                  </ul>
                  <ul className="social-icon-two social-icon-colored">
                    <li>
                      <a
                        href="https://www.facebook.com/florahomesgc"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/florahomesgc"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/florahomesgc"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/channel/UCWnEctNYFxyXrzthXvsxizg"
                        target="_blank"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/florahomesgc"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Form Column */}
              <div className="form-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <LorR />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
