import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import background from "../../assets/background.jpg";
import EngageInService from "../../SharedComponents/EngageInService";
import handleAccordion from ".";
import CtaButton from "./Cta_Button";
import OptinModal from "../../SharedComponents/OptinModal";
import InestmentReusableForm from "../../SharedComponents/InestmentReusableForm";
import "./styles.css";
import OptinForm from "../../SharedComponents/OptinForm";
import ClientEngagementForm from "../../SharedComponents/ClientEngagementForm";

const Investment = () => {
  const [formData, setformData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
  });
  const handleSubmit = () => {};
  const [bookingDetail, setbookingDetail] = useState({
    error_msg: null,
    bookings_data: null,
  });
  useEffect(() => {
    handleAccordion();
  }, []);
  return (
    <>
      <section style={{ background: "#541484" }}>
        <div className="heading-container">
          <h1 style={{ color: "#fff" }}>FHGC PROPERTY INVESTMENTS</h1>
        </div>
        <p
          style={{ padding: "15px" }}
          className="heading-paragraph text-warning"
        >
          Note: Read everything before deciding your best option based on income
          level, needs and location. Make all clarification before making any
          payment.
        </p>
        <div className="heading-paragraph" style={{ paddingLeft: "15px" }}>
          <h3 className="text-light">About The Company</h3>
          <p className="text-left">
            {" "}
            FloraHomes Global Consult Limited is a property verification and
            real estate investment company with a mission to prevent real estate
            losses. Our team of professionals include; Land Surveyors, Estate
            Surveyors, Town Planners, Quantity Surveyors, Architects, Civil
            Engineers, Property Lawyers, Researchers, etc To know more about us,
            navigate to the About Us page on our website.
          </p>
        </div>
      </section>
      <section>
        <div className=" content-column col-lg-12">
          <p>THE 4 AVAILABLE PROPERTY INVESTMENT OPTIONS</p>
          <p className="text-left">A) Basic Own-Earner Investment</p>
          <h6>
            This is a type of Real Estate Unit Investment (REUI) that makes you
            a part owner of a property with a token while also affording you the
            opportunity to earn cash return irrespective of your income level or
            location. A standard plot of land is 60 by 120 ft, that is
            approximately 648 sqm. No matter what you have now, don't wait any
            further, start buying your own land slots starting from as little as
            10 sqm and keep buying more either for building purpose or for
            reselling at a profit after maturity.
          </h6>
          <ul className="list-style-decimal" style={{ marginLeft: "15px" }}>
            <li>Unit slot: 1sqm of land</li>
            <li>
              Amount/slot: N8,000 Estate:{" "}
              <Link to="/fern-island">The Fern Island</Link>{" "}
            </li>
            <li>Minimum slot/Investor: 10 units (10 sqm of land) (N80, 000)</li>
            <li>
              Buy a minimum of 50 units (50 sqm of land) and get 1 extra unit.
            </li>
            <li>
              Buy a minimum of 100 units (100 sqm of land) and get 4 extra
              units.
            </li>
            <li>
              Buy a minimum of 150 units (150 sqm of land) and get 7 extra units
              plus instant Allocation.
            </li>
            <li>
              Buy a minimum of 500 units (500sqm of land), and get 25 extra
              units plus instant Allocation.{" "}
            </li>
            <li>
              Buy a minimum of 1000 units (1000 sqm of land), get 60 extra
              units, get instant Allocation, and become our Associate Partner
              (Check the FAQ on this page to see the benefits)
            </li>
            <li>
              To earn money through this investment, there are 2 ways:
              <ul type="A">
                <li style={{ listStyleType: "lower-alpha" }}>
                  Anytime you sell off some or all of your property units.
                </li>
                <li style={{ listStyleType: "lower-alpha" }}>
                  As an Instant Earner through Own-earner reward. This is when
                  you earn 10% commission any time you refer someone to buy
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Basic Own-Earner
                  </span>{" "}
                  and{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Direct Estate Property
                  </span>{" "}
                  investment options. This is optional. You still have your
                  property stake appreciating in value whether you refer or not.
                </li>
              </ul>
            </li>
            <li>
              Whatever commission you earn through referral, you'll have both
              property and cash wallets: This 10% commission will be divided
              into 5 equal parts. 4 parts will be paid into the property wallets
              which will be used to acquire more property units until you fully
              own property while the remaining 1 part will be paid into your
              cash wallet which you can either withdraw for your personal use or
              send it to the property wallet to acquire more units.
            </li>
            <li>
              To own more property units, it's either :
              <ul>
                <li style={{ listStyleType: "lower-alpha" }}>
                  By directly paying for more property units.
                </li>
                <li style={{ listStyleType: "lower-alpha" }}>
                  As an Instant Earner (Please refer to 9(b) above).
                </li>
              </ul>
            </li>
            <li>Minimum duration before reselling: 2 years. </li>
            <li>
              Full price of land, going rate and appreciation trend: As always
              seen on this page. <Link to="/our-estate">Click here</Link>
            </li>
          </ul>
          <CtaButton
            own="#own"
            title="Click here to start your journey into building your dream future"
          />
          <p style={{ lineHeight: "35px" }}>
            In 4 simple steps, join thousands of Nigerians home and abroad who
            are now earning cash while also owning their property stakes.{" "}
          </p>
          <EngageInService
            first_step="Register"
            second_step="Make payment"
            third_step="Activate your account"
            fourth_step="Watch your money grow"
            call_to_action={
              <CtaButton
                own="#own"
                title=" Click here to start your journey into building your dream
            future"
                display_type="block"
              />
            }
          />
          <p className="text-left">B) Executive Own-Earner Investment.</p>
          <h6>
            This is a type of Real Estate Unit Investment (REUI) that makes your
            money work for you, you earn 10-40% cash return annually for a
            period of 5 years and you'll still have property equivalent to your
            capital at the end of the 5 years. The available categories are N1m,
            N5m and N25m. While you may have invested in different commodities
            with amazing ROI, this is your insured opportunity to invest and
            earn direct cash return through real estate while simultaneously
            having your own property which you can either decide to sell off at
            any time, or use it for any other property investment options of
            your choice.
          </h6>
          <CtaButton exec="#exec" title="CLICK HERE TO SEE HOW IT WORKS" />
          <p className="text-left">C) Direct Estate Purchase</p>
          <h6>
            This is when you buy your choice property from our available estates
            that guarantees you the opportunity to earn up to 15% annual rental
            income for life. Because we're sure of what we're giving you, you're
            very welcome to
          </h6>
          <ul className="list-style-decimal" style={{ marginLeft: "15px" }}>
            <li>
              Bring your Surveyor to pick coordinates & check the status of our
              land.
            </li>
            <li>
              To involve your Estate Surveyor or Property Lawyer to carry out
              search on the documents
            </li>
            <li>
              Bring your Town-planner to come and check if our property falls
              within any road allocation, road setbacks or any other violating
              uses that's contrary to what the government has approved.
            </li>
            <li>
              You can close the transaction online, while we send you every
              necessary site detail and documents that'll enhance your searches.
            </li>
          </ul>
          <p>
            When you make your purchase within the next 7 days, you have the
            following offers all to yourself:
          </p>
          <ul className="list-style-decimal" style={{ marginLeft: "15px" }}>
            <li>
              You'll get all your title perfection, Survey, documentation,
              including your building permit approval done for free except for
              paying the government required fees.
            </li>
            <li>
              If you're ready to build within 3 months of your purchase, you'll
              get a contemporary Architectural design of your choice together
              with complete working drawing for your permit processing, all for
              free.
            </li>
            <li>
              Our construction team will help you with your building
              construction at a very discounted fee.
            </li>
            <li>
              Anytime you complete your building, if you choose to rent it out,
              we have prospects waiting to let your property almost immediately
              due to the fact that our locations are of the highest rental
              demands in Nigeria. You don't need to worry about how to get
              tenants or how to manage them, it's our professional duty.
            </li>
            <li>
              Our locations of investment are targeted at fast developing areas
              with high value appreciation. This is so that if you decide to
              sell your property at any time, it'll easily fly and the land
              would have appreciated between 10-40% per annum.
            </li>
            <li>
              If you buy from 6 plots upward, you'll be getting an unimaginable
              attractive negotiation.
            </li>
            <li>
              For installment payment, you pay a minimum of N1m and spread the
              remaining within 12 months.
            </li>
          </ul>
          <CtaButton
            optinForm="#optinForm"
            title="Click here to access our available estates"
          />
          <p className="text-left">D) BULK LAND PURCHASE:</p>
          <h6>
            <span style={{ fontWeight: "bold", marginBottom: "25px" }}>
              FOR DEVELOPERS, ORGANISATIONS AND OTHER INDIVIDUALS INTERESTED IN
              PURCHASING LARGE EXPANSE OF LAND.
            </span>{" "}
            Here, our company sell-off part of our land that we had acquired
            through sponsorship projects, direct purchase, partnership etc in
            order to serve the developer companies, organisations and other
            individuals looking to purchase large expanse of land either to be
            developed now or to be fenced and speculated upon as a land banker.
            Our professionals ensure that all our lands are free from road
            allocation, road setbacks, 3rd party claimants, wrong ownership,
            debts, Omo-Onile issue, government acquisition or any future
            demolition wahala <br />
          </h6>
          <CtaButton
            client_eng="#client_eng"
            title=" Enter your request here and one of our sales executives will get
                in touch"
          />
        </div>
      </section>

      <section className="faq-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title text-center">
            <span className="title">FAQ'S</span>
            <h2 className="mb-3">FREQUENTLY ASKED QUESTIONS</h2>
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
                      What's the contact and company address?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          All information is down below on the business table or
                          on our website.
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
                      What document will I get for purchasing any of these
                      investments?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          For All Basic Own-Earner: Purchase Receipt,
                          <br /> For 150units and above: Allocation Letter and
                          Contract of Sale, <br /> for 500units and above:
                          Allocation Letter and Deed of Assignment. <br /> For
                          executive Own-Earner == Purchase receipt and
                          Agreement; <br /> For Full Payment Direct Property
                          Purchase == Receipt, Allocation Letter & Deed of
                          Assignment; <br /> For Installment Direct Estate
                          property purchase == Receipt, Contract of Sale, &
                          Allocation Letter.
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
                      Why do I have to wait for 2 years before selling basic
                      Own-Earner Slots I acquired?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Our Own-Earner investment vision is to create easy
                          access to owning exquisite homes, assets, and cash for
                          every Nigerian regardless of their income level.
                          Therefore, it is important for everyone to note that
                          this isn't just a platform for cash, it's a platform
                          to have properties too. Hence, the need for all
                          partners to watch their investment grow, add more
                          slots to the existing one and then decide on whether
                          to sell or not anytime from 2 years upward.
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
                      What if I'm not able to complete payment or refer any
                      buyer as an OEpartner?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          You'll get property slot(s) equivalent to your
                          existing funds which you can choose to keep as your
                          asset, use it, sell by yourself, or let the company
                          sell on your behalf.
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
                      Which of the bank account numbers are we supposed to pay
                      into?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          Bank Account Details:
                          <ul>
                            <li>Account Number: 0501420146</li>
                            <li>
                              Account Name: FloraHomes Global Consult Limited
                            </li>
                            <li>Bank Name: Sterling Bank</li>
                          </ul>
                          International Account number: 0501467363 (USD)
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
                      I'm ready to pay now, what's the next thing for me to do?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Register, Make payment, Activate your account. Send
                          complaint message to{" "}
                          <a href="mailto:hello.florahomesgc@gmail.com">
                            hello.florahomesgc@gmail.com
                          </a>{" "}
                          or <a href="tel:+2348094442019"> 08094442019</a>
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
                      Can you add to the investment as time goes on?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Yes. Once you acquire the first minimum units, you can
                          add any number of units as you like. Be it, 1 unit, 2
                          units , or even 1000 units... all depending on the
                          money you have.
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
                      Is there a time limit to subscribe, when is the deadline
                      to pay?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          The truth is these slots are being fastly booked and
                          that's why we said no one should pay until slots are
                          confirmed. Remember that this is land and once the
                          available slots are sold out, we will stop collecting
                          payments. This can even be today, but there's no cause
                          for alarm, go ahead and fill the form, once you have
                          your money with you, confirm if you can go ahead to
                          make the payment.
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
                      The investment part, how sure are these people?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          First, we only work with professionals and we've
                          delivered for years, you can check out customers
                          feedbacks on our website. Our professionals did their
                          best to ensure that all our lands are free from road
                          allocation, road setbacks, 3rd party claimants, wrong
                          ownership, debt, Omo-Onile issue, government
                          acquisition or any future demolition. You're also
                          indemnified against any loss whatsoever.
                          <br />
                          Secondly, there's really nothing to worry about
                          because it's land we are selling. Every unit purchased
                          is from an existing estate and anyone can buy full
                          plot and get instant physical allocation with the
                          perfect title documents. The unit slot selling is just
                          to help people, either those who wish to start small
                          or those who wish to earn through referral.
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
                      What is the return of the first Investment plan for the
                      basic Own-Earner
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Whatever slots you buy, it's land you're paying for.
                          How many slots you buy is equivalent to the number of
                          land square-meters you have. Whenever you sell your
                          land is when you'll get return and that's when you'll
                          know how much you make. Another way you can get return
                          is when you refer others and earn 10%.
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
                      What will I do with my slots and what if I'm not able to
                      reach up to 150 units?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Our goal is for you to acquire enough units that you
                          can build on. Once you have up to 150units, you can
                          build on it. If you're not able to acquire up to
                          150units in 2 years or you have far above 150 units
                          but you just wish to sell the units you have, then
                          you'll resell your slots at a profit anytime you wish,
                          as your land would have appreciated in value.
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
                      How will I sell my available slots?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          You can sell it through the company and you can sell
                          it by yourself. Whichever you want.
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
                      What are the benefits of being an Associate Partner?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          <ul>
                            <li style={{ listStyleType: "disc" }}>
                              Amazing percentage discount on subsequent purchase{" "}
                            </li>
                            <li style={{ listStyleType: "disc" }}>
                              Earning more percentage referral commission.{" "}
                            </li>
                            <li style={{ listStyleType: "disc" }}>
                              Highly subsidized billing when engaging any of our
                              services such as Design, Build and Manage, Compete
                              Buyer Service, etc{" "}
                            </li>
                            <li style={{ listStyleType: "disc" }}>
                              Business Associate Pack consisting of our brand
                              accessories.{" "}
                            </li>
                            <li style={{ listStyleType: "disc" }}>
                              Dine and Meet Executive Investor Seminar with
                              seasoned real estate professionals and Investors.{" "}
                            </li>
                            <li style={{ listStyleType: "disc" }}>
                              All paid expenses trip{" "}
                            </li>
                            <li style={{ listStyleType: "disc" }}>
                              And much more{" "}
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
                      Is it only in Lagos you have this and if yes, why? or do
                      you intend to have this package in other states across
                      Nigeria?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Yes. Only in Lagos for now. This is because some of
                          our clients both home and abroad want us to entirely
                          manage their investments for them like reselling their
                          slots/plots/building, getting tenants for the building
                          we constructed for them, managing their properties
                          etc. Therefore, we only target locations that are
                          realistic to meet customers demands and profitability.
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
                      What is the normal size for a plot of land?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          There's actually no normal size, any size of land can
                          be a plot. However a plot is generally taken as 50 by
                          100 or 60 by 120 which are approximately 450sqm and
                          648sqm respectively. When buying an estate, the sizes
                          will be according to the layout of the said estate. So
                          you can see our available sizes too on each of our
                          Estate pages. Please read more about land sizes on our
                          blog.
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
                      If I choose to be referring others, how do I go about the
                      marketing and will I get any materials for this?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          First, there is a part of the dashboard called
                          OWN-EARNER LIBRARY, Select MARKETING MATERIAL and you
                          will see available graphics, images, write-ups,
                          success-stories, videos etc from time to time, you can
                          use any of these on your social networks.
                          <br />
                          Secondly, our mode of marketing is devoid of sweet
                          talks, we want people to make their decision based on
                          personal conviction. So we want it to be a natural
                          concern of invitation from you to your loved ones.
                          Th0erefore, all you're required to do is that at
                          interval, copy any part of the content on this page,
                          few lines at a time, including the FAQ, mix it with
                          your own story and caption, talk about the many
                          benefits, talk about your personal experience
                          regarding it, encourage your friends and family to buy
                          as many as possible that they can afford. You can also
                          check our social media @FloraHomesGC, our youtube
                          channel (FloraHomes Global Consult Limited), our
                          Estate page and other pages on this website to get
                          materials.
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
                      When can I withdraw the funds in my cash wallet?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          You can withdraw at any time you wish once you've
                          earned cash commission in your wallet. This is not
                          time bound unlike the property wallet.
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
                      Can I get a refund after I've paid for the investment?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Every investment starts counting immediately after
                          payment. There is no refund except for return payout
                          or Allocation. Every payout is as clearly stated on
                          this page. You agree to all terms before payment.
                          Thank you for your partnership and support.
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
                      If I buy now at N8000, is that the amount I will keep
                      buying every time I need to buy more slots?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          No, the going rate will always be announced. This is
                          one of the advantages of buying as many slots as
                          possible when you can because land value keeps
                          appreciating and prices keep going up.
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
                      For how long do I have to pay for the full plot?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          You have 2 years to pay for the full plot. Even if
                          you're not able to pay up to the full plot, you still
                          lose nothing because you own whatever you pay for even
                          if it is just 50 units and you can resell at maturity.
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
                      What is my Estate Goal
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          This involves choosing the location, size, initial
                          payment and subsequent payment plans for your intended
                          land portfolio target
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
      <OptinModal
        header="Executive Property Own-Earner Investment"
        error_msg={bookingDetail.error_msg}
        setbookingDetail={setbookingDetail}
        data={bookingDetail.bookings_data}
        exec={true}
        componentId="exec"
        component={
          <InestmentReusableForm
            // loading={loading}
            formData={formData}
            setformData={setformData}
            handleSubmit={handleSubmit}
            useAddress={true}
            useBudget={true}
            useDate={true}
            first_p="Hello and congratulations for coming across this."
            second_p="It's important to note that there are very limited slots available for our Executive Own-Earner Investment. Therefore, before making any payment into our company account, do ensure you confirm slot(s) availability to avoid any issue."
          />
        }
      />
      <OptinModal
        header="Own-Earner Investment"
        error_msg={bookingDetail.error_msg}
        setbookingDetail={setbookingDetail}
        data={bookingDetail.bookings_data}
        componentId="own"
        own={true}
        component={
          <InestmentReusableForm
            // loading={loading}
            formData={formData}
            setformData={setformData}
            handleSubmit={handleSubmit}
            use_balance_payment={true}
            use_discount={true}
            use_est_name={true}
            use_land_size={true}
            use_no_of_units={true}
            use_no_of_units_every_sub={true}
            use_no_of_units_unpaid={true}
            use_sub_plan={true}
            use_amount_of_first_purc={true}
            useDate={true}
            first_p="Start your journey to be part of millions of Nigerian Landbankers Across The Globe."
          />
        }
      />
      <OptinModal
        setbookingDetail={setbookingDetail}
        componentId="optinForm"
        header="Property Optin form"
        component={<OptinForm />}
      />
      <OptinModal
        setbookingDetail={setbookingDetail}
        componentId="client_eng"
        client_eng={true}
        header="Client Engagement Form"
        component={
          <ClientEngagementForm
            formData={formData}
            setformData={setformData}
            handleSubmit={handleSubmit}
          />
        }
      />
    </>
  );
};

export default Investment;
