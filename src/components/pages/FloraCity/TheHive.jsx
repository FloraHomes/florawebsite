/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";

import thehive_header from "../../assets/thehive-header.jpg";
import Elevation1 from "../../assets/Elevation1.jpg";
import background from "../../assets/background.jpg";
import map from "../../assets/map.png";
import map1 from "../../assets/map1.png";
import map2 from "../../assets/map2.png";
import card_2 from "../../assets/card-2.jpg";
import card_3 from "../../assets/card-3.jpg";
import card_4 from "../../assets/card-4.jpg";
import card_5 from "../../assets/card-5.jpg";
import rocket from "../../assets/rocket.svg";
import handleAccordion from ".";
import Optin_Trigger from "./Optin_Trigger";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import OptinModal from "../../SharedComponents/OptinModal";
import OptinForm from "../../SharedComponents/OptinForm";
// import Footer from "../../layouts/Footer";
// import card_6 from "../../assets/card-6.jpg"
const TheHive = () => {
  useEffect(() => {
    handleAccordion();
  }, []);
  const [bookingDetail, setbookingDetail] = useState({});

  return (
    <>
      <section className="banner-meetup">
        <div
          className="bg-pattern"
          style={{ backgroundImage: `url(${thehive_header})` }}
        />
        <div className="layer-outer">
          <div className="gradient-layer" />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <div className="address">Welcome to</div>
            <h2>
              <font color="#ed6c11">THE HIVE:</font>
              <font color="white"> OGBENI VILLA</font>
            </h2>
          </div>
          {/* <div className="btn-box">
           {/* #reserve 
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9tp_xEJnKY2yitoCzRp7t6oj9yKF_Y2M6uzQ7nvoFzu6GHw/viewform" className="theme-btn btn-style-two"><span className="btn-title">Reserve Now</span></a>
          </div> */}
          <div className="btn-box">
            <button
              data-toggle="modal"
              data-target="#optinForm"
              className="theme-btn btn-style-two"
            >
              <span className="btn-title">
                For Enquiry, inspection or reservation, click here to fill the
                form
              </span>
            </button>
          </div>
          <div>
            <a
              href="tel:+2348024421356 "
              className="call-enquiry call-link-two"
              style={{ fontSize: "25px" }}
            >
              <h3 className="text-center call-link-one">
                {" "}
                OR CLICK HERE TO CALL +2348024421356
              </h3>
            </a>
          </div>
        </div>
      </section>

      <section id="2box " className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="boxes p-5">
                <h5>
                  Make up to 15% Annual Rental Income from these luxury
                  residential apartments, townhouses and villas in the
                  fastest-growing industrial upspring in Nigeria.
                </h5>
              </div>
              {/* /.boxes */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <div className="boxes p-5">
                <h5>
                  For Build-To-Live-In Owners or Investors who wish to be
                  landlords of the thousands of workers within the Dangote
                  Refinery and the Lekki Free Trade Zone industrial boom.
                </h5>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
        </div>
      </section>

      <section className="vid-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 vid-con">
              {/* <video src="upload/the-Hive -Animation.mp4" class="fernvid" id="fernd" controls autoplay width="100%"
              height="auto"></video> */}
              <video
                controls
                autoPlay
                className="fernvid"
                id="fernd"
                width="100%"
                height="auto"
              >
                <source
                  src="assets/upload/the-Hive -Animation.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-two">
        <div className="anim-icons full-width">
          <span
            className="icon icon-circle-blue wow fadeIn animated"
            style={{ visibility: "visible", animationName: "fa-spin" }}
          />
          <span
            className="icon icon-dots wow fadeInleft animated"
            style={{ visibility: "visible" }}
          />
          <span
            className="icon icon-circle-1 wow zoomIn animated"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">DEVELOPING</span>
                  <h2>
                    {" "}
                    Description of Estate, location and proximity to available
                    landmarks/development
                  </h2>
                  <div className="text">
                    The Hive is a close-knitted luxury residential environment
                    visualized to combine lifestyle, beauty and an eco-friendly
                    ambiance for homeowners and residents. This location is
                    targeted for either build to live-in or for investors who
                    would like to be landlords to the expatriate and workers of
                    the close-by industries like Dangote Refinery, Lekki Free
                    Trade Zone, Seaport, and others.
                    <p>
                      It is located in Akodo, along the LFTZ road, Ibeju-Lekki,
                      Lagos. It's within 2 minutes drive to the Lekki Free Trade
                      Zone. Other major developments in the neighborhood include
                      the Dangote Refinery, The Lekki Seaport, and many others.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <h4>
                        <span className="icon fa fa-file" /> Title
                      </h4>
                      <div className="text">Gazette</div>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <h4>
                        <span className="icon fa fa-map-marker-alt" />
                        Location
                      </h4>
                      <div className="text">Akodo, Ibeju-Lekki</div>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <button
                    data-toggle="modal"
                    data-target="#optinForm"
                    className="theme-btn btn-style-three"
                  >
                    <span className="btn-title">Book Reservation</span>
                  </button>
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
                  <img src={Elevation1} alt="Overview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section className="features-section-three no-pd-top">
          <div className="auto-container">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>USP: </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Feature Block */}
              <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                <ul className="list-style-one">
                  <li> Potential market for rentals within the axis</li>
                  <ul>
                    <li>
                      {" "}
                      <i
                        className="fa fa-arrow-right"
                        aria-hidden="true"
                        style={{ color: "#4C046E" }}
                      />{" "}
                      Number of existing workers: 30,000{" "}
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-right"
                        aria-hidden="true"
                        style={{ color: "#4C046E" }}
                      />{" "}
                      Projected number of workers in 5 years: &gt;200,000{" "}
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-right"
                        aria-hidden="true"
                        style={{ color: "#4C046E" }}
                      />{" "}
                      Projected number of workers in 10 years: &gt;800,000{" "}
                    </li>
                  </ul>
                  <li>
                    {" "}
                    Projected rate of property value appreciation in 5 years:
                    30-150%{" "}
                  </li>
                  <li>
                    {" "}
                    Projected rate of property value appreciation in 10 years:
                    200-300%
                  </li>
                  <li>Instant Allocation </li>
                  <li> Home owner and resident in the Free Zone axis. </li>
                  <li>Become Landlords to industry workers</li>
                  <li>Rental Income up to 12% per annum</li>
                  <li>Authenticated Ownership</li>
                </ul>
              </div>
              {/* Feature Block */}
              <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                <ul className="list-style-one">
                  <li>Perfect Title: Gazetted</li>
                  <li>No Encumbrance</li>
                  <li>No extra charges, No hidden charges</li>
                  <li>About 2 minutes drive to Lekki Free Trade Zone</li>
                  <li> About 3 minutes drive to Dangote refinery</li>
                  <li>Right opposite the proposed LFTZ coastal road</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="fluid-section-one">
        <div className="outer-box clearfix">
          {/* Content Column */}
          <div
            className="content-column style-two"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="inner-column">
              <h3>Land Information</h3>
              <div className="text">Title: Gazette</div>
              <h4>
                <span className="icon fa fa-map" /> Gazette Number:{" "}
              </h4>
              <div className="text">
                Gazette Number: No.38 Vol.27, 27th Oct. 1994
              </div>
              {/* <h4><span class="icon fa fa-arrows-alt"></span> Approved Layout Status:</h4>
            <div class="text"> Processing</div> */}
            </div>
          </div>
          {/* Image Column */}
          <div
            className="image-column"
            style={{ backgroundImage: `url(${map})` }}
          >
            <div className="image-box">
              <figure className="image">
                <img src={map} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={map1} className="img-fluid" alt="" />
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <img src={map2} className="img-fluid" alt="" />
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section
        className="affiliate-section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="auto-container">
          <div className="content-column">
            <div className="inner-column">
              <div className="sec-title">
                <div className="text">
                  Packages available, amenity, terms and prices
                </div>
                <h2>BUILDING</h2>
              </div>
              <div className="row">
                {/* Bullet Listing Column */}
                <div className="affiliate-block col-lg-6 col-md-12">
                  <ul className="list-style-one">
                    <li>Open Area</li>
                    <li>Gatehouse</li>
                    <li>Fencing</li>
                    <li>Tarred Road</li>
                    <li>Estate School</li>
                    <li>Health facility</li>
                  </ul>
                </div>
                {/* Bullet Listing Column */}
                <div className="affiliate-block col-lg-6 col-md-12">
                  <ul className="list-style-one">
                    <li>Sport center</li>
                    <li>Relaxation/Recreational facilities</li>
                    <li>Drainage System</li>
                    <li>Waterworks</li>
                    <li>Electricity</li>
                    <li>Survey + Documentation</li>
                    <li>Project delivery period: 24 months.</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="container">
                  <div className="text-center">
                    <div className="btn-box">
                      <button
                        data-toggle="modal"
                        data-target="#optinForm"
                        className="theme-btn btn-style-four"
                      >
                        <span className="btn-title">Reserve Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subplan-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>THE HIVE: OGBENI VILLA</h2>
          </div>
          <div className="outer-box">
            <div className="row justify-content-between">
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">4 bedrooms</h4>
                    <h6>
                      Fully Detached, Box Duplexes, Exterior and
                      InteriorFinished.
                    </h6>
                  </div>
                  <div>
                    <img src={Elevation1} className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true">Available No of Units: 17</li> */}
                    <li className="true">Minimum of 3 parking space</li>
                    <li className="true">Annual Rental income: 7% </li>
                    <li className="true">Outright payment: N36m</li>
                    <li className="true">Price For Installment: N38m</li>
                    <li>Initial Deposit: N15m</li>
                    <li className="true">Payment Plan: N2m monthly</li>
                    <li className="true">Payment Duration: 12 months</li>
                  </ul>
                  <h6 className="pl-3">Other Fee:</h6>
                  <ul className="features">
                    <li className="true"> Survey= N400,000 </li>
                    <li className="true">Legal Fee= 5% of Property Price</li>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">4 bedrooms</h4>
                    <h6>Terrace Duplexes, Exterior and Interior Finished.</h6>
                  </div>
                  <div>
                    <img src={card_2} className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true">Available No of Units: 30</li> */}
                    <li className="true">Minimum of 2 parking space</li>
                    <li className="true">Annual Rental Income: 6.7%</li>
                    <li className="true">Outright payment: N30m</li>
                    <li className="true">Price For Installment: N32m</li>
                    <li>Initial Deposit: N10m</li>
                    <li className="true">Payment Plan: N1.7m monthly</li>
                    <li className="true">Payment Duration: 12 months</li>
                  </ul>
                  <h6 className="pl-3">Other Fee:</h6>
                  <ul className="features">
                    <li className="true"> Survey= N400,000 </li>
                    <li className="true"> Legal Fee= 5% of Property Price</li>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
            </div>
          </div>
        </div>
      </section>

      <section className="subplan-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>CONDOMINIUM: OGBENI VILLA</h2>
          </div>
          <div className="outer-box">
            <div className="row">
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">2 bedrooms flat</h4>
                  </div>
                  <div>
                    <img src={card_3} className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true">Available No of Units: 104</li> */}
                    <li className="true"> Annual Rental Income: 5.2%</li>
                    <li className="true">Outright payment: N11.5m</li>
                    <li className="true"> Price For Installment: N12.5m </li>
                    <li className="true"> Initial Deposit: N5m </li>
                    <li className="true"> Payment Plan: N625,000 monthly </li>
                    <li className="true"> Payment Duration: 12 months</li>
                  </ul>
                  <h6 className="pl-3">Other Fee:</h6>
                  <ul className="features">
                    <li className="true">Survey= N400,000 </li>
                    <li className="true"> Legal Fee= 5% of Property Price</li>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">Miniflat</h4>
                  </div>
                  <div>
                    <img src={card_4} className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true">Available No of Units: 104</li> */}
                    <li className="true"> Annual Rental income: 5% </li>
                    <li className="true"> Outright payment: N8m </li>
                    <li className="true"> Price For Installment: N9m </li>
                    <li className="true"> Initial Deposit: N3m </li>
                    <li className="tru">Payment Plan: N500,000 monthly</li>
                    <li className="true"> Payment Duration: 12 months </li>
                  </ul>
                  <h6 className="pl-3">Other Fee:</h6>
                  <ul className="features">
                    <li className="true">Survey= N400,000 </li>
                    <li className="true"> Legal Fee= 5% of Property Price</li>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">Studio apartment</h4>
                  </div>
                  <div>
                    <img src={card_4} className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true">Available No of Units: 54</li> */}
                    <li className="true"> Annual Rental Income: 4.5% </li>
                    <li className="true">Outright payment: N5.5m</li>
                    <li className="true"> Price For Installment:N6.5m </li>
                    <li className="true"> Initial Deposit: N2.5m </li>
                    <li className="true">Payment Plan: N375,000 monthly</li>
                    <li className="true"> Payment Duration: 12 months. </li>
                  </ul>
                  <h6 className="pl-3">Other Fee:</h6>
                  <ul className="features">
                    <li className="true"> Survey= N400,000 </li>
                    <li className="true"> Legal Fee= 5% of Property Price</li>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
            </div>
          </div>
        </div>
      </section>

      <section className="subplan-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>LAND</h2>
          </div>
          <div className="outer-box">
            <div className="row justify-content-between">
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">
                      Non-Serviced Plots (OGBENI VILLA)
                    </h4>
                  </div>
                  <div>
                    <img src={card_5} className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true"> Available No of Units: 30 </li> */}
                    <li className="true">Motorable Earth Road</li>
                    <li className="true"> Fence and gate-house </li>
                    <li className="true">Size: 450sqm</li>
                    <li className="true"> Outright payment: N6m </li>
                    <li className="true">Price For Installment:N6.5m</li>
                    <li className="true"> Initial Deposit:N3m </li>
                    <li className="true"> Payment Plan: N300,000 monthly</li>
                    <li className="true"> Payment Duration: 12 months </li>
                    <h6 className>Other Fee:</h6>
                    <ul className="features">
                      <li className="true"> Survey= N400,000 </li>
                      <li className="true"> Legal Fee= 5% of Property Price</li>
                    </ul>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">
                      {" "}
                      Serviced Plots (The Hive: OGBENI VILLA){" "}
                    </h4>
                  </div>
                  <div>
                    <img src="" className="img-fluid my-2" alt="" />
                  </div>
                  <ul className="features ">
                    {/* <li class="true">Available No of Units: 30 </li> */}
                    <li className="true">Open Area</li>
                    <li className="true">Gatehouse</li>
                    <li className="true"> Fencing</li>
                    <li className="true">Tarred Road</li>
                    <li className="true">Drainage System</li>
                    <li className="true">Waterworks</li>
                    <li className="true">Electricity</li>
                    <li className="true"> Recreational facilities </li>
                    <li className="true"> Size: 450sqm </li>
                    <li className="true"> Outright payment: N10m </li>
                    <li className="true">Price For Installment:N11m</li>
                    <li className="true">Initial Deposit:N5m </li>
                    <li className="true"> Payment Plan: N500,000 monthly</li>
                    <li className="true"> Payment Duration: 12 months </li>
                    <h6 className="pl-3">Other Fee:</h6>
                    <ul className="features">
                      <li className="true"> Survey= N400,000 </li>
                      <li className="true"> Legal Fee= 5% of Property Price</li>
                    </ul>
                  </ul>
                </div>
              </div>
              {/* subplan Block */}
            </div>
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="anim-icons">
          <span
            className="icon icon-circle-4 wow zoomIn animated"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
          <span
            className="icon icon-circle-3 wow zoomIn animated"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title">PROCESS TO BUY OUR ESTATE,</span>
            <h2>Own Property in TheHive</h2>
          </div>
          <div className="schedule-tabs tabs-box">
            <div className="tabs-content">
              {/*Tab*/}
              <div className="tab active-tab" id="tab-1">
                <div className="schedule-timeline">
                  {/* schedule Block */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          1ST <br /> STEP
                        </div>
                        <div className="text">Reserve your slot</div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          2ND <br /> STEP
                        </div>
                        <div className="text">
                          Receive your invoice within 24hours after form
                          submission. If not received, please send a follow-up
                          mail to hello.florahomesgc@gmail.com to confirm plot
                          availability.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          3RD <br /> STEP
                        </div>
                        <div className="text">
                          {" "}
                          Make Payment according to your chosen payment plan{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          4TH <br /> STEP
                        </div>
                        <div className="text">
                          For installment payment: Receipt, Contract of Sale,
                          and Provisional Allocation Letter.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          5TH <br /> STEP
                        </div>
                        <div className="text">
                          For Full payment, Deed of Assignments, Receipt,
                          Allocation Letter
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          6TH <br /> STEP
                        </div>
                        <div className="text">
                          For house: Get handover of keys and Documents after a
                          maximum of 12 months of full payment.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title text-center">
            <span className="title">FAQ'S</span>
            <h2>What Others Are Asking</h2>
          </div>
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/*Accordian Box*/}
                <ul className="accordion-box">
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>{" "}
                      Where is THE HIVE: OGBENI VILLA Located?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          It is located in Akodo, at about 3 minutes drive to
                          the Dangote Refinery, Ibeju-Lekki.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>{" "}
                      What kind of property is on The HIVE
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          <ul>
                            <li>Land</li>
                            <li>Building – 4 bedroom fully detached duplex</li>
                            <li>Building – 4 bedrooms terrace duplex</li>
                            <li>Building- 2bedrooms apartment</li>
                            <li>Building- Miniflat</li>
                            <li>Building- Studio Apartment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      What Infrastructure will the Developer Provide?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Secured community, good road network, drainage system,
                          electricity, recreational facilities and many more.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>{" "}
                      : Does Your Company Do Design &amp; Building Construction?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Yes. To engage our Design-Build and Manage Service,
                          talk to our customer care.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block active-block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn active">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>{" "}
                      What is the Land Title?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          Gazette which allows you to process your governor's
                          consent immediately
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      Is the Estate Location Already Habitable for Those Who
                      Want to Build Immediately?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          {" "}
                          All the area is already habitable.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>{" "}
                      How Much are The Properties?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          {" "}
                          Please refer to the price chart above.{" "}
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block active-block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn active">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      Who is the Developer?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          {" "}
                          The developer is FloraHomes Global Consult Limited.
                          Oﬃce address is at 32, East Lake Drive, Adiva
                          Plainﬁelds, inside Beechwood Estate, Ibeju-Lekki.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/*Accordian Box*/}
                <ul className="accordion-box">
                  {/*Block*/}
                  <li
                    className="accordion block active-block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn active">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      Can My Property Be Resold?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          Yes. But a written notice of transfer should be given
                          to FloraHomes Global Consult Limited.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      Can I Pay to Your Consultant / Marketer?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          NO! All payments must be made only to our company
                          official account.
                          <br />
                          <ul>
                            <li>
                              Acc name:<b>FloraHomes Global Consult Ltd</b>
                            </li>
                            <li>
                              {" "}
                              <b> </b>○ Sterling Bank Plc.
                            </li>
                            <li>
                              i. Investment Funds: <b> 0501420184</b>
                            </li>
                            <li>
                              ii. Property Sales: <b> 0501420146</b>
                            </li>
                            <li>
                              iii. Other Company Service:<b> 0501420218</b>
                            </li>
                            <li>
                              iv. Dollar:<b>0501467363 </b>
                            </li>
                            <li>
                              {" "}
                              <b>Bank name: </b>GT bank
                            </li>
                            <li>
                              i. Naira: <b>0449454858 </b>
                            </li>
                            <li>
                              ii. Dollar:<b>0449454865 </b>
                            </li>
                            <li>
                              iii. Pound:<b>0512841941 </b>
                            </li>
                            <li>
                              iv. Euro:<b>0512841800 </b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>{" "}
                      Can I Do Installment Payment?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Yes, please refer to the price chart above.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      What documents will I get?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          <ul>
                            <li>
                              {" "}
                              For installment payment: Receipt, Contract of
                              Sale, and Provisional Allocation Letter.{" "}
                            </li>
                            <li>
                              {" "}
                              For Full payment, Deed of Assignments, Receipt,
                              Allocation Letter{" "}
                            </li>
                            <li>
                              For house: Get handover of keys and Documents
                              after a maximum of 12 months of full payment.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li
                    className="accordion block wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon icon-plus fa fa-angle-down" />{" "}
                      </div>
                      Are There Other Fees?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          {" "}
                          None. No extra fees other than what has been stated on
                          each of the property.{" "}
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="register-section" id="reserve">
        <div className="auto-container">
          <div className="anim-icons full-width">
            <span
              className="icon icon-circle-3 wow zoomIn animated animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            />
          </div>
          <div className="outer-box">
            <div className="row no-gutters align-items-center">
              <div className="title-column col-lg-4 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="sec-title light">
                    <div className="icon-box">
                      {/* <span className="icon flaticon-rocket-ship" /> */}
                      <figure>
                        <img
                          style={{ objectFit: "contain", width: "100px" }}
                          src={rocket}
                          alt=""
                        />
                      </figure>
                    </div>
                    <span className="title">Few Plots Remaining...</span>
                    <h2>Reserve Now!!!</h2>
                    <div className="text">
                      Fill and Submit the form to reserve plot(s) of land or
                      building.
                    </div>
                  </div>
                </div>
              </div>
              {/*Register Form*/}
              <div className="register-form col-lg-8 col-md-6 col-sm-12">
                {/* <div className="form-inner text-center">
                  <div className="card border border-0" style={{marginTop: '10%'}}>
                    <a className="theme-btn btn-style-one" style={{padding: '30px', fontSize: '23px'}} href="https://docs.google.com/forms/d/e/1FAIpQLSe9tp_xEJnKY2yitoCzRp7t6oj9yKF_Y2M6uzQ7nvoFzu6GHw/viewform">
                      <span className="btn-title">Reserve </span> </a>
                  </div>
                  <div class="btn-box ml-3"></div>
                </div> */}

                <div className="form-inner text-center">
                  <Optin_Trigger />
                  <a
                    href="tel:+2348024421356 "
                    className="call-enquiry call-link-three"
                    style={{ fontSize: "25px" }}
                  >
                    {" "}
                    OR CLICK HERE TO CALL +2348024421356{" "}
                  </a>
                  {/* <div class="btn-box ml-3"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PaymentDetails />
      <OptinModal
        bookingDetail={bookingDetail}
        setbookingDetail={setbookingDetail}
        componentId="optinForm"
        title="PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED"
        component={<OptinForm />}
      />
      {/* <Footer/> */}
    </>
  );
};

export default TheHive;
