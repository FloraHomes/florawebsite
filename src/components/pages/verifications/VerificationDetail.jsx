import React, { useEffect, useState } from 'react';
import tawkTo from 'tawkto-react';
import './style.css';
import partner from '../../assets/partner2.jpg';
// import optin_bg from "../../assets/optin-bg.jpg"
// import verification from "../../assets/verification.png";
// import background from "../../assets/background.jpg";
import price from '../../assets/price.png';
// import iconShape from "../../assets/icon-shape.png";
import PaymentDetails from '../../SharedComponents/PaymentDetails';
import LandingPageOptinForm from '../../SharedComponents/LandingPageOptinForm';
import EngageInService from '../../SharedComponents/EngageInService';
import { useDispatch } from 'react-redux';
import makeConsultation from '../../../actions/verificationConsultation';
import { useSelector } from 'react-redux';
import VerificationPriceTable from '../../tables/VerificationPriceTable';
import PriceTable from '../../tables/PriceTable';
import ReviewCard from '../../bootstrap-components/ReviewCard';
import Carousel from '../../bootstrap-components/Carousel';
import user1 from '../../assets/productAssets/user1.jpg';
import user2 from '../../assets/productAssets/user2.jpg';
import user3 from '../../assets/productAssets/user3.jpg';
import user4 from '../../assets/productAssets/user4.jpg';
// import Footer from "../../layouts/Footer";

const VerificationDetail = () => {
  const tawkToPropertyId = '5a9e51824b401e45400d70e9';

  // Direct Chat Link
  // https://tawk.to/chat/tawkToPropertyId/tawkToKey
  const [reviewCardData, setReviewCardData] = useState([
    {
      user_name: 'Muhammad Abdullahi',
      review:
        'I found the florahomes team to be very trustworthy and pro-active. I had the opportunity of exploring a few of their services and I was impressed as to the painstaking diligence at which value was created and delivered. In an environment where trust is hard to come by, my experience with FloraHomes was both rewarding and satisfactory.',
      image: user1,
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
    },
    {
      user_name: 'Idris Shafe',
      review:
        'This is the third verification I am doing with FloraHomesGC. It baffles me know that it is the only one of three Lands that is to an extent safe. Thanks goodness they help me uncovered this early enough and come to my rescue.',
      image: user2,
    },
    {
      user_name: 'Engr Charles',
      review:
        "I wanted to buy a land that was recommended by a friend on my last visit to Nigeria. Then stumbled on your 10 property Investment Checklist that opened my eyes in uncovering that the land wasn't genuine. What struck me most was what's on land document doesn't represent the actual land when I picked the coordinate",
      image: user3,
    },
    {
      user_name: 'Otunba Olanrewaju',
      review:
        'FloraHomes is a real estate company that treat their customer with so much respect, they are interested in making sure you are rightly guided and also they provide professional advice to prospective and existing customers. I simply go to sleep with both of my eyes close each time I have dealings with them. I will recommend them 100%.',
      image: user4,
    },
  ]);
  const tawkToKey = '1cit1c3m8';

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  const [consultationDetails, setconsultationDetails] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    whatsaap_number: '',
    category: '',
    est_of_interest: '',
    contact_me: '',
    message: '',
    how_you_hear_about_us: '',
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.verificationConsultation);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(makeConsultation(consultationDetails));
    setconsultationDetails({
      full_name: '',
      email: '',
      phone_number: '',
      whatsaap_number: '',
      category: '',
      est_of_interest: '',
      contact_me: '',
      message: '',
      how_you_hear_about_us: '',
    });
  };

  return (
    <>
      <section style={{ background: '#541484' }}>
        <div className='heading-container'>
          <h1>Don't Lose Your Money, Let Us Help You Verify Your Real Estate Investment.</h1>
        </div>
        <div className='heading-paragraph'>
          <p>
            When we verify your property, you will have 50 YEARS WARRANTY against; any demolition
            issues, dispute issues, encumbrance issues, 3rd party claimants, government acquisition,
            structural defects, any property related losses and any potential scams of your
            investments.
          </p>
        </div>
        <div
          className='btn-box veriff-first'
          style={{
            display: 'block',
            // marginRight: "10px",
            textAlign: 'center',
          }}
        >
          <button
            data-toggle='modal'
            data-target='#landingModal'
            className='theme-btn btn-style-four mb-4 mt-3'
          >
            <span className='btn-title'>CONTACT US NOW</span>
          </button>
        </div>
        <div
          className='phone-number'
          style={{
            textAlign: 'center',
            display: 'block',
          }}
        >
          <a href='tel:+2348094442019 ' className='call-link-one'>
            {' '}
            CLICK HERE TO CALL{' '}
          </a>
        </div>
        {/* <div className="img verification"> */}
        {/* <h4
          className="text-center"
          style={{ marginBottom: "20px", color: "white" }}
        >
          Affiliated Professional Bodies
        </h4> */}
        <img id='firstP' style={{ top: '-20px' }} className='mt-4' src={partner} alt='partners' />
        {/* </div> */}
      </section>
      <section>
        <div className='content-column col-lg-12'>
          <p>Welcome to Nigeria</p>
          <ul className='list-style-decimal'>
            <li>
              where just doing "property search" or sending "Surveyors" to the land are no longer
              sufficient to keep you away from impending property losses and scams.
            </li>
            <li>
              where you won't have public access to certain property regulations until you're about
              to be penalised for an offence you didn't know you committed.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className='content-column col-lg-12'>
          <p>
            Join the league of over 1000 Smart Property Investors who have trusted us to protect
            their real estate investments.
          </p>
          <ul className='list-style-decimal'>
            <li style={{ listStyle: 'none' }}>
              Don't be a victim of fake C of O, fake Excision, fake Allocation, encumbered property,
              internal and external disputes, government acquisition, title issues, unregistered
              title issues, unregistered disputes, property encroaching road, wrong uses, incomplete
              documentation, fake "title under processing", price extortion, building with defective
              structure, property that is susceptible to flooding, untruthful professionals, dubious
              agents, dubious developers, greedy Omo-Onile, property with multiple owners or any
              potential scams of your investments.
            </li>
            <li style={{ listStyle: 'none' }}>
              Let us run a complete property verification for your Real Estate Investments
              irrespective of your location and get up to 50 years warranty for your property.
            </li>
          </ul>
        </div>
      </section>

      {/*  */}
      <section>
        <VerificationPriceTable />
      </section>
      <section>
        <div className=' content-column col-lg-12'>
          <p>How it works</p>
          <ul className='list-style-decimal'>
            <li>
              Our verification team made up of professionals: Estate Surveyors, Land Surveyors,
              Property Lawyers, Town Planners, Civil Engineers, Investigative Journalist,
              Architects, Builders, Quantity Surveyors, etc are set to help individuals and
              corporate investors to verify their land and building of interest before making
              payment for it.{' '}
            </li>
            <li>
              At the completion of our verification exercise, if the subject property is closable
              and/or perfectable, in addition to the other post-verification activities that must be
              executed, this property will as well be protected under our professional indemnity
              cover (insurance) for the next 50 years. If any losses occur within this period, we
              would be fully responsible for your property investment at zero contribution from you.
              And when nothing happens within this 50 years, you can be sure that nothing will
              happen thereafter. You have 100% guaranteed safe property investments with us.
            </li>
            <li>Fill the form now to Request A Call-Back.</li>
            <li>
              <div className='btn-box' style={{ display: 'inline', marginRight: '10px' }}>
                <button
                  data-toggle='modal'
                  data-target='#landingModal'
                  className='theme-btn btn-style-four mb-4 mt-3'
                >
                  <span className='btn-title'>REQUEST A CALL-BACK NOW</span>
                </button>
              </div>
              <div className='phone-number'>
                <a href='tel:+2348094442019 ' className='call-link-two'>
                  {' '}
                  OR CLICK HERE TO CALL{' '}
                </a>
              </div>
            </li>
          </ul>

          {/* <p style={{ fontWeight: 'bold' }}>
                So how exactly do you know the genuinity of a property?
              </p> */}
        </div>
      </section>
      {/*  */}
      <section className='' style={{ background: '#541484' }}>
        <div className='auto-container'>
          <p
            style={{
              fontWeight: 'bold',
              color: '#ed6c11',
              fontSize: '20px',
              paddingTop: '30px',
            }}
          >
            Our property verification includes but not limited to the following:
          </p>

          <ul className='list-style-two ul-text-white' style={{ color: 'white' }}>
            <li>
              Physical land inspection with our land experts for picking Coordinates, and engaging
              in other field research.
            </li>
            <li>
              Correlating the document data with the actual site location data and determining the
              actual status of the land.
            </li>
            <li>Competitive analysis of similar adjoining Properties.</li>
            <li>Coordinate Charting at Surveyor General's office for updated information.</li>
            <li>A comprehensive examination of all documents</li>
            <li>Confirming other government Property requirements</li>
            <li>
              Checking for unregistered titles, disputes, transfers, encumbrance, ownerships etc.
            </li>
            <li>Authentication of the claimed title.</li>
            <li>Authenticating the property ownership</li>
            <li>Unveiling any possible third-party ownership claims.</li>
            <li>Unraveling the property history.</li>
            <li>Root of title research</li>
            <li>Checking of taxes or collateral issues</li>
            <li>Checking any internal dispute.</li>
            <li>Examining the Structural state of the interest building.</li>
            <li>Flooding susceptibility check.</li>
            <li>Confirming all documents in relation to the structure.</li>
            <li>Ensure interest land use tally with existing use</li>
            <li>Confirming the site plan is in conformity with approved layout plan</li>
            <li>Confirming all planning tallies with the state master plan.</li>
            <li>Etc</li>
          </ul>
          <li style={{ color: '#ffff', listStyle: 'none' }}>FILL THE FORM NOW TO GET STARTED.</li>
          <div className='btn-box' style={{ display: 'inline', marginRight: '10px' }}>
            <button
              data-toggle='modal'
              data-target='#landingModal'
              className='theme-btn btn-style-four mb-4 mt-3'
            >
              <span className='btn-title'>CONTACT US NOW</span>
            </button>
          </div>
          <div className='phone-number'>
            <a href='tel:+2348094442019 ' className='call-link-one'>
              {' '}
              OR CLICK HERE TO CALL{' '}
            </a>
          </div>

          {/* <div className="content-column">
            <div className="inner-column">
              <div className="row">
                a comment: Bullet Listing Column 
                <div className="affiliate-block col-lg-12 col-md-12">
                  <div className="sec-title">
                    <h2 className="text text-light">ONLY WHEN EVERY REQUIRED LANDED PROPERTY PROFESSIONALS COME TOGETHER TO TAKE EVERY SINGLE PROPERTY THROUGH PROPER VERIFICATION PROCESSES…
                    </h2>
                    <h2 className="text text-light">
                      But Wait, Who are these professionals and What does the process entail?
                    </h2>
                  </div>
                </div>
              </div>
             a coment start: <div className="row">

                            <div className="container">

                                <div className="text-center">

                                    <div className="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" className="theme-btn btn-style-four"><span className="btn-title">Engage Service</span></a></div>

                                </div>

                            </div>

                       ends: </div>

            </div>
          </div> */}
        </div>
      </section>
      {/*       
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 mt-5 mb-5">
              comment: sana 
              <p>
                Due to the prevalence of demolition, eviction, dispute, collapse and scam issues relating to landed properties, our verification team which include but not limited to Estate Surveyors, Land Surveyors, Property Lawyers, Town-Planners, Civil Engineers, Architects, Researchers etc set out to help individuals and corporate investors to verify and clear their subject of interest either before paying for the new found property or for already existing property against government acquisition, title issues, ownership issues, Omo-Onile wahala, uses issues, dispute, third party claimants, structural defects etc. This we achieve by taking such properties through our systemised verification checklist.
              </p>
              <h5>
                Where else do you want to do your property verification aside from FloraHomesGC, the most trusted property verification company in Nigeria with the right hands, qualifications and years of experience?
              </h5>
              <br />
              <h2><b>Our property verification includes but not limited to the following:</b></h2>
              <br /><br />
              <h5> <b>1) STATUS VERIFICATION: This involves confirming if the land ( either unbuilt or built) is free from any government commitment.</b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>Physical land inspection with our land experts for picking Coordinates, and engaging in other field research.</li>
                <li>Correlating the document data with the actual site location data and determining the actual status of the land.
                </li>
                <li>Competitive analysis of similar adjoining Properties.</li>
                <li>Coordinate Charting at Surveyor General's office for updated information.</li>
              </ul>
              <br /><br />
              <h5> <b>2) TITLE &amp; OWNERSHIP VALIDATION (TOV): This involves confirming the genuity of the acclaimed property title, checking for debt, encumbrances or dispute of any kind, as well as confirming the real ownership of the said property.</b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>A comprehensive examination of all documents
                </li>
                <li>Confirming other government Property requirements
                </li>
                <li>Authentication of the claimed title.</li>
                <li>Authenticating the property ownership</li>
                <li>Unveiling any possible third-party ownership claims.</li>
                <li>Unraveling the property history.</li>
                <li>Root of title research</li>
                <li>Checking of taxes or collateral issues</li>
                <li>Checking any internal dispute.</li>
                <li>Presentation of Report at the end of the exercise.</li>
              </ul>
              <br /><br />
              <h5> <b>3)BUILDING DOCUMENTS, LAND USES &amp; STRUCTURAL VERIFICATION: All documents regarding building regulation are vetted, land uses that ensure structures are fixed according to regulated plans and the structure is vetted to ascertain that there's no structural weaknesses that may lead to collapse, meeting all standard regarding futuristic investment. Contradicting these plans usually lead to demolition, collapse, eviction or paying penal-fees. </b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>Confirming all documents in relation to the structure.
                </li>
                <li>Ensure interest land use tally with existing use
                </li>
                <li>Confirming the site plan is in conformity with approved layout plan
                </li>
                <li>Confirming all planning tallies with the state master plan.
                </li>
                <li>Examining the Structural state of the interest building.
                </li>
                <li>Flooding susceptibility check.
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section style={{ backgroundImage: `url(${background})` }}> */}
      <section>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-12'>
              <section>
                <div className='d-flex  w-100 align-items-center justify-content-center'>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: '20px',
                      marginTop: '20px',
                      textAlign: 'left',
                      // margin: 'auto',
                      width: '100%',
                    }}
                    className='mt-5'
                  >
                    WHAT CUSTOMERS SAY ABOUT US
                  </p>
                </div>
                <div className='col-lg-12'>
                  <Carousel data={reviewCardData} />
                </div>
                <div className='col-lg-12 pt-5 pb-5 text-white'>
                  {/* <p style={{ color: 'white' }}> You're still waiting…
              </p> */}
                  {/* <p style={{ color: 'white' }}>
                We say
                Don't be a victim of fake C of O, fake Excision, fake Allocation, encumbered property, internal and external disputes, committed acquisition, property encroaching road, wrong uses, incomplete documentation, fake "title under processing", price extortion, building with defective structure, property that is susceptible to flooding, untruthful professionals, dubious agents, dubious developers, greedy Omo-Onile, property with multiple owners and many other issues…
              </p> */}
                  <h5 style={{ color: 'black' }}>
                    <b>More Benefits</b>
                  </h5>
                  <br />
                  <ul className='list-style-two ul-text-dark'>
                    <li>
                      It protects you against scam, eviction, encumbrance, demolition or any kind of
                      property losses.
                    </li>
                    <li>You get peace of mind on your property.</li>
                    <li>Services are executed and delivered promptly.</li>
                    <li>
                      When your property is 100% protected, it translates to a guaranteed increase
                      in the property value as well.
                    </li>
                    <li>There's ease of title transfer anytime there is need to.</li>
                    <li>
                      We deploy only experienced and qualified property professionals to handle our
                      clients' projects so you have no fear of losses due to quackery.
                    </li>
                    <li>Everything is done on your behalf 100%</li>
                    <li>We produce and execute the pre-purchase agreement and documentation.</li>
                    <li>
                      You enjoy stress-free, great value for less stress and you have more time to
                      focus on other things that matter to you.
                    </li>
                    <li>
                      We give you a perfect understanding of the true status of your interest
                      property to create for you a good basis for negotiation
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            {/* <section> */}
            <div className='col-lg-12 pt-5 pb-5 text-white flex-col justify-content-center align-items-center w-100'>
              <p
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '20px',
                  marginTop: '20px',
                  textAlign: 'center',
                  margin: 'auto',
                }}
              >
                ENTER YOUR DETAIL NOW TO GET STARTED
              </p>
            </div>

            <section>
              <PriceTable />
            </section>
            {/* </section> */}
          </div>
        </div>
      </section>
      {/*dont del  <section>
        <div className='content-column col-lg-12'>
          <ul className='list-style-two '>
            <li>1ST STEP: Enter Your Detail Now To Request A Call-Back</li>
            <li>2ND STEP: Make Payment.</li>
            <li>3RD STEP: Submit Service Information.</li>
            <li>4TH STEP: Connect with Your Personal Manager.</li>
          </ul>
        </div>
      </section> */}
      <section>
        <div className='auto-container'>
          <h5 style={{ color: 'black', fontSize: '30px' }}>
            <b>How To Engage This Service</b>
          </h5>
          <p
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '20px',
              marginTop: '20px',
            }}
          >
            Verification is not just about
          </p>
          <ul className='list-style-two ul-text-dark'>
            <li>1ST STEP: Enter Your Detail Now To Request A Call-Back</li>
            <li>2ND STEP: Make Payment.</li>
            <li>3RD STEP: Submit Service Information.</li>
            <li>4TH STEP: Connect with Your Personal Manager.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className='auto-container'>
          <h6 style={{ color: 'black', fontSize: '30px', textAlign: 'center' }}>
            <b>NOW IT'S TIME TO TAKE YOUR FIRST STEP</b>
          </h6>
          <p>
            ENGAGE THIS SERVICE TO HAVE PEACE OF LANDED INVESTMENT, CLICK THIS BUTTON NOW TO REQUEST
            A CALL-BACK
          </p>
        </div>
      </section>
      <section>
        <div className='auto-container'>
          <h5 style={{ color: 'black', fontSize: '30px' }}>
            <b>Who we are</b>
          </h5>
          <p>
            We are Nigeria's No. 1 Property Verification and Real Estate Investment company that
            gives professional end to end Real Estate and Property Development services across
            Nigeria through our experienced and ethical team of professionals which includes but not
            limited to; Land Surveyors, Estate Surveyors, Town Planners, Property Lawyers, Quantity
            Surveyors, Civil Engineers, Architects, Researchers. . .
          </p>
          <h5 style={{ color: 'black', fontSize: '30px' }}>
            <b>WE ARE KNOWN FOR:</b>
            <ul className='list-style-two ul-text-dark'>
              <li>
                Leading at providing the best real estate verification services across Nigeria that
                indemnifies buyers against both present and future losses of any kind.
              </li>
              <li>
                Offering end to end 100% done-for-you real estate and property development services
                to existing and aspiring stakeholders be it individuals, developers, organisations,
                clubs, groups.
              </li>
              <li>
                Delivering simplified quality information to the mobile phones of every property
                investor using technology.
              </li>
              <li>
                Engaging in community and town planning that protects against life and property
                loss.
              </li>
              <li>Engaging green architecture that revitalises every soul occupying the space.</li>
              <li>
                Ensuring all properties to be traded or to be developed go through a thorough
                Verification process so as to replace loss and fear with trust and peace in the
                minds of stakeholders.
              </li>
              <li>
                Giving excellent service and quality of materials that ensure all investments are
                aimed at futuristic sustainability and not just for short term advantage.
              </li>
              <li>Ensuring timely delivery that produces optimum return on fund input.</li>
              <li>Delivering excellent physical equivalents in any of our models.</li>
              <li>
                Ensuring confidentiality and security that protects us and our customers from danger
                through exposure.
              </li>
            </ul>
          </h5>
        </div>
      </section>

      <PaymentDetails />
      <LandingPageOptinForm
        onSubmit={onSubmit}
        consultationDetails={consultationDetails}
        setconsultationDetails={setconsultationDetails}
        data={data}
        loading={loading}
        error={error}
      />
      {/* <Footer/> */}
    </>
  );
};

export default VerificationDetail;
