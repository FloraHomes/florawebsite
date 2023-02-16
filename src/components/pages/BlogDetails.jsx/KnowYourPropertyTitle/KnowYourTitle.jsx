import React from "react";
import { Link } from "react-router-dom";

import cardImg3 from "../../../assets/blog3.jpg";
import blogheader from "../../../assets/blogheader.png";
import Comment from "../Components/Comments/Comment";
import CommentForm from "../Components/Comments/CommentForm";
import Disclaimer from "../Components/Disclaimer";
import WhoWeAre from "../Components/WhoWeAre";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";
const KnowYourPropertyTitle = () => {
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
                        <img src={cardImg3} alt="" />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <ul className="post-info">
                        <li>
                          <span className="far fa-user" />
                          FLORAHOMES ADMIN
                        </li>
                        <li>
                          <span className="far fa-comments" /> Comments 9
                        </li>
                      </ul>
                      <h3 style={{ textAlign: "left", color: "black" }}>
                        <b>Know Your Property Title</b>
                      </h3>
                      <p style={{ color: "gray", textAlign: "left" }}>
                        by FlorahomesGC | Real Esate - Real Story
                      </p>
                      <p style={{ textAlign: "left" }}>
                        Posted On: May 20, 2019
                      </p>
                      <br />
                      <p style={{ color: "black", textAlign: "justify" }}>
                        In 1978, a law was decreed regarding the general land
                        use known as THE LAND USE ACT. Generally, all land
                        within the federal territory of Nigeria is in the
                        custody of the governor of each state of the federation.
                        Here's it as it's stated:
                      </p>

                      <ul className="first-ul">
                        <li>
                          1.) CERTIFICATE OF OCCUPANCY
                          <p>
                            In order to effect this law, they came up with a
                            statutory document that can show proof of ownership
                            (technically not absolute ownership but landholding
                            and right of use) to whomsoever the ownership is
                            granted and the document is called the CERTIFICATE
                            OF OCCUPANCY (C of O).
                          </p>
                        </li>
                        <li>
                          2.) GOVERNOR'S CONSENT
                          <p>
                            If a person has this C of O and he needs to transfer
                            this land to someone else either through selling or
                            through gifting, the new owner will now take this C
                            of O after concluding the transaction to the
                            government to perfect it to his name. The document
                            this new owner will have after this perfection is
                            called GOVERNOR'S CONSENT. Land can only have C of O
                            once, subsequent ownership on the same property will
                            have the title governor's consent. Therefore the
                            only title acknowledged by the government of Nigeria
                            is the C of O and Governor's Consent after transfer.
                            OTHERS THAT ARE NOT TITLE These fall under 2
                            categories.
                          </p>
                        </li>
                        <ul className="second-ul">
                          <li>
                            A) THE ONES THAT CAN BE PROCESSED TO TITLE
                            <p>
                              If this is clear, let's move to how allocation,
                              excision, registered survey, etc play some role in
                              getting either of these 2 titles stated up there.
                              Before any land can have a C of O, which is the
                              topmost statutory title on any property, it
                              involves a process, a long one.
                              <br />
                              <br />
                              The beginning of such a process is that the
                              government will allocate or excise the land first
                              depending on the terminology of a state. In
                              Nigeria, there are 2 categories of people that can
                              seek ownership of land either you've once
                              inherited property or not.
                            </p>
                          </li>
                          <ul className="third-ul">
                            <li>
                              1.)THE TRADITIONAL LANDOWNERS (land overlords,
                              sons of the soil or omoonile as you call them)
                              <p>
                                For this first set, the traditional landowners,
                                if they need to have the right ownership of
                                their land which is the C of O, after paying
                                some dues and submitting a lot of necessary
                                documents for the processing of the C of O, if
                                the government decides to grant them the C of O,
                                the first thing government will do on such
                                parcel of land is EXCISING the land from any
                                government use.
                                <br />
                                <br />
                                So once the land is excised, the government has
                                removed their interest from it and the next
                                thing for such land is to have its layout
                                Approval done so that the C of O can be finally
                                processed. Before now, once the land is excised,
                                the government will just gazette it and then
                                publish it on a publication. This may not need
                                any layout Approval or C of O. But now, the
                                process is EXCISED➡LAYOUT➡C of O
                              </p>
                            </li>
                            <li>
                              2) INDIVIDUAL, GROUPS OF INDIVIDUALS, AND
                              ORGANIZATION (either corporate, religious,
                              for-profit or not for profit)
                              <p>
                                As for this second set, after seeing the land
                                they want and submitting all necessary documents
                                of that land, and after settling all to be
                                settled (sometimes one will need to settle the
                                traditional landowner of such parcel too), what
                                government gives to this category of people is
                                ALLOCATION.
                                <br />
                                <br />
                                So either it's excision or allocation, they are
                                legitimate processes to owning the title of the
                                land. <br />
                                Now, omoonile can't sell an allocation to you
                                because the government doesn't give allocations
                                to omoonile.
                                <br />
                                Can you see that?
                                <br />
                                Allocation is valid but not from the wrong
                                owner.
                                <br />
                                The same thing with excision.
                                <p>
                                  Like we have an Excised land, and the name on
                                  it is the village name. That's valid. A
                                  company can market an Excised land but the
                                  document can't be in the name of the company,
                                  it has to be in the name of the village or
                                  town or family owners. Unless the company has
                                  perfected the title in the company name and at
                                  that time, it can't be called excision again,
                                  it would be GOVERNOR'S CONSENT in the
                                  company's name.
                                </p>
                              </p>
                              <ul className="fourth-ul">
                                <li>
                                  A) THE ONES THAT CAN'T BE PROCESSED TO TITLE
                                  <ul className="fourth-ul-inner">
                                    <li>
                                      1.) EXCISION IN PROGRESS
                                      <p>
                                        To have an excision, there's a very
                                        tiring process to it, documents to be
                                        submitted, and there are dues to pay.
                                        However, there's no such guarantee that
                                        an Excision will be granted on the
                                        parcel it was applied for. There are
                                        thousands of applications that never
                                        even get reviewed not to mention being
                                        considered to be granted the excision.
                                        Even our partner sponsored an Excision
                                        process for one traditional family like
                                        over 5 years ago, it's still yet to be
                                        reviewed.
                                      </p>
                                      <p>
                                        Now what if the excision is granted,
                                        yes, it happens too very well, but how
                                        it works is that a percentage of the
                                        original large parcel applied for is
                                        only what will be granted. Let's say
                                        between 10% to about 40% of what was
                                        applied for. And when it comes out,
                                        there will be a particular size, shape,
                                        spot and actual location that'll be
                                        marked for this excision usually
                                        presented through what's called an
                                        Excision Survey.
                                      </p>
                                      <p>
                                        So if you had bought an excision in
                                        progress land, you don't have any
                                        guarantee that the excision would be
                                        granted and even when a small portion is
                                        granted, what if what you paid for falls
                                        outside what was granted? Do you
                                        understand this? It simply means you'll
                                        never be able to perfect such a title
                                        which is meant to be the only thing that
                                        legally backup any ownership claim of a
                                        land parcel.
                                      </p>
                                      <p>
                                        So it's important for you to know that
                                        it's only an Excised land that can be
                                        processed to a title, not an Excision in
                                        progress, process or applied, excision
                                        block or what have you that are popular
                                        out there.
                                      </p>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              3.) DEED OF ASSIGNMENTOF LAND THAT DOES NOT HAVE
                              EITHER ALLOCATION, GOVERNOR'S CONSENT, CERTIFICATE
                              OF OCCUPANCY NOR EXCISION.
                              <p>
                                Deed of assignment is an important legal
                                document that shows the transfer of ownership
                                from a current owner to an intending owner.
                                <br />
                                <br />
                                However, if the current owner doesn't have a C
                                of O, a Governor's Consent, an allocation letter
                                or neither is the land free from any government
                                interest based on statutory grants of each state
                                on the land (e.g, Excision in Lagos, Registered
                                Survey in some states, e.t.c.), such Deed of
                                Assignment can never be processed to any legally
                                acceptable ownership title.
                              </p>
                              <p>
                                There are some exceptions. For a land that's not
                                under any government committed acquisition, it
                                may be regularized (or ratified as used in some
                                states), thereafter processed to a legal
                                ownership title. The only cons to this is the
                                fact that regularization is like re-buying such
                                land at the current value or far less depending
                                on the state of such land, but we believe this
                                is better than losing it all.
                              </p>
                            </li>
                          </ul>
                        </ul>
                        <li>
                          3.) THE SURVEY OF LAND THAT DOES NOT HAVE EITHER
                          GAZETTE, ALLOCATION, GOVERNOR'S CONSENT OR C of O.
                          <p>
                            There's no such thing anyone wants to do on any
                            property without the need for a survey plan. In
                            fact, Survey is like the most important document
                            you'll always find with the ownership title or even
                            to process the title or any other land documents.
                            Without the Survey, one can't even know the
                            location, size nor shape of any land either legally
                            claimed by ownership document or not.
                          </p>
                          <p>
                            As important as this is, just as the case for a Deed
                            of Assignment, the same holds for a Survey. That is,
                            only Survey is not a title of land, only Survey
                            can't be used to process the ownership title of the
                            land, it's usually used in the company of other
                            relevant documents.
                          </p>
                          <p>
                            And when land is not free from government
                            acquisition, such a Survey can't be used to process
                            the ownership title except in the case of
                            regularization (ratification) earlier stated.
                          </p>
                        </li>
                        <li>
                          4.) PURCHASE RECEIPT
                          <p>
                            Even though this is a document too, and it's an
                            important one at that as it's the most basic
                            evidence that shows the payment made, date and
                            acknowledgement of the receiver in a bid to transfer
                            a property from one party (owner/seller) to the
                            other (buyer/sponsor).
                          </p>
                          <p>
                            While it's important to be kept and well documented
                            as a reference in case of any future needs like
                            dispute or anything of such, however, as important
                            as this is, it has no relevance in ownership title
                            processing whatsoever.
                          </p>
                          <p>
                            The new owner doesn't need it at all to perfect his/
                            her ownership of the property. You don't buy
                            property and then get only the receipt as evidence,
                            you'll need to get a well crafted, well-vetted, and
                            well-signed Deed of Assignment because this will be
                            the basis of any title processing you'll do on such
                            property.
                          </p>
                          <p>
                            We believe that with this, subsequently, as someone
                            who wants to buy land, building or other properties,
                            you can do better knowing how to interpret whatever
                            name of documents is mentioned to your ears.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <WhoWeAre />
                    <hr className="bg-primary" />
                    <Disclaimer />
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

export default KnowYourPropertyTitle;
