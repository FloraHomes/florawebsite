import React, { useState } from "react";

// import cpbs from "../../assets/productAssets/cpbs.png";
import background from "../../assets/background.jpg";
import price_table from "../../assets/price_table.png";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import { useDispatch, useSelector } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import EngageInService from "../../SharedComponents/EngageInService";
import partner from "../../assets/partner2.jpg";

const CompleteBuyer = () => {
  const [consultationDetails, setconsultationDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsaap_number: "",
    category: "",
    est_of_interest: "",
    contact_me: "",
    message: "",
    how_you_hear_about_us: "",
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.verificationConsultation
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(makeConsultation(consultationDetails));
    setconsultationDetails({
      full_name: "",
      email: "",
      phone_number: "",
      whatsaap_number: "",
      category: "",
      est_of_interest: "",
      contact_me: "",
      message: "",
      how_you_hear_about_us: "",
    });
  };
  return (
    <>
      <section style={{ background: "#541484" }}>
        <div className="heading-container">
          <h1 style={{ color: "#fff" }}>
            Even if you are a guru in property transactions... <br />
            Even if you've been buying properties for countless times… <br />
            And even if this is your first time purchasing property...
          </h1>
        </div>
        <div className="heading-paragraph">
          <p>
            {" "}
            When we handle your interest or existing property transactions, we
            would be responsible for any 3rd party claimants, disputes,
            collateral issues, demolition issues, fake estate developers,
            Omo-Onile wahala, government acquisition, structural defects or
            potential scams of your investments for the next
            <span style={{ fontWeight: "bold" }}> 50years.</span>
          </p>
        </div>
        <div
          class="btn-box veriff-first"
          style={{
            display: "block",
            // marginRight: "10px",
            textAlign: "center",
          }}
        >
          <button
            data-toggle="modal"
            data-target="#landingModal"
            class="theme-btn btn-style-four mb-4 mt-3"
          >
            <span class="btn-title">REQUEST A CALL-BACK NOW</span>
          </button>
        </div>
        <div
          className="phone-number"
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          <a href="tel:+2348094442019 " className="call-link-one">
            {" "}
            CLICK HERE TO CALL{" "}
          </a>
        </div>
        {/* <div className="img verification"> */}
        {/* <h4
          className="text-center"
          style={{ marginBottom: "20px", color: "white" }}
        >
          Affiliated Professional Bodies
        </h4> */}
        <img
          id="firstP"
          style={{ top: "-20px" }}
          className="mt-4"
          src={partner}
          alt="partners"
        />
        {/* </div> */}

        <div className="heading-paragraph">
          <p>
            {" "}
            Let us help you to prevent any form of present or future losses on
            your Real Estate Investments before you pay for your next interest
            property.
          </p>
          <p>
            {" "}
            If you have existing properties, let us help you perfect all your
            documents the right way so as to secure your property at 100% and to
            prevent any likelihood of future disputes, government claimants,
            demolition, penal fees etc
          </p>
        </div>
      </section>
      <section>
      <div className="auto-container">
        <div className=" content-column col-lg-12">
          <p>How it works</p>
          <ul className="list-style-decimal">
            <li>
              Our Property Acquisition team made up of professionals:
              Researchers, Estate Surveyors, Land Surveyors, Property Lawyers,
              Town Planners, Civil Engineers, etc are set to help you secure
              your property at 100% done for you whether you are an individual,
              developer company or corporate investors.
            </li>
            <li>
              When you allow us to carry out the 7 property purchase stages:
              Sourcing, Verification, Valuation, Negotiation, Payment, Survey,
              and Documentation… 100% on your behalf, you have our assurance for
              the next 50 years. And, if there is any matter that arises after
              our delivery between this period. We would refund your investment
              capital.
            </li>
            <li>
              <div
                class="btn-box"
                style={{ display: "inline", marginRight: "10px" }}
              >
                <button
                  data-toggle="modal"
                  data-target="#landingModal"
                  class="theme-btn btn-style-four mb-4 mt-3"
                >
                  <span class="btn-title">REQUEST A CALL-BACK NOW</span>
                </button>
              </div>
              <div className="phone-number">
                <a href="tel:+2348094442019 " className="call-link-two">
                  {" "}
                  OR CLICK HERE TO CALL{" "}
                </a>
              </div>
            </li>
          </ul>

          {/* <p style={{ fontWeight: 'bold' }}>
                So how exactly do you know the genuinity of a property?
              </p> */}
        </div>
        </div>
      </section>

      <h4 align="center">
        <b>Direct agent vs complete property buyer service</b>
      </h4>
      <br />
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <br />
              <div
                className="table-responsive"
                id="verification-table"
                style={{ display: "block" }}
              >
                <table className="table table-bordered table-center">
                  <thead style={{ backgroundColor: "#fff", color: "#3A005F" }}>
                    <tr>
                      <th scope="col" />
                      <th scope="col">Agent</th>
                      <th scope="col">Complete Property Buyer Service </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "white" }}>
                    <tr>
                      <td>1</td>
                      <td>
                        Agents inform you of all the property sourced even if
                        they are 20 in number.
                      </td>
                      <td>
                        Agents inform us of all the property sourced, we carry
                        out our first level verification on them and send you a
                        report for only the verified shortlist.
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>You visit all sites with the agents.</td>
                      <td>
                        We first send you exterior drone-shot and interior
                        videos of the verified properties and you can decide
                        which one you want to visit or if we should go ahead
                        with the next level verification.
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>You receive your reports verbally</td>
                      <td>
                        You receive your reports as written, pictorial and video
                        format with professional advice on the advantages and
                        disadvantages of each of the properties.
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        You struggle to get either a competent surveyor and/or
                        lawyer for your verification after getting the property
                        you want.
                      </td>
                      <td>
                        We take the stress off you and we engage not just a land
                        surveyor and a lawyer, we engage experienced property
                        professionals such as Estate Surveyors, Land Surveyors,
                        Property Lawyers, Town-Planners, Researchers, Civil
                        Engineers, Investigative Journalists etc in order to
                        ensure that nothing is left unchecked that could lead to
                        unexpected losses.
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>You pay your agent after closing</td>
                      <td>
                        You pay a one time fee to us and we pay every agent we
                        engage for the property sourcing.
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        Structural defects and flooding susceptibility not
                        usually checked
                      </td>
                      <td>
                        All quality checks carried out by construction
                        professionals at no extra cost.
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>You pay every other professionals</td>
                      <td>
                        We take care of all our professionals through the same
                        one time payment{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        You can only make your final decision when you visit
                        site
                      </td>
                      <td>
                        You have the opportunity to make your final decision in
                        any location you might be.
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        You might face price extortion even through your most
                        trusted people.
                      </td>
                      <td>
                        There's no such thing happening as we carry out
                        valuation and also meet directly with all who are
                        involved to dig the truth and get the best price from
                        the seller.
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>
                        Your agent do not engage property value assessment nor
                        negotiate on your behalf
                      </td>
                      <td>
                        We do all these and more and we even refund change to
                        our clients when there's extra.
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>
                        You'll be looking for another lawyer to be drafting and
                        executing your deed.
                      </td>
                      <td>
                        Our experienced property lawyers will do that under our
                        supervision without you saying anything and without any
                        extra aside from how it's spelt out on this page.
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>
                        You'll be looking for a qualified surveyor to do your
                        survey.
                      </td>
                      <td>
                        We already got you covered at 100% without stress.
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>You'll be concerned on how to perfect your title.</td>
                      <td>
                        We'll get all these done for you because it's part of
                        the complete service.
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>You may worry about getting all your documents.</td>
                      <td>
                        We use DHL as a means of conveyance between us and you.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <br />
              {/* <h3 style={{color: 'white'}}><b>INTRODUCING THE COMPLETE PROPERTY BUYER SERVICE (CPBS)</b></h3><br /> */}
              <p style={{ color: "white" }}>
              At FloraHomes Global Consult Limited, we affirm our capacity to handle your property purchase transactions based on your specific needs at 100% fully strategized and executed on your behalf. Our property acquisition team is always available and ready to help prospective property buyers handle their property purchase from start to finish either land or building, within Estate or with Omo-Onile, for individual, estate developers or corporate large expanse rendered across different states in Nigeria. This involves full execution of the buyer task through all the 7 stages of property purchase: Sourcing, Verification, Valuation, Negotiation, Payment, Survey, and Documentation… all done at 100% on behalf of the client.

              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "none" }}>
          <div className="container">
            <div className="text-center">
              <div className="btn-box">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform"
                  className="theme-btn btn-style-four"
                >
                  <span className="btn-title">Engage Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      <br />
      <div className="auto-container">
        <h4>
          <b>Benefits</b>
        </h4>
        <ul className="list-style-one">
          <li>
            Our sourcing process involves detailed consideration of the
            investment purpose, location, landmarks, futuristic assessment while
            considering the client's needs.
          </li>
          <li>
            We ensure that any property to be purchased has a perfect title that
            can be easily processed and perfected to our client's credentials at
            the appropriate ministry to prevent any 3rd party claimants,
            disputes, eviction, or any other related losses.
          </li>
          <li>
            There's no price extortion as we close all loopholes between agents
            and their sellers.
          </li>
          <li>The verification exercise will include but not limited to; </li>
          <ul className="list-style-two" style={{ marginLeft: "40px" }}>
            <li>
              The site and surveyor general statuses of any property to be
              purchased.
            </li>
            <li>
              Dispute and encumbrance check: both field and desk checks at the
              appropriate ministries.
            </li>
            <li>Document checks: for fake, incomplete or original document</li>
            <li>Ownership authentication </li>
            <li>
              Road setback conformity through both states and federal
              masterplan.
            </li>
            <li>Government-approved uses versus buyer's intending uses.</li>
            <li>Flooding susceptibility, and Structural tests, internal and external building defect checks etc </li>
            <li>Measuring the sizes of the land, site, rooms and all spaces within the property.</li>
            <li>And so on...</li>
          </ul>
          <li>
            Client gets detailed reports at different stages of the service for
            client’s review and approval
          </li>
          <li>
            Our client's deed of assignment is prepared with such detail to
            indemnify such client.
          </li>
          <li>
            Site and documents assessment by the company Valuer as a basis for
            Negotiation{" "}
          </li>
          <li>Services executed and delivered between 20- 30 working days</li>
          <li>VIP delivery of 10 -15 days</li>
          <li>We engage video inspections for client's convenience.</li>
          <li>
            After closing, we execute the survey and begin full documentation to
            prevent any after purchase claimants.
          </li>
          <li>
            We deploy only qualified property professionals to handle our
            clients' projects.
          </li>
          <li>
            Everything is done for you 100% according to specification, taste
            and budget.
          </li>
          <li>
            It is stress free, great value for less stress and you have more
            time to focus on other things that matter to you.
          </li>
          <li>
            You have the opportunity to always receive our first hand
            information about our newly released verified and well negotiated
            deals direct from our property owner/Omo-Onile partners.
          </li>
          <li>You have a dedicated personal customer care personnel. </li>
        </ul>
        <br />
      </div>

      {/* <br /> */}
      <div className="auto-container">
        <lable>
          <b>
            Can you see how you'll experience a 100% service delivery with just
            a 1 time payment of the professional fees that will be paid after
            the service is fully delivered?
          </b>
        </lable>
        <br />
        <p
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Period of engagement
        </p>
        <ul
          className="ul-text-dark"
          style={{ color: "white", marginLeft: "20px" }}
        >
          <li style={{ listStyleType: "decimal", marginBottom: "10px" }}>
            This Service shall be executed between 20 - 30 working days from the
            day of payment.
          </li>
          <li style={{ listStyleType: "decimal" }}>
            VIP delivery shall be executed between 10 - 15 working days from the
            day of payment.
          </li>
        </ul>
        <br />
        <br />
        <h4 align="center">
          <b>Professional fees</b>
        </h4>
        {/* <br /> */}
      </div>
      {/* <br /> */}
      <img src={price_table} width="100%" className="P2" alt="price_table" />
      <br />
      <section style={{ backgroundImage: `url(${background})` }} className="P1">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <div className="table-responsive" id="verification-table">
                <table className="table table-bordered table-center">
                  <thead style={{ backgroundColor: "#fff", color: "#3A005F" }}>
                    <tr>
                      <th scope="col">Property Worth (Naira)</th>
                      <th scope="col">Service Charge</th>
                      <th scope="col">VIP Charge</th>
                      <th scope="col">
                      For Developers, Corporates, Cooperatives and Off takers
                      </th>
                      {/* <th>Legal</th> */}
                    </tr>
                  </thead>
                  <tbody style={{ color: "white" }}>
                    <tr>
                      <td>Less or equal to 500m</td>
                      <td>10% purchase price</td>
                      <td>15% purchase price</td>
                      <td rowSpan={4}>
                        <br />
                        <br />
                        <br />
                        Service Charge open for negotiation.
                      </td>
                      {/* <td rowSpan={4}>
                        <br />
                        <br />
                        <br />
                        5% overall purchase{" "}
                      </td> */}
                    </tr>
                    <tr>
                      <td>500m - 1b</td>
                      <td>9% purchase price</td>
                      <td>13% purchase price</td>
                    </tr>
                    <tr>
                      <td>1b - 5b</td>
                      <td>8% purchase price</td>
                      <td>10% purchase price</td>
                    </tr>
                    <tr>
                      <td>Above 5b</td>
                      <td>7%</td>
                      <td>8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="auto-container">
        <ul className="list-style-two">
          <li>
            Clients pays a refundable commitment fee of N100,000 after filling
            the interest form.
          </li>
          <li>Client pays all statutory fees as well as other ancillary expenses relating to taking property possession, Survey and title perfection, etc.</li>
          {/* <li>
            The service charge is for Sourcing, Verification, Valuation,
            Negotiation and Payment.
          </li>
          <li>
            The legal fee is for vetting of closure documents, production of
            contractual documents and execution of contractual documents.
          </li>
          <li>
            Client pays all statutory fees as well as other ancillary expenses
            relating to taking property possession, Survey and title perfection,
            etc.
          </li> */}
        </ul>
        <br />
        {/* <EngageInService
          first_step="Enter Your Detail Now To Request A Call-Back"
          second_step="  Make Payment."
          third_step="    Submit Service Information."
          fourth_step=" Connect with Your Personal Manager."
          call_to_action={
            <div
              class="btn-box"
              style={{
                display: "block",
                marginRight: "10px",
                textAlign: "center",
              }}
            >
              <button
                data-toggle="modal"
                data-target="#landingModal"
                class="theme-btn btn-style-three mb-4 mt-3"
              >
                <span class="btn-title">REQUEST A CALL-BACK NOW</span>
              </button>
            </div>
          }
          call_to_action2={
            <div
              className="phone-number"
              style={{
                color: "#ed6c11",
                textAlign: "center",
                display: "block",
              }}
            >
              <a href="tel:+2348094442019 " className="call-link-two">
                {" "}
                OR CLICK HERE TO CALL{" "}
              </a>
            </div>
          }
        />
        <hr
          style={{
            border: "1px solid red",
            marginBottom: "10px !important",
            marginTop: "15px !important",
          }}
          id="horizontal_line"
        /> */}
        {/*  <h5><b>CONTACTS:</b></h5><br>
                    <p>Mail: hello.florahomesgc@gmail.com Number: +234 809 444 2019, +234 802 442 1356</p><br> */}
        {/* <h5 style={{ marginTop: "13px" }}>
          <b>WHO WE ARE:</b>
        </h5>
        <p>
          We are Nigeria's No. 1 Property Verification and Real Estate
          Investment company that gives professional end to end Real Estate and
          Property Development services across Nigeria through our experienced
          and ethical team of professionals which includes but not limited to;
          Land Surveyors, Estate Surveyors, Town Planners, Property Lawyers,
          Quantity Surveyors, Civil Engineers, Architects, Researchers. . .{" "}
        </p>
        <br />
        <br />
        <h5>
          <b>WE ARE KNOWN FOR:</b>
        </h5>
        <ul className="list-style-one">
          <li>
            Leading at providing the best real estate verification services
            across Nigeria that indemnifies buyers against both present and
            future losses of any kind.
          </li>
          <li>
            Offering end to end 100% done-for-you real estate and property
            development services to existing and aspiring stakeholders be it
            individuals, developers, organisations, clubs, groups.
          </li>
          <li>
            Delivering simplified quality information to the mobile phones of
            every property investor using technology.
          </li>
          <li>
            Engaging in community and town planning that protect against life
            and property loss.
          </li>
          <li>
            Engaging green architecture that revitalizes every soul occupying
            the space.
          </li>
          <li>
            Ensuring all properties to be traded or to be developed go through a
            thorough Verification process so as to replace loss and fear with
            trust and peace in the minds of stakeholders.{" "}
          </li>
          <li>
            Giving excellent service and quality of materials that ensure all
            investments are aimed at futuristic sustainability and not just for
            short term advantage.
          </li>
          <li>
            Ensuring timely delivery that produces optimum return on fund input.
          </li>
          <li>
            Delivering excellent physical equivalents in any of our models.
          </li>
          <li>
            Ensuring confidentiality and security that protects us and our
            customers from danger through exposure.
          </li>
        </ul> */}
      </div>
      <PaymentDetails />
      <LandingPageOptinForm
        onSubmit={onSubmit}
        consultationDetails={consultationDetails}
        setconsultationDetails={setconsultationDetails}
        data={data}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default CompleteBuyer;
