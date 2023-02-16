import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../../../assets/blog1.jpg";
import blogheader from "../../../assets/blogheader.png";
import Comment from "../Components/Comments/Comment";
import CommentForm from "../Components/Comments/CommentForm";
import Disclaimer from "../Components/Disclaimer";
import WhoWeAre from "../Components/WhoWeAre";
import Sidebar from "../Sidebar/Sidebar";
const LagosSetToDigitalize = () => {
  return (
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
                        <img src={blog1} alt="" />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <ul className="post-info">
                        <li>
                          <span className="far fa-user" />
                          FLORAHOMES ADMIN
                        </li>
                        <li>
                          <span className="far fa-comments" /> Comments
                        </li>
                      </ul>
                      <h3 style={{ textAlign: "left", color: "black" }}>
                        <b>
                          Lagos Set To Go Digital in Land Related Services Come
                          2021
                        </b>
                      </h3>
                      <p style={{ color: "gray", textAlign: "left" }}>
                        by FlorahomesGC | Real Esate - Real Story
                      </p>
                      <p style={{ textAlign: "left" }}>
                        Posted On: May 20, 2019
                      </p>
                      <br />
                      <p style={{ color: "black", textAlign: "justify" }}>
                        Governor Babajide Sanwo-Olu, on Wednesday at the opening
                        ceremony of the maiden edition of Real Estate
                        Marketplace Conference and Exhibition, which took place
                        at Eko Hotel and Suites, Victoria Island, said that Land
                        transactions including application and payment for C of
                        O and Planning Permits would now be available online. He
                        expressed his belief that the automation of Land-related
                        services would hasten the approval process while
                        enhancing Investors’ confidence.
                      </p>

                      <p style={{ color: "black", textAlign: "justify" }}>
                        He mentioned that the Land Bureau has concluded plans
                        for migrating from the present traditional mode of
                        operation to a digital platform and when the web-based
                        platform becomes operational, there would be no need for
                        stakeholders seeking Certificate of Occupancy, Survey
                        registration, or Building plan approval to appear
                        physically at the Physical Planning Office for document
                        submission but could get all that done at the comfort of
                        their homes.
                      </p>

                      <p style={{ color: "black", textAlign: "left" }}>
                        “Real Estate and Property Development has become a
                        strong enabler that can help us transform the GDP of the
                        State and by extension the Country. The Real Estate
                        economy and its opportunity in Lagos are boundless but
                        everything is just an opportunity waiting to be
                        exploited if we don’t sit together and create a bucket
                        in which we realize that different people have different
                        roles to play.”
                      </p>
                      <p style={{ color: "black", textAlign: "justify" }}>
                        “We need to do a better job of Physical Planning, we
                        need to do a better job of LASBCA and we need to do a
                        quick turnaround in our Land departments”.
                      </p>

                      <p style={{ color: "black", textAlign: "justify" }}>
                        “We have started it, we have a solution on this GIS for
                        a while, and it’s a project we are desirous to live on.
                        Once it kick-starts, what it means is that it’s a
                        one-stop shop. With it, you will be able to get your
                        governor’s consent, approval, and Certificate of
                        Occupancy (C of O) on time, as well as all of the
                        documentation for a subsequent transaction.” He said.
                        The Governor emphasized that his administration is
                        committed to mass housing through a partnership with
                        private investors.
                      </p>
                      <p style={{ color: "black", textAlign: "left" }}>
                        “We have given our commitment to this, because of the
                        need to improve the turnaround time from when people
                        submit their requests for approval and the time the
                        authorization is completed. We cannot afford to
                        disappoint private investors and applicants seeking
                        real-time approval. We are raising our capacity so that
                        we respond to requests and discharge them.”
                      </p>

                      <p style={{ color: "black", textAlign: "justify" }}>
                        Furthermore, he charged real estate investors to
                        consider investing on the mainland and not just
                        Ibeju-Lekki, so as to redistribute wealth and create
                        opportunities for Citizens. He also warned against
                        unscrupulous practices in the Land Bureau Departments.
                      </p>
                      <p style={{ color: "black", textAlign: "left" }}>
                        As a property verification and Real Estate Investment
                        Company, FloraHomesGC would continue to work assiduously
                        with Lagos State Government, Land Bureau, and other
                        Property-related Ministries to ensure that investors and
                        buyers get secure, sterling, and seamless services in
                        Real Estate and Property Development across the mainland
                        axis too by 2021. This is what we are committed to
                        delivering to ensure profitable and loss-free
                        investments not just on the Island, but to every
                        location within and beyond Lagos state.
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
  );
};

export default LagosSetToDigitalize;
