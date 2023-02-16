import React, { useEffect, useState } from "react";

import bookvideo from "../../assets/videos/Book video.mp4";
import background from "../../assets/background.jpg";
import hsn from "../../assets/hsn-book.png";
import mobileView from "../../assets/mobile_view.png";
import book from "../../assets/Book.jpg";
import moneyBack from "../../assets/money-back-banner.png";
import "./books.css";
import customer1 from "../../assets/booksImages/1.jpg";
import customer2 from "../../assets/booksImages/2.jpg";
import customer3 from "../../assets/booksImages/3.jpg";
import customer4 from "../../assets/booksImages/4.jpg";
import customer5 from "../../assets/booksImages/5.jpg";
import customer6 from "../../assets/booksImages/6.jpg";
import Counter from "../../SharedComponents/CountDown";
import { useDispatch } from "react-redux";
import booksAction from "../../../actions/books";
import { useSelector } from "react-redux";
import BookModal from "./BookModal";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router";
export default function Books() {
  const history = useHistory();
  const [formData, setformData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
    how_you_hear_about_us: "",
    category: "",
  });

  const [bookingDetail, setbookingDetail] = useState({
    error_msg: null,
    bookings_data: null,
  });

  const { loading, error, bookings } = useSelector(
    (state) => state.bookingData
  );
  console.log(bookings);
  useEffect(() => {
    setbookingDetail({ error_msg: error, bookings_data: bookings });
  }, [error, bookings]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.full_name === "" ||
      formData.email === "" ||
      formData.phone_number === "" ||
      formData.whatsapp_number === "" ||
      formData.category === "" ||
      formData.how_you_hear_about_us === ""
    ) {
      alert("please fill all provided inputs");
      return;
    }
    dispatch(booksAction(formData));
    history.push("/thank-you");
    setformData({
      full_name: "",
      email: "",
      phone_number: "",
      whatsapp_number: "",
      category: "",
      how_you_hear_about_us: "",
    });
  };
  return (
    <>
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <div className="heading-container">
                <h1>
                  The Exact Checklists Wise Real Estate Investors Are Consulting
                  Before They Spend Even One Kobo On Buying Property Anywhere In
                  Nigeria.
                </h1>
              </div>

              <br />
              <div className="heading-paragraph">
                <p style={{ color: "#fff", fontSize: 20, lineHeight: "26px" }}>
                  This is unlike anything you've seen in the Nigeria real estate
                  market. So you better pay a rapt attention to every piece of
                  information on this page before downloading the book so that
                  you can know exactly how to use it.
                </p>
              </div>
              <br />
              <div className="vidBox">
                <video
                  width="100%"
                  loop="true"
                  autoPlay="autoplay"
                  controls
                  muted
                >
                  <source src={bookvideo} type="video/mp4" />
                </video>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
      <br />

      <div className="auto-container text-center">
        <div className="content-box">
          <p>
            If you don't want to throw your money away or spend the next several
            months in Police Stations and courts trying to get it back (that's
            if you can)
          </p>
          <div className="sec-title">
            <h4 className="font-weight-bold">
              THEN BEFORE YOU GO... KNOW THIS!
            </h4>
          </div>
          <div className="sec-title">
            <h4 className="font-weight-bold">
              Follow every single one of these checklists, and you will invest
              with peace of mind and sleep well at night.
            </h4>
          </div>
        </div>
      </div>

      <section
        className="about-section pb-0"
        style={{ padding: "40px 0 70px" }}
      >
        <div className="auto-container">
          <div className="row">
            {/* Image Column */}
            <div className=" content-column col-lg-10 offset-lg-1 col-sm-12">
              <figure
                className="image books wow fadeIn text-center animated"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <img src={hsn} alt="hsn" width="70%" />
              </figure>
            </div>
            <div className="image-column content-column col-lg-10 offset-lg-1  col-sm-12">
              <div className="inner-column" style={{ paddingRight: "0px" }}>
                <div className="sec-title">
                  <div className="writeup">
                    <h3 className="text-dark">Dear Friend,</h3>
                    <p className="text-dark pt-2">
                      As a property verification and real estate investment
                      company with over a decade experience in verification,
                      acquisition, development, investment advisory and having
                      worked with both state and federal stakeholders in
                      property matters, hear this important message.{" "}
                    </p>
                    <p className="text-dark pt-2">
                      If you're planning to buy real estate, we are going to
                      slaughter a sacred cow here and make a bold statement:
                      <b> that money you want to spend may get lost.</b>
                    </p>
                    <p className="text-dark pt-2">Why do we say so?</p>
                    <p className="text-dark pt-2">
                      Do you ever wonder why even estates are being demolished
                      and also being a subject of disputes? Or do you think this
                      is none of your business?
                    </p>
                    <p className="text-dark pt-2">
                      It's closer home than you think!
                    </p>
                    <p className="text-dark pt-2">
                      So many individuals and developer companies are victims of
                      real estate scam and losses already while some don't know
                      about their impending losses yet. This is why we are
                      determined to make property scam and other losses come to
                      an end while also exposing profitable options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="affiliate-section pt-5 pb-1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="auto-container">
          <div className="row">
            <div className=" col-lg-10 offset-lg-1  col-sm-12">
              <div className="content-column inner-column">
                <div className=" content-column col-lg-10 offset-lg-1 col-sm-12">
                  {/* <figure class="image wow fadeIn text-center animated" style="visibility: visible; animation-name: fadeIn;">
                            <img src="assets/images/PROPERTY-STAKEHOLDERS.jpg" alt="" width="70%">
                        </figure> */}
                </div>
                <p className="text-white pt-2">
                  For this reason, we have distilled a checklist of property
                  investment guides that you must employ and put to use BEFORE
                  you pay anybody for the property you want to buy, whether it's
                  land or a house and whether it's with Omo-Onile or an estate
                  developer company.
                </p>
                <p className="text-white pt-2">
                  We'll be handing you what is considered to be the perfect and
                  total solution for buying any property in Nigeria in this
                  easy-to-read guide that you'll likely want to read from
                  cover-to-cover in one sitting.
                </p>
                <p className="text-white pt-2">
                  This guide covers the exact steps on how to avoid property
                  investment mistakes by yourself, and the 11-point checklist
                  you must cover to make a stress-free, wahala-free,
                  argument-free and court case-free property investment deal -
                  EXACTLY what you need to do to build huge wealth in real
                  estate.
                </p>
                <p className="text-white pt-2">
                  The good news is that it's an ebook that you can download and
                  read from any location you are currently in: within Nigeria or
                  in diaspora.
                </p>
                <p className="text-white pt-2">
                  The book is titled...{" "}
                  <b>"REAL ESTATE INVESTING WITHOUT TEARS"</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-three pt-5 pb-0">
        <div className="auto-container">
          <div className="content-column">
            <div className="row">
              {/* Feature Block */}
              <div
                className="feature-block-three image-column content-column col-lg-10 offset-lg-1  col-sm-12 wow fadeInUp animated animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box">
                  {/* icon flaticon-info */}

                  <div className="icon-box">
                    {/* <span className="icon flaticon-house-silhouette"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="currentColor"
                      className="bi bi-house-door icon flaticon-house-silhouette"
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
                    {/* </span> */}
                    {/* </div> */}
                  </div>
                  <h4>
                    About The Time-Tested Checklist to Making ZERO MISTAKE When
                    Buying Real Estate Anywhere In Nigeria
                  </h4>
                  {/* <div class="text">
                            <span style="color:black"></span>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-three">
        <div className="auto-container">
          <div className="row">
            {/* Content Box */}
            <div className="content-column col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <p
                    className="text-dark text-lg"
                    style={{
                      fontWeight: "normal",
                      fontSize: "18px",
                      textAlign: "left",
                    }}
                  >
                    Put together by a team of landed property professionals with
                    years of experience in property investment including Land
                    Surveyors, Estate Surveyors, Town Planners, Property
                    Lawyers, Quantity Surveyors, Architects, Civil Engineers,
                    and Researchers.
                  </p>
                  <h3>
                    <b>
                      <font color style={{ color: "black!important" }}>
                        Here's Exactly What You'll Learn Inside this 80 pages
                        book:
                      </font>
                    </b>
                  </h3>
                </div>
                <ul className="first-inv__li list-style-one">
                  <li className="first-inv--items text-dark">
                    A 2,500-year-old Latin maxim that if you follow will secure
                    every landed property you buy 100%.
                  </li>
                  <li className="first-inv--items text-dark">
                    The first thing you must do BEFORE YOU BUY any property
                  </li>
                  <li className="first-inv--items text-dark">
                    How to confirm the coordinates of any land that sellers show
                    you using just your mobile phone.
                  </li>
                  <li className="first-inv--items text-dark">
                    How to know if a genuine document sent to you correlates
                    with the actual physical location where you will be buying
                    from.
                  </li>
                  <li className="first-inv--items text-dark">
                    If you have an existing property, how to know if your
                    property is free or not from any future Government
                    demolition, 3rd party claimants, eviction and what to do in
                    either case.
                  </li>
                  <li className="first-inv--items text-dark">
                    How to check the professionalism and authenticity of any
                    company or the agents you're buying from.
                  </li>

                  <li className="first-inv--items text-dark">
                    The four fake land titles that are used to scam unsuspecting
                    land investors
                  </li>
                  <li className="first-inv--items text-dark">
                    How to instantly identify if a property document is fake… or
                    real
                  </li>
                  <li className="first-inv--items text-dark">
                    Some of the costly real estate mistakes and how to avoid
                    them
                  </li>
                  <li className="first-inv--items text-dark">
                    When you hear “Global ‘C of O’” what does it mean. You’ll
                    find the real meaning inside
                  </li>
                  <li className="first-inv--items text-dark">
                    How to confirm the authenticity of land coordinates picked
                    using your phone (Do this always)
                  </li>
                  <li className="first-inv--items text-dark">
                    Are you buying property for residential purposes in an area
                    designated for farming? Learn how to find out this critical
                    information.
                  </li>
                  <li className="first-inv--items text-dark">
                    Where and how to confirm land titles and collateral issues.
                  </li>
                  <li className="first-inv--items text-dark">
                    How to avoid buying land that is entangled in family or
                    legal dispute.
                  </li>
                  <li className="first-inv--items text-dark">
                    How to check for and identify property structural defects
                    and flooding issues.
                  </li>
                  <li className="first-inv--items text-dark">
                    The know-how of the unregistered disputes, ownerships,
                    collaterals, titles, transfers.
                  </li>
                  <li className="first-inv--items text-dark">
                    How to know if a property of interest will be subject to
                    future demolition or not.
                  </li>
                  <li className="first-inv--items text-dark">
                    What to do BEFORE payment, DURING payment, and AFTER payment
                    for any property you want to and indeed buy.
                  </li>
                  <li className="first-inv--items text-dark">
                    Simple mobile-phone property apps to ensure the safety of
                    your investment
                  </li>
                  <li className="first-inv--items text-dark">And lots more!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${background})` }}
        className="affiliate-section pt-5 pb-1"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-10 pt-5 pb-5 text-white">
              <mark style={{ backgroundColor: "yellow" }}>
                <b>WARNING:</b> DO NOT GET THIS eBOOK IF YOU WON'T READ IT
                IMMEDIATELY.
              </mark>
              <p style={{ color: "white" }}>
                <b>REASON:</b> No one gets saved just by having access to
                information, only reading it without delay can expose some
                hidden pits dug at different angles for you either as an
                investor or as someone who works with investors.
              </p>
              <p style={{ color: "white" }}>
                Also, if you're NOT getting this book now, then sorry! it might
                be deactivated any time soon.
              </p>
              <p style={{ color: "white" }}>
                The government makes tons of billions off you annually simply
                because you don't know but you think you know.
              </p>
              <p style={{ color: "white" }}>
                Not just the governments, some others too. Some are done
                unintentionally while some are doing it simply because that's
                what the crowd wants.
              </p>
              <p style={{ color: "white" }}>
                Investors unknowingly keep losing billions of Naira annually
                while enriching the scammers, the governments and other ignorant
                participants because
              </p>
              <p style={{ color: "white" }}>
                <b>1-</b> You do not have the right information.
              </p>
              <p style={{ color: "white" }}>
                <b>2-</b> Some investors are arrogant to the truth.
              </p>
              <p style={{ color: "white" }}>
                <b>3-</b> When you see the right information, you complain that
                it's costly and so you choose to gamble your real estate
                decision with words like "I trust him", "she was recommended",
                "I have someone in the ministry"...
              </p>
              <p style={{ color: "white" }}>
                <b>4-</b> You are fortunate to get the right information, but
                you won't read immediately, you keep proving busy until regret
                happens.
              </p>
              <br />
              <p style={{ color: "white" }}>
                We don't have a word with you if you belong to the category 2.
                We only have talks with the group 3 and 4 above because nobody
                has the excuse of being in category 1 after being blessed to be
                reading on this page right now.
              </p>
              <p style={{ color: "white" }}>
                When you download this book and keep it like it's a golden gift
                from your great grandpa, instead of opening it immediately to
                see the secrets revealed, how exactly does procrastinating on
                reading it save you from falling into the next web of trap?
              </p>
              <p style={{ color: "white" }}>
                And as for those who will ignore this information like "don't
                mind them jare, they just want to make money off us ni"
              </p>
              <p style={{ color: "white" }}>
                Our response to you: YOUR CHOICE. We wish you happy going. Some
                things will be clearer to you later in life.
              </p>
              <p style={{ color: "white" }}>
                We had been victims of losses ourselves before we set up our
                company as Nigeria's foremost property verification company
                working with all property professionals and all government
                offices relating to property matters across every state in
                Nigeria.
              </p>
              <p style={{ color: "white" }}>
                Why do you think those who know us amongst individual investors,
                property buyers, developers, organisations and even realtors
                always choose us for their property verification?
              </p>
              <p style={{ color: "white" }}>
                Simply because we know our onions no be by mouth.
                <br />
                But not to worry, this is also why we can beat our chest and
                offer you a 30-day money-back guarantee in case you're afraid
                this book might not worth it. Yes, no stress, we will give you
                back your money if you don't find the book worthy.
              </p>
              <p style={{ color: "white" }}>
                One other thing we think you should know is that the money made
                through the sales of this book is diverted into creating more
                awareness to save you, your family, your neighbours, your
                friends, your colleagues, from being victims of property losses.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section pb-0 pt-0">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-10 offset-lg-1  col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h4 className="mt-1">
                    <small>
                      <span className="text-dark">
                        Again, If you didn't meet what has been promised, you
                        have 30 Days Money-Back Guarantee to request for your
                        money at 100% refund, you have nothing to lose. Just
                        send mail to{" "}
                        <a href="mailto:hello.florahomesgc@gmail.com">
                          <span
                            className="text-primary"
                            style={{ textDecoration: "underline" }}
                          >
                            hello.florahomesgc@gmail.com
                          </span>
                        </a>
                      </span>{" "}
                      whenever you are ready.
                    </small>
                  </h4>
                  <br />
                  <mark style={{ backgroundColor: "yellow" }}>
                    PLUS WHEN YOU GET YOUR COPY OF{" "}
                    <b>THE REAL ESTATE INVESTING WITHOUT TEARS</b> TODAY, YOU
                    ALSO GET A FREE ACCESS TO OUR N10,000 ($26) HOT SELLING BOOK{" "}
                    <b>WHERE THE REAL MONEY IS.</b>
                  </mark>
                  <b>
                    <h4 align="center">
                      <b>VALID ONLY FOR THOSE WHO PAY TODAY </b>
                    </h4>
                    <br />
                    <div className="mob_view">
                      <img src={mobileView} alt="mobile" />
                    </div>
                    <div className="row web_view">
                      <div className="col-sm-6">
                        <img src={book} alt="book" />
                      </div>
                      <div className="col-sm-6">
                        <br />
                        <br />
                        <br />
                        <p>
                          Almost everyone knows about buying land in one remote
                          estate or just somewhere for speculation so that it
                          can appreciate in value over the years…
                        </p>
                        <p>
                          Almost everyone knows about buying a home or
                          developing a building by themselves within a growing
                          area in order to earn rental income or even resell the
                          property at a profit…
                        </p>
                        <p>
                          What many don't know is the fact that these most
                          popular methods are not where the real money is.
                        </p>
                        <p>
                          This is why our experts have put together a one of a
                          kind practical information where just about any level
                          of investor can make the unusual real estate money
                          with is.{" "}
                        </p>
                      </div>
                    </div>
                  </b>
                </div>
                <b>
                  <br />
                  {/* <p className="text-center">
                    <span
                      className="counter counter-analog"
                      data-direction="down"
                    >
                      <span className="part part0">
                        <span className="digit digit0 digit00">0</span>
                        <span className="digit digit3 digit43">3</span>
                      </span>
                      <span className="separator separator1">:</span>
                      <span className="part part2">
                        <span className="digit digit5 digit55">5</span>
                        <span className="digit digit4 digit54">4</span>
                      </span>
                      <span className="separator separator3">:</span>
                      <span className="part part4">
                        <span className="digit digit0 digit00">0</span>
                        <span className="digit digit8 digit98">8</span>
                      </span>
                    </span>
                  </p> */}
                  <div className="text-center mb-4">
                    <Counter
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <img src={moneyBack} alt="money-back" />
                  </div>
                  <br />
                  <h4>
                    <b>eCOPY (Downloadable Copy)</b>
                  </h4>
                  <h4>
                    <b>Price Today before it reverts to the original price</b>
                  </h4>
                  <h4>
                    <b>
                      In Naira: <span style={{ color: "#0008ff" }}>N7,700</span>{" "}
                      instead of N15,400
                    </b>
                  </h4>
                  <h4>
                    <b>
                      In Dollar: <span style={{ color: "#0008ff" }}>$20</span>{" "}
                      instead of $40
                    </b>
                  </h4>
                  <br />
                  <mark style={{ backgroundColor: "yellow" }}>
                    Hello: Don't click this button to make payment if you are
                    not going to read it immediately.
                  </mark>
                  <br />
                  <br />
                  <p className="text-center">
                    {/* <a href="#" data-toggle="modal" data-target="#pricingmodal" class="theme-btn btn-style-one"><span class="btn-title">Wow!!! See what I've been looking for. I want the checklist</span></a> */}
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#bookOptin"
                      className="theme-btn btn-style-one pricingmodalCall"
                    >
                      <span className="btn-title">
                        Wow!!! See what I've been looking for. I want the
                        checklist
                      </span>
                    </button>
                  </p>
                </b>
              </div>
              <b></b>
            </div>
            <b></b>
          </div>
          <b></b>
        </div>
        <b></b>
      </section>

      <section
        className="affiliate-section pt-5 pb-1"
        style={{ background: `url(${background})` }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1  col-sm-12">
              <div className="content-column inner-column">
                <div className="sec-title">
                  {/* <h3 style="color: #fff;">Fact About The Book </h3> */}
                </div>
                <div className="row">
                  {/* Bullet Listing Column */}
                  <div className="affiliate-block col-lg-12 col-md-12">
                    <ul className="list-style-one">
                      {/*  <li>It will take you less than 30 minutes to finish reading it the first time while you can always go back to it anytime you need it.</li>
                       */}
                      <li>
                        It will save you millions of Naira in mistakes and
                        thousands of hours in headache.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section pt-5 pb-0">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-10 offset-lg-1  col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h3>
                    <b>
                      <font color="black">Who's This Book For?</font>
                    </b>
                  </h3>
                  <ul className="first-inv__li list-style-one">
                    <li className="first-inv--items">
                      Everyone who intends to buy property.
                    </li>
                    <li className="first-inv--items">
                      Every property stakeholders
                    </li>
                    <li className="first-inv--items">
                      Everyone who aspires to own property one day.
                    </li>
                    <li className="first-inv--items">
                      Everyone who already owns property
                    </li>
                    <li className="first-inv--items">
                      Everyone who markets real estate and property investments
                    </li>
                    <li className="first-inv--items">
                      Every developer and real estate company.
                    </li>
                    <li className="first-inv--items">
                      Everyone who's just interested in the right real estate
                      practices.
                    </li>
                    <li className="first-inv--items">
                      Anyone who wishes to protect their family and friends from
                      falling into real estate scam.
                    </li>
                    <br />
                    <h3>
                      <b>
                        <font color="black">
                          See what readers are saying about this book:
                        </font>
                      </b>
                    </h3>
                    <div className="row justify-content-around">
                      <img
                        id="verification-img-v"
                        className="customer-review-images"
                        src={customer1}
                        alt="Professional Charge"
                        width="100%"
                        height="100%"
                      />
                      <img
                        id="verification-img-v"
                        className="customer-review-images"
                        src={customer2}
                        alt="Professional Charge"
                        width="100%"
                        height="100%"
                      />
                      <img
                        id="verification-img-v"
                        className="customer-review-images"
                        src={customer3}
                        alt="Professional Charge"
                        width="100%"
                        height="100%"
                      />
                      <img
                        id="verification-img-v"
                        className="customer-review-images"
                        src={customer4}
                        alt="Professional Charge"
                        width="100%"
                        height="100%"
                      />
                      <img
                        id="verification-img-v"
                        className="customer-review-images"
                        src={customer5}
                        alt="Professional Charge"
                        width="100%"
                        height="100%"
                      />
                      <img
                        id="verification-img-v"
                        className="customer-review-images"
                        src={customer6}
                        alt="Professional Charge"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <mark style={{ backgroundColor: "yellow" }}>
                      Will You Get Your Copy Now Or Will you sit on the fence,
                      doubting and calling it expensive despite being given a
                      money-back guarantee?{" "}
                    </mark>
                    <br />
                    <div className="text-center">
                      {/* <p>
                        <span
                          className="counter counter-analog"
                          data-direction="down"
                        >
                          <span className="part part0">
                            <span className="digit digit0 digit00">0</span>
                            <span className="digit digit3 digit43">3</span>
                          </span>
                          <span className="separator separator1">:</span>
                          <span className="part part2">
                            <span className="digit digit5 digit55">5</span>
                            <span className="digit digit8 digit98">8</span>
                          </span>
                          <span className="separator separator3">:</span>
                          <span className="part part4">
                            <span className="digit digit0 digit00">0</span>
                            <span className="digit digit5 digit65">5</span>
                          </span>
                        </span>
                      </p> */}
                      <div className="text-center mt-4">
                        <Counter
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontSize: "20px",
                          }}
                        />
                      </div>
                      <br />
                      {/*  <a href="#" data-toggle="modal" data-target="#pricingmodal" class="theme-btn btn-style-three mt-3"><span class="btn-title">I'm ready to get it</span></a> */}
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#bookOptin"
                        className="theme-btn btn-style-three mt-3 pricingmodalCall"
                      >
                        <span className="btn-title">I'm ready to get it</span>
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="affiliate-section pt-5 pb-1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1  col-sm-12">
              <div className=" content-column inner-column">
                <div className="sec-title">
                  <h3 style={{ color: "#fff" }}>Price </h3>
                </div>
                <p className="text" style={{ color: "#fff" }}>
                  If we're to judge by the feedback, results, and efficiency
                  through this ebook, it would cost a fortune to get. Our
                  mission is to make this book reach every household in order to
                  keep protecting people from falling into property scams and
                  losses.
                </p>
                <div className="row">
                  {/* Bullet Listing Column */}
                  <div className="affiliate-block col-lg-12 col-md-12">
                    <ul className="list-style-one">
                      <li>eCOPY (Downloadable Copy)</li>
                      <li>Price NOW before it reverts to the original price</li>
                      <li>
                        In Naira:{" "}
                        <span
                          style={{ fontSize: "22px", fontWeight: 600 }}
                          className="text-white"
                        >
                          N7,700 instead of N15,400
                        </span>
                      </li>
                      <li>
                        In Dollar:
                        <span
                          style={{ fontSize: "22px", fontWeight: 600 }}
                          className="text-white"
                        >
                          $20 instead of $40
                        </span>
                      </li>
                    </ul>
                    <mark
                      style={{ backgroundColor: "yellow" }}
                      className="text"
                    >
                      If you're serious about getting futuristic investments for
                      yourself or your clients and you don't have this book…
                      then sorry and good bye.
                    </mark>
                    <mark
                      style={{ backgroundColor: "yellow" }}
                      className="text"
                    >
                      If you get this book and you don't read it immediately…
                      Sorry!
                    </mark>
                    <br />
                    <br />
                  </div>
                </div>
                {/* <p className="text-center">
                  <span
                    className="counter counter-analog"
                    data-direction="down"
                  >
                    <span className="part part0">
                      <span className="digit digit0 digit00">0</span>
                      <span className="digit digit3 digit43">3</span>
                    </span>
                    <span className="separator separator1">:</span>
                    <span className="part part2">
                      <span className="digit digit5 digit55">5</span>
                      <span className="digit digit7 digit87">7</span>
                    </span>
                    <span className="separator separator3">:</span>
                    <span className="part part4">
                      <span className="digit digit4 digit44">4</span>
                      <span className="digit digit5 digit65">5</span>
                    </span>
                  </span>
                </p> */}
                <div className="text-center mb-3 mt-3">
                  <Counter
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  />
                </div>
                <p className="text-center">
                  {/* <a href="#" data-toggle="modal" data-target="#pricingmodal" class="theme-btn btn-style-four "><span class="btn-title">Please grant me access already, I can't wait</span></a> */}
                  <button
                    type="button"
                    data-target="#bookOptin"
                    data-toggle="modal"
                    className="theme-btn btn-style-four pricingmodalCall"
                  >
                    <span className="btn-title">
                      Please grant me access already, I can't wait
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ padding: "80px 0 70px" }}>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-10 mb-0 offset-lg-1  col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <p style={{ fontSize: "12px" }}>
                    DISCLAIMER:
                    <span className="text-sm">
                      This information is part of the "Preventing Real Estate
                      Losses" project By FloraHomes Global Consult Limited
                      professional team. They're reliable and very valuable,
                      created with utmost simplicity to educate and enlighten
                      prospective and existing real estate investors as well as
                      industry stakeholders on how not to fall into property
                      loss of any kind. We specifically disclaim any liability
                      that is incurred from the misuse, mis-interpretation or
                      wrong application of this content and any other
                      information found through any of our media outlets.
                    </span>
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    This site and the products and services offered on this site
                    is in no way sponsored, affiliated, endorsed or administered
                    by, or associated with, Facebook. Nor have they been
                    reviewed, tested or certified by Facebook. Facebook is a
                    registered trademark of Facebook, Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookModal
        error_msg={bookingDetail.error_msg}
        setbookingDetail={setbookingDetail}
        data={bookingDetail.bookings_data}
        loading={loading}
        formData={formData}
        setformData={setformData}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
