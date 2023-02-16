/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";

import FloraImgBox from "./FloraImgBox";
import thefernisland_features from "../../assets/thefernisland-features.png";
// import FloracityCarousel from './FloracityCarousel';
import flora_header from "../../assets/flora_header.jpg";
import fern_buiding from "../../assets/fern-building.jpg";
import plot2 from "../../assets/plotimg2.jpg";
import background from "../../assets/background.jpg";
import rocket from "../../assets/rocket.svg";

import handleAccordion from ".";
import Optin_Trigger from "./Optin_Trigger";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import OptinModal from "../../SharedComponents/OptinModal";
import OptinForm from "../../SharedComponents/OptinForm";
// import Footer from "../../layouts/Footer";

const Floracity = () => {
  useEffect(() => {
    handleAccordion();
  }, []);
  const [bookingDetail, setbookingDetail] = useState({});
  return (
    <>
      <section className="banner-meetup">
        <div
          className="bg-pattern"
          style={{ backgroundImage: `url(${flora_header})` }}
        />
        <div className="layer-outer">
          <div className="gradient-layer" />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <div className="address">
              <span className="icon fa fa-map-marker-alt" />
              Make an abode @
            </div>
            <h2>
              <font color="#ed6c11">The</font>
              <font color="white">Flora City</font>
            </h2>
          </div>
          {/* <div className="btn-box">
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
          {/* <h3 className="call-enquiry-first">Or call +2348024421356</h3> */}
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
                    Ultra-Modern Estate <br />
                    in the Heart of Ibeju-Lekki
                  </h2>
                  <div className="text">
                    The Fern Island is an unmatched residential environment
                    visualized to combine a super luxury lifestyle and an
                    Eco-friendly ambiance for home owners and residents. It is
                    strategically located about 4 minutes drive off the
                    Lekki-Epe expressway, ibeju-lekki.
                  </div>
                </div>
                <div className="row">
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <h4>
                        <span className="icon fa fa-file" /> Title
                      </h4>
                      <div className="text">Govt. Excision</div>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <h4>
                        <span className="icon fa fa-map-marker-alt" /> Area
                      </h4>
                      <div className="text">Oju-Agbe</div>
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
                  <img src={fern_buiding} alt="Overview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="outer-box clearfix"
        style={{ marginLeft: "12%", marginRight: "12%", marginBottom: "10%" }}
      >
        {/* Content Column */}
        <div
          className="content-column style-two"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="inner-column">
            <h3 className="text-white mt-4 mb-1 ml-3">Land Information</h3>
            <div className="text text-white ml-3 mb-3">
              The Layout plan covering Oju-Agbe village community Excision.
            </div>
            <h4 className="text-white ml-3 mb-1">
              <span className="icon fa fa-map" /> Plan Number
            </h4>
            <div className="text text-white ml-3 mb-3">LS/D/LA2934</div>
            <h4 className="text-white ml-3 mb-1">
              <span className="icon fa fa-arrows-alt" /> Coordinates
            </h4>
            <div className="text text-white ml-3 mb-3">
              599928.492 mE <br />
              716870.696 mN
            </div>
            <div className="btn-box ml-3">
              <button
                data-toggle="modal"
                data-target="#optinForm"
                className="theme-btn btn-style-four"
              >
                <span className="btn-title">Reserve Plot</span>
              </button>
            </div>
          </div>
        </div>
        {/* Image Column */}
        {/* <div class="image-column" style="background-image: url(assets/images/oju-agbe.jpg);">
					<div class="image-box">
						<figure class="image"><img src="assets/images/oju-agbe.jpg" alt=""></figure>
					</div>
				</div> */}
      </div>

      <section className="plot-pic-section">
        <div className="container">
          <div className="row">
            <div className="col mt-4">
              <figure className="image text-center">
                <img src={plot2} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="vid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="card border border-0 rounded-0 shadow">
                <h5
                  className="ml-4"
                  style={{ fontWeight: "bold", color: "#541484" }}
                >
                  LAND PRICE: NON-SERVICED PLOT
                </h5>
                <h6
                  className="ml-4"
                  style={{ fontSize: "18px", color: "#ed6c11" }}
                >
                  DEVELOPMENT
                </h6>
                <p className="ml-4">
                  Road Network
                  <br />
                  Fencing
                  <br />
                  Gatehouse
                  <br />
                  <br />
                  <br />
                </p>
                <p className="ml-4">
                  PROMO PRICE: N7500/sqm
                  <br />
                  NORMAL PRICE: N8000/sqm
                </p>
                <h6
                  className="ml-4"
                  style={{ fontSize: "18px", color: "#ed6c11" }}
                >
                  OTHER FEES
                </h6>
                <p className="ml-4">Survey: 450k</p>
                {/* <video src="upload/fernvideo.mp4" class="fernvid" id="fernd" controls width="100%" height="auto"></video> */}
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="card border border-0 rounded-0 shadow">
                <h5
                  className="ml-4"
                  style={{ fontWeight: "bold", color: "#541484" }}
                >
                  LAND PRICE: SERVICED PLOT
                </h5>
                <h6
                  className="ml-4"
                  style={{ fontSize: "18px", color: "#ed6c11" }}
                >
                  DEVELOPMENT
                </h6>
                <p className="ml-4">
                  All Non-Serviced Development
                  <br />
                  Tarred Road
                  <br />
                  Drainage
                  <br />
                  Electricity to the plot
                  <br />
                  Survey
                </p>
                <p className="ml-4">
                  PROMO PRICE: N13,000/sqm
                  <br />
                  NORMAL PRICE: N15,000/sqm
                </p>
                <h6
                  className="ml-4"
                  style={{ fontSize: "18px", color: "#ed6c11" }}
                >
                  OTHER FEES
                </h6>
                <p className="ml-4">NILL</p>
              </div>
            </div>
          </div>
          <div className="price-table">
            <div className="my-4">
              {/* <a href="https://drive.google.com/file/d/1XEmuvIUdT9FynvekkjaigOsYk20V8oEj/view" class="theme-btn btn-style-three"
            target="_blank"><span class="btn-title">CLICK HERE TO DOWNLOAD THE PRICE </span>  </a>
          </div> */}
              <a
                href="assets/Price_table_finsland.pdf"
                className="theme-btn btn-style-three"
                target="_blank"
              >
                <span className="btn-title">
                  CLICK HERE TO DOWNLOAD THE PRICE{" "}
                </span>
              </a>
            </div>
            {/* <div class="prce-img text-center">
            <img src="offer-table.jpg" class="img-fluid" alt="">
          </div> */}
          </div>
          {/* /.price-table */}
        </div>
      </section>

      <section
        className="galery-section-three"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title" id="gallery-carousel" />
            <h2 style={{ color: "#476c11" }}>
              <span style={{ color: "#ed6c11" }}>The</span> Fern Island
            </h2>
          </div>
          {/* <FloracityCarousel src={fern_i1} id=""/>
                  <FloracityCarousel src={fern_i1} id="1"/>
                  <FloracityCarousel src={fern_i1} id="2"/>
                  <FloracityCarousel src={fern_i1} id="3"/>
                  <FloracityCarousel src={fern_i1} id="4"/>
                  <FloracityCarousel src={fern_i1} id="5"/>
                  <FloracityCarousel src={fern_i1} id="6"/>
                  <FloracityCarousel src={fern_i1} id="7"/>
                  <FloracityCarousel src={fern_i10} id="10"/> */}

          {/* <div className="popup-container" id="popup-ext1">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i2.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext2">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i3.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext3">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i4.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext4">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i5.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext5">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i6.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext6">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i7.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext7">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i8.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext8">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i9.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>
                    <div className="popup-container" id="popup-ext9">
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer"><div className="owl-stage" /></div><div className="owl-nav disabled"><div className="owl-prev"><span className="arrow_carrot-left" /></div><div className="owl-next"><span className="arrow_carrot-right" /></div></div><div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src="assets/images/fern_i10.jpg" alt="florahomes_images" />
                            </figure>
                        </div>
                    </div> */}
          {/* <div className="sponsors-carousel owl-carousel owl-theme owl-loaded owl-drag"> */}
          {/* Client Block */}
          {/* <div class="fern-block">
                       <figure class="image-box"><a href="#"><img src="assets/images/fern_i1.jpg" alt="" class="ext-image"></a></figure>
                   </div> */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* Client Block */}
          {/* <div className="owl-stage-outer"> */}
          {/* <div className="owl-stage" style={{ transform: 'translate3d(-4875px, 0px, 0px)', transition: 'all 0s ease 0s', width: '7500px' }}> */}

          <FloraImgBox />
          {/* <FloraImgBox src={fern_i9} ext="9" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" />
                                <FloraImgBox src={fern_i10} ext="10" /> */}

          {/* <div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}>
                      <div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext7"><img src="assets/images/fern_i7.jpg" alt="" className="ext-image" /></a></figure>
                  </div>
                  
                  </div>    
                   
                  <div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}>
                      
                      <div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext7"><img src={fern_i1} alt="" className="ext-image" /></a></figure>
                  </div>
                  
                  </div> */}

          {/* <div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}>
                      
                      <div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext8"><img src="assets/images/fern_i9.jpg" alt="" className="ext-image" /></a></figure>
                  </div>
                  
                  </div>
                  
                  <div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}>
                      
                      <div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext9"><img src="assets/images/fern_i10.jpg" alt="" className="ext-image" /></a></figure>
                  </div>
                  
                  </div> */}

          {/* <div className="owl-item" style={{width: '345px', marginRight: '30px'}}>
                      
                      <div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext"><img src="assets/images/fern_i1.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext1"><img src="assets/images/fern_i2.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext2"><img src="assets/images/fern_i3.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext3"><img src="assets/images/fern_i4.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext4"><img src="assets/images/fern_i5.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext5"><img src="assets/images/fern_i6.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext6"><img src="assets/images/fern_i7.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext7"><img src="assets/images/fern_i8.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item active" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext8"><img src="assets/images/fern_i9.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext9"><img src="assets/images/fern_i10.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext"><img src="assets/images/fern_i1.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext1"><img src="assets/images/fern_i2.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext2"><img src="assets/images/fern_i3.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext3"><img src="assets/images/fern_i4.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div><div className="owl-item cloned" style={{width: '345px', marginRight: '30px'}}><div className="fern-block">
                    <figure className="image-box"><a href="#popup-ext4"><img src="assets/images/fern_i5.jpg" alt="" className="ext-image" /></a></figure>
                  </div></div> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="owl-nav"><div className="owl-prev"><span className="la la-angle-left" /></div>
                            <div className="owl-next"><span className="la la-angle-right" />
                            </div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot"><span />
                            </div>
                            <div className="owl-dot"><span /> */}
          {/* </div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div> */}
        </div>
      </section>

      <section className="features-section-three no-pd-top">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">FEATURES</span>
                  <h2>Why Buy Property in The Fern Island?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li>Government Excised land with Approved layout.</li>
                <li>
                  Property is located in the fastest developing neighborhood in
                  the whole of West Africa.
                </li>
                <li>
                  Covers a land area of over 10 acres within Oju-Agbe village
                  excision.
                </li>
                <li>Serene environment with maximum security.</li>
              </ul>
            </div>
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li>Close to Dangote Refinery and Lekki Free trade zone.</li>
                <li>Proximity to main road (Lekki Epe Express Road).</li>
                <li>
                  A potential recreation site with water front view for
                  residents.
                </li>
                <li>
                  FREE architectural 3D designs with the complete working
                  drawing worth N1m for Outright Subscribers engaging our
                  Design, Build and Manage service.
                </li>
              </ul>
            </div>
          </div>
          {/* Image Block */}
          <div className="gallery-item">
            <div className="image-box">
              <figure className="image">
                <img
                  src={thefernisland_features}
                  alt="TheFernIsland Neighborhood"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-three no-pd-top">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Estate USP:</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li> Clean Ownership</li>
                <li> Perfect Title: Gazetted</li>
                <li> Government Approved Layout</li>
                <li>No Encumbrance</li>
                <li> Drainage System against flooding</li>
                <li>
                  Processing and delivering of title for individual buyers
                </li>
                <li>All documentation done</li>
                <li>Electricity</li>
                <li>Fenced &amp; Gated Estate</li>
              </ul>
            </div>
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li> Drainage system.</li>
                <li> No extra charges, No hidden charges.</li>
                <li>
                  {" "}
                  Located beside a natural water body that flows into the
                  lagoon.
                </li>
                <li> About 3 minutes drive to Lekki Free Trade Zone.</li>
                <li> About 5 minutes drive to Dangote refinery.</li>
                <li>
                  It's right beside the proposed regional highway that link
                  Lekki Epe Express straight to LFTZ.
                </li>
                <li> About 3 minutes drive from the Lekki-Epe Express.</li>
                <li>Shares boundary with the Labour City.</li>
                <li>
                  {" "}
                  Also has a proposed road going to link the refinery/ seaport
                  road.
                </li>
              </ul>
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
            <h2>Own Property in TheFernIsland</h2>
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
                        <div className="text">
                          Reserve your slot and Book for either online recorded
                          inspection or offline physical inspection.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  {/* 							<div class="schedule-block even">
								<div class="inner-box">
									<div class="inner">
										<div class="date">2ND <br> STEP</div>

										<div class="text">Conduct Search on the property
										</div>
									</div>
								</div>
							</div> */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          2ND <br /> STEP
                        </div>
                        <div className="text">
                          Receive your invoice within 24 hours after form
                          submission. If not received, please send a follow up
                          mail to hello.florahomesgc@gmail.com to confirm plot
                          availability.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  {/* 							<div class="schedule-block">
								<div class="inner-box">
									<div class="inner">
										<div class="date">3RD <br> STEP</div>

										<div class="text">Obtain our subscription form, T&C and Developmental Guide</div>
									</div>
								</div>
							</div> */}
                  {/* schedule Block */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          3RD <br /> STEP
                        </div>
                        <div className="text">
                          Pay for reserved property according to your chosen
                          Payment Plan above.
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
                          For instalmental payment, receive Receipt, Contract of
                          Sales and Provisional Allocation Letter.
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
                          For Full payment, receive Deed of Assignments, Survey,
                          Receipt, Allocation Letter
                          {/* ,Governor's Consent in the Client's name... Within 3 months of payment. */}
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
                          For house, handover of keys and Documents after a
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
                      </div>
                      Where is The Fern Island located?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          It is located in Oju-Agbe, Ibeju-Lekki Lekki Epe
                          expressway and shares a neighborhood with Lekki Free
                          Trade Zone, Dangote Refinery, Eleganza industrial
                          city, PAN Africa University etc.
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
                      What is the Land Title?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Oju-Agbe Village Excision. The land is confirmed to be
                          free from government acquisition.
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
                      What kind of property is on The Fern Island?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          <ul>
                            <li>Land – land of various sizes.</li>
                            <li>Building -</li>
                            <ol>
                              <li>
                                4 Bedroom Semi-Detached duplex (with exterior
                                finishing)
                              </li>
                              <li>
                                5 Bedroom fully-Detached duplex with BQ and a
                                standard swimming pool.
                              </li>
                            </ol>
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
                      Who is the Developer?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          The developer is FloraHomes Global Consult Limited.{" "}
                          <br />
                          Office: 32, East Lake Drive, Adiva Plainfield,
                          Beechwood Estate, Ibeju-Lekki.
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
                      Is the Estate's location already Habitable?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          All area is already habitable for those who want to
                          build immediately.
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
                      Is it really an Island like Banana Island?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          No. Though it has great potential to surpass Banana
                          Island. <br /> The natural water body runs by the side
                          of the subject parcel.
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
                      How much are the properties?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          {" "}
                          <a href="https://drive.google.com/file/d/1XEmuvIUdT9FynvekkjaigOsYk20V8oEj/view">
                            CLICK HERE TO DOWNLOAD
                          </a>
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
                      Can I Make installment payments?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          Yes,{" "}
                          <a href="https://drive.google.com/file/d/1XEmuvIUdT9FynvekkjaigOsYk20V8oEj/view">
                            CLICK HERE TO DOWNLOAD
                          </a>
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
                      Can I pay to your Consultant/Marketer?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          No. All payment must be made only to{" "}
                          <b>FloraHomes Global Consult Limited</b> account.
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
                      </div>
                      What do I get after making payment for Land?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          For installment payment, Receipt, Contract of Sale and
                          Provisional Allocation Letter.
                          <br />
                          For Full payment, Deed of Assignments, Survey,
                          Receipt, Allocation Letter.
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
                      Are ther Other fees?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">None. No extra fees.</div>
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
                      Can I resell my property?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Yes. But a written Notice of Transfer should be given
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
                      If I'm Unable to Balance Payment Can I Get a Refund?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Yes. But a minimum of 2 months notice in writing must
                          be sent to us. <br />{" "}
                          <b>NB: Refund attracts 20% administrative charge.</b>
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
            <div className="row no-gutters">
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
                    <br />
                  </div>
                </div>
              </div>
              {/*Register Form*/}
              <div className="register-form col-lg-8 col-md-6 col-sm-12">
                {/* <div className="form-inner text-center">
                  <div className="card border border-0" style={{ marginTop: '10%' }}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9tp_xEJnKY2yitoCzRp7t6oj9yKF_Y2M6uzQ7nvoFzu6GHw/viewform" className="theme-btn btn-style-four"><span className="btn-title" style={{ fontSize: '28px', fontWeight: 'bold' }}><br /><br />CLICK HERE TO RESERVE<br /><br /><br /></span></a>
                  </div>
                  {/* <div class="btn-box ml-3"></div>
                </div> */}
                <div className="form-inner text-center">
                  <Optin_Trigger />
                  {/* <h3 className="call-enquiry">Or call +2348024421356</h3> */}
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
        header="PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED"
        component={<OptinForm />}
      />
      {/* <Footer/> */}
    </>
  );
};

export default Floracity;
