import React from "react";
import { Link } from "react-router-dom";

import blogheader from "../../../assets/blogheader.png";
import cardImg12 from "../../../assets/blog2.jpg";
import blog2_image from "../../../assets/blog2_image.jpg";
import CommentForm from "../Components/Comments/CommentForm";
import Comment from "../Components/Comments/Comment";
import Sidebar from "../Sidebar/Sidebar";
import WhoWeAre from "../Components/WhoWeAre";
import Disclaimer from "../Components/Disclaimer";
const KnowYourLandSize = () => {
  return (
    <>
      <>
        <section
          className="page-title"
          style={{ backgroundImage: `url(${blogheader})` }}
        >
          <div className="auto-container">
            <br />
            <br />
            <br />
            <h1>Blog Single</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog Single</li>
            </ul>
          </div>
        </section>
        {/*End Page Title*/}

        {/*Sidebar Page Container*/}
        <div className="sidebar-page-container">
          <div className="auto-container">
            <div className="row clearfix">
              {/*Content Side / Blog Sidebar*/}
              <div className="content-side col-lg-8 col-md-12 col-sm-12">
                <div className="blog-single">
                  {/* News Block Three */}
                  <div className="news-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src={cardImg12} alt="" />
                        </figure>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span className="far fa-user" />
                            FLORAHOMES GC
                          </li>
                          <li>
                            <span className="far fa-comments" /> Comments 7
                          </li>
                        </ul>
                        <h3 style={{ textAlign: "left", color: "black" }}>
                          <b>Know Your Land Size</b>
                        </h3>
                        <p style={{ color: "gray", textAlign: "left" }}>
                          by FlorahomesGC | Real Esate - Real Story
                        </p>
                        <p style={{ textAlign: "left" }}>
                          Posted On: May 20, 2019
                        </p>
                        <br />
                        <p style={{ color: "black", textAlign: "justify" }}>
                          Because "Size" is one of the main basis of negotiation
                          when it comes to land, you can be cheated easily
                          without knowing if you don't understand how it works.
                          <br />
                          Let's simplify the land size matter for you. It might
                          become one of your greatest assets in negotiating,
                          designing and in choosing the best property deals
                          whether now or in your future transactions.
                        </p>
                        <h2
                          style={{
                            textAlign: "left",
                            color: "black",
                            marginBottom: "5px",
                          }}
                        >
                          <b>What is a land plot?</b>
                        </h2>
                        <p style={{ color: "black", textAlign: "justify" }}>
                          A plot of land is just a marked out piece of land for
                          the purpose of building, farming, title transfer or
                          other land uses. It can be of any size. A very large
                          expanse of land that is cut out for an estate
                          construction can be referred to as plot, yet, the tiny
                          tiny division of the land within the large estate
                          expanse are also called plots.
                        </p>

                        <h2 style={{ textAlign: "left", color: "black" }}>
                          <b>
                            Different units of land used in Nigeria and How they
                            are related
                          </b>
                        </h2>
                        <br />
                        <img src={blog2_image} alt="" />
                        {/* <br /> */}
                        <ul>
                          <li>Square meters (sqm), </li>
                          <li> Meters by meters (mxm), </li>
                          <li>Feet by feet (ftxft), </li>
                          <li>Acres</li>
                          <li> Hectares.</li>
                        </ul>

                        <p style={{ color: "black", textAlign: "justify" }}>
                          How are they related and what are you supposed to look
                          out for?
                          <br />
                          <br />
                          1feet &gt;&gt; 0.305meters
                          <br />
                          60ftx120ft &gt;&gt; 18.3mx36.6m &gt;&gt; 669.78sqm
                          Sometimes approximated as 18m×36m &gt;&gt; 648sqm
                          <br />
                          <br />
                          50ftx100ft &gt; &gt; 15.25mx30.5m &gt; &gt; 465.13sqm
                          Sometimes approximated as &gt;&gt; 15mx30m &gt;&gt;
                          450sqm
                        </p>

                        <p style={{ color: "black", textAlign: "justify" }}>
                          Typically, a 450sqm of land will take 2 units of
                          standard 3 bedroom duplexes - built as semi detached,
                          with at least 3 car parking lots for each of the 2
                          apartments.
                          <br />
                          <br />
                          It's important to note that the actual size and the
                          approximate size are not the same. So you have to be
                          clear on the exact sizes they're selling to you.
                          <br />
                          <br />
                          This means that whenever you want to buy, you will
                          need to specifically ask for the square meters(sqm),
                          "meters by meters" or "feet by feet" of the parcel.
                          <br />
                          <br />
                          Generally, the standard plot according to the land
                          division in Nigeria is regarded as either 60ft×120ft
                          OR 50ftx100ft
                          <br />
                          <br />
                          Now, the specific "standard" plot size used across
                          different locations varies from location to location
                          based on different reasons.
                          <br />
                          <br />
                          In Ikoyi of Lagos state(not the Ikoyi of Osun and
                          Igbokoda🤓), around 2400sqm is used as a standard plot
                          because it's a low-density area.
                          <br />
                          <br />
                          In Lekki, around 900 to 1300sqm is used as a plot,
                          because it's a mid-density area.
                          <br />
                          <br />
                          Most estate in Ibeju-lekki use around 450sqm which is
                          15mx30m
                          <br />
                          E.t.c
                        </p>
                        <p style={{ color: "black", textAlign: "left" }}>
                          The standard units of land devoid of ambiguity or
                          unnecessary approximations are ACRE and HECTARE
                          <br />
                          <br />
                          An acre of land is a standard unit common in bulk land
                          trading. It is 4000sqm.
                          <br />
                          <br />
                          This 4000sqm is approximately equivalent to 6 standard
                          plots of 60ft×120ft. That is, 6×60ft×120ft==
                          6x18.3mx36.6m == 4,018.68sqm
                          <br />
                          <br />
                          While HECTARE is the standard metric unit used by
                          government land/property agencies and land
                          professionals. It is 10,000sqm or 2.5Acres.
                          <br />
                          <br />
                          This is approximately equivalent to a 15 standard plot
                          of 60ftx120ft. That is, 15x60ftx120ft ==
                          15x18.3mx36.6m == 10,046.7sqm
                          <br />
                          <br />
                          That's all.
                        </p>

                        <p style={{ color: "black", textAlign: "justify" }}>
                          Now, as for those of our customers wondering why we do
                          not approximate money or land-size in @FloraHomesGC,
                          it's true we usually leave them in two decimal places,
                          can you see why now? It's because we do not want to
                          eat your right nor allow you to eat our right. Fair
                          enough!
                          <br />
                          <br />
                          With this, we believe that when next you want to buy
                          land, this will guide you into a better way to compare
                          and negotiate your way for better investment return.
                        </p>
                      </div>
                      <WhoWeAre />
                      <hr className="bg-primary" />
                      <Disclaimer />{" "}
                    </div>
                  </div>
                  <div className="comments-area" id="comment-view">
                    <div className="comment-form my-4">
                      <div className="group-title">
                        <h3>Leave a comment</h3>
                      </div>
                      <Comment user="layinton" message="nice one" />
                      <CommentForm />
                    </div>
                    {/* /.comment-section */}
                  </div>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default KnowYourLandSize;
