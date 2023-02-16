import React from "react";

import advisory from "../../assets/productAssets/advisory.jpg";
import cpbs from "../../assets/productAssets/cpbs.png";
import hsn from "../../assets/hsn-book.png";
import fern from "../../assets/productAssets/fern.jpg";
import smp from "../../assets/productAssets/smp.jpg";
import verification from "../../assets/productAssets/veri_serv.png";
import blp from "../../assets/productAssets/blp.jpg";
import investment from "../../assets/productAssets/investment.jpg";
import workers from "../../assets/workers.jpg";

import "../../../css/Product.css";
import { Link } from "react-router-dom";
import Con2 from "../Home/Con2";
import Footer from "../../layouts/Footer";

const Product = () => {
  return (
    <>
      <div>
        <section className="page-title">
          <div className="auto-container">
            <h1>Our Products</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="news-section alternate">
          <div className="auto-container">
            <div className="row">
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/verification">
                        <img src={verification} alt="verification" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/verification">Verification Services</Link>
                    </h4>
                    <p>
                      {" "}
                      Due to the prevalence of demolition, eviction, dispute and
                      scam issues relating to landed properties, we set out to
                      help individuals and corporate investors to verify and
                      clear their subject of interest either before paying for
                      the new found property or for already existing property
                      against government acquisition...
                    </p>
                    <Link className="custom-btn btn btn-lg" to="/verification">
                      View Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/cpbs">
                        <img src={cpbs} alt="service" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/cpbs"> Complete Property Buyer Service</Link>
                    </h4>
                    <p>
                      Our property acquisition team is always available and
                      ready to help prospective property buyers handle their
                      property purchase from start to finish at 100%
                      done-for-you either land or building, within Estate or
                      with Omo-Onile, for individual or corporate large expanse
                      across Nigeria...
                    </p>
                    <Link to="/cpbs" className="custom-btn btn btn-lg">
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/our-estate">
                        <img src={fern} alt="our-estate" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/our-estate">Our Estate</Link>
                    </h4>
                    <p>
                      With our experienced and ethically groomed team of
                      property professionals, we pride ourselves at delivering a
                      community based, green, smart, verified, authenticated and
                      government approved/approvable planned out land parcels
                      and homes in our own bonafide estates...
                    </p>
                    <Link to="/our-estate" className="custom-btn btn btn-lg">
                      View Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="#">
                        <img src={workers} alt="Design,Build and Manage" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="#">Design, Build & Manage</Link>
                    </h4>
                    <p>
                      Our construction team that consist of Architects, Civil
                      Engineers, Townplanners, Quantity Surveyors, Land
                      Surveyors, Estate Surveyors etc and is always ready to
                      help prospective property developers to handle their
                      property development project from start to finish either
                      for individual residence, multi-family condo, estates or
                      city development across different states in Nigeria...
                    </p>
                    <Link to="#" className="custom-btn btn btn-lg">
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/book/re-inv-wo-tears">
                        <img src={hsn} alt="books" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/book/re-inv-wo-tears">Books</Link>
                    </h4>
                    <p>
                      The Time-Tested Information to Making ZERO MISTAKE When
                      Buying Real Estate Anywhere In Nigeria and EXACTLY what
                      you need to do to build huge wealth in real estate. These
                      books include the exact things you must do to make a
                      stress-free, wahala-free, argument-free, and court
                      case-free profitable property investment deal.
                    </p>
                    <Link
                      to="/book/re-inv-wo-tears"
                      className="custom-btn btn btn-lg"
                    >
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/professional-advisory">
                        <img src={advisory} alt="advisory" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/professional-advisory">
                        Professional Advisory
                      </Link>
                    </h4>
                    <p>
                      We offer both existing and aspiring real estate investors
                      the opportunity to get clarification, high quality
                      communication and experienced advice with our landed
                      property experts. We achieve this either through one on
                      one advisory or group training, both online and physical
                      offline. It is available for individuals, groups, clubs,
                      corporate, religious organizations, NGOs, etc
                    </p>
                    <Link
                      className="custom-btn btn btn-lg"
                      to="/professional-advisory"
                    >
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="#">
                        <img src={smp} alt="Sell my property" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="#"> Sell My Property</Link>
                    </h4>
                    <p>
                      We help individuals, groups, Omo-Onile, organizations to
                      sell their properties after having verified them free from
                      any issues, then these properties are recommended to our
                      waiting list of customers both in Nigeria and in diaspora.
                    </p>
                    <Link to="#" className="custom-btn btn btn-lg">
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/investments">
                        <img src={investment} alt="Investment Management" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/investments"> Investment Management</Link>
                    </h4>
                    <p>
                      This involves using investors' funds to finance land
                      sponsorship projects (clearing, sand filling,
                      documentation, road, bridges), Buying & Selling of lands,
                      flipping, renovating to sell or lease, building
                      development , selling of buildings, rentals. The company
                      fully executes the project 100% while sharing the profit
                      with the investors either in the form of land or cash
                      return. <br /> continuing reading…
                    </p>
                    <Link to="/investments" className="custom-btn btn btn-lg">
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/bulk-land-purchase">
                        <img src={blp} alt="bulk land purchase" />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <Link to="/bulk-land-purchase"> Bulk Land Purchase</Link>
                    </h4>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        FOR DEVELOPERS, ORGANISATIONS AND OTHER INDIVIDUALS
                        INTERESTED IN PURCHASING LARGE EXPANSE OF LAND.
                      </span>
                      Here, our company sell-off part of our land that we had
                      acquired through sponsorship projects, direct purchase,
                      partnership etc in order to serve the developer companies,
                      organisations and other individuals looking to purchase
                      large expanse of land either to be developed now or to be
                      fenced and speculated upon as a land banker. <br />{" "}
                      Continue reading...
                    </p>
                    <Link
                      to="/bulk-land-purchase"
                      className="custom-btn btn btn-lg"
                    >
                      View Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Con2 />
      </div>
      <Footer />
    </>
  );
};

export default Product;
