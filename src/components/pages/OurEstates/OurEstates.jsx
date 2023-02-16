import React from "react";

import estate_header from "../../assets/flora_header.jpg";
import thehive_header from "../../assets/thehive-header.jpg";
import fern_i1 from "../../assets/fern_i1.jpg";
import floracity_2 from "../../assets/floracity_2.jpg";
import Footer from "../../layouts/Footer";

const OurEstates = () => {
  return (
    <>
      <section
        className="page-title"
        style={{
          backgroundImage: `url(${estate_header})`,
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <h1>Our Estates</h1>
          <ul className="bread-crumb clearfix">
            {/* <li><a href="index.php">Home</a></li>
          <li>About Us</li> */}
          </ul>
        </div>
      </section>

      <section className="news-section alternate">
        <div className="auto-container">
          <div className="row">
            {/* Products Block Three */}
            <div
              className="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="inner-box h-100">
                <div className="image-box">
                  <figure className>
                    <a href="/floracity-ecopolis">
                      <img src={floracity_2} alt="" />
                    </a>
                  </figure>
                </div>
                <div className="lower-content h-100">
                  <h4>
                    <a href="/floracity-ecopolis"> FloraCity Ecopolis</a>
                  </h4>
                  <p>
                    The FloraCity is a luxury residential estate conceptualized
                    to provide homeliness, technology, energy efficiency, class,
                    executive security, recreation, daily needs, and social
                    lives enhanced by community living in a natural ambiance for
                    its occupants.
                  </p>
                  <div className="btn-box">
                    <a href="/floracity-ecopolis" className="read-more">
                      View Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Products Block Three */}
            <div
              className="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="inner-box h-100">
                <div className="image-box">
                  <figure className>
                    <a href="/the-hive">
                      <img src={thehive_header} alt="" />
                    </a>
                  </figure>
                </div>
                <div className="lower-content h-100">
                  <h4>
                    <a href="/the-hive">The Hive</a>
                  </h4>
                  <p>
                    Make up to 12% Annual Rental Income from these luxury
                    residential apartments, townhouses and villas in the
                    fastest-growing industrial upspring in Nigeria.
                  </p>
                  <div className="btn-box">
                    <a href="/the-hive" className="read-more">
                      View Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Products Block Three */}
            <div
              className="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="inner-box h-100">
                <div className="image-box">
                  <figure className>
                    <a href="/fern-island">
                      <img src={fern_i1} alt="" />
                    </a>
                  </figure>
                </div>
                <div className="lower-content h-100">
                  <h4>
                    <a href="/fern-island"> The Fern Island</a>
                  </h4>
                  <p>
                    The Fern Island is an unmatched residential environment
                    visualized to combine a super luxury lifestyle and an
                    Eco-friendly ambiance for home owners and residents. It is
                    strategically located about 4 minutes drive off the
                    Lekki-Epe expressway, ibeju-lekki.
                  </p>
                  <div className="btn-box">
                    <a href="/fern-island" className="read-more">
                      View Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurEstates;
