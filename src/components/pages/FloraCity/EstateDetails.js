import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import renderHTML from "react-render-html";
import handleAccordion from "../OurEstates";
import { photoGridObj, replaceSpaceWithHyphen } from "../../../utils/format";
import PhotoGallery from "../../layouts/PhotoGallery";
// import Optin_Trigger from "./Optin_Trigger";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import OptinModal from "../../SharedComponents/OptinModal";
import OptinForm from "../../SharedComponents/OptinForm";
import rocket from "../../assets/rocket.svg";


const EstateDetails = () => {
  let params = useParams();
  let name = params?.name;
  

  useEffect(() => {
    handleAccordion();
  }, []);

  const [bookingDetail, setbookingDetail] = useState({});

  const properties = useSelector((state) => state?.properties?.properties)

  let property = properties?.find(
    (property) => replaceSpaceWithHyphen(property.name) === name
  );

  
 
  return (
    <>
      <section className="banner-meetup">
        <div
          className="bg-pattern"
          style={{ backgroundImage: `url(${property?.coverPhoto})` }}
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
              {/* <font color="#ed6c11">The</font> */}
              <font color="white">{property?.name}</font>
            </h2>
          </div>

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
                  {/* <span className="title">DEVELOPING</span> */}
                  <h2 className="mt-4">{property?.name}</h2>
                  <div className="text">{property?.caption}</div>
                </div>
                <div className="row">
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <h4>
                        <span className="icon fa fa-file" /> Title
                      </h4>
                      <div className="text">{property?.title}</div>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <h4>
                        <span className="icon fa fa-map-marker-alt" /> Area
                      </h4>
                      <div className="text">{property?.area}</div>
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
                  <img src={property?.photo} alt="Overview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12  text-white">
              {renderHTML(property?.content)}
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-center mb-3" style={{ color: "#ed6c11" }}>
              <b>Explore</b>
            </h1>
            {property?.otherPhotos?.length > 0 && (
              <PhotoGallery data={photoGridObj(property?.otherPhotos)} />
            )}
            
          </div>
        </div>
      </section>

{property?.faq?.length > 0  && (
     <section className="faq-section">
     <div className="auto-container">
       {/* Sec Title */}
       <div className="sec-title text-center">
         <span className="title">FAQ'S</span>
         <h2 className="mb-2">What Others Are Asking</h2>
       </div>
       <div className="row clearfix">
         <div className="content-column col-lg-6 col-md-12 col-sm-12">
           <div className="inner-column">
             <ul className="accordion-box">
               {property?.faq
                 ?.slice(0, property?.faq?.length / 2)
                 .map((fa) => (
                   <li
                     key={fa?.uuid}
                     className="accordion block wow fadeInUp animated"
                     style={{
                       visibility: "visible",
                       animationName: "fadeInUp",
                     }}
                   >
                     <div className="acc-btn">
                       <div className="icon-outer">
                         <span className="icon icon-plus fa fa-angle-down" />{" "}
                       </div>
                       {fa?.question}
                     </div>
                     <div className="acc-content">
                       <div className="content">
                         <div className="text">{fa?.answer}</div>
                       </div>
                     </div>
                   </li>
                 ))}
             </ul>
           </div>
         </div>
         {/* Content Column */}
         <div className="content-column col-lg-6 col-md-12 col-sm-12">
           <div className="inner-column">
             {/*Accordian Box*/}
             <ul className="accordion-box">
               {property?.faq
                 ?.slice(property?.faq?.length / 2, property?.faq?.length)
                 .map((fa) => (
                   <li
                     key={fa?.uuid}
                     className="accordion block wow fadeInUp animated"
                     style={{
                       visibility: "visible",
                       animationName: "fadeInUp",
                     }}
                   >
                     <div className="acc-btn">
                       <div className="icon-outer">
                         <span className="icon icon-plus fa fa-angle-down" />{" "}
                       </div>
                       {fa?.question}
                     </div>
                     <div className="acc-content">
                       <div className="content">
                         <div className="text">{fa?.answer}</div>
                       </div>
                     </div>
                   </li>
                 ))}
             </ul>
           </div>
         </div>
       </div>
     </div>
   </section>
)}
   

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
                  {/* <Optin_Trigger /> */}
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
    </>
  );
};

export default EstateDetails;
