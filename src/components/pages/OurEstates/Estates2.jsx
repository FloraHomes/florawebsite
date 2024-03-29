import React, { Fragment } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
import "../FloraCity/flora.css";
import background from "../../assets/background.jpg";
import renderHTML from "react-render-html";
import { useSelector } from "react-redux";
import { amountFormat, replaceSpaceWithHyphen } from "../../../utils/format";
import { useParams } from "react-router-dom";
import FloracityCountDown from "../FloraCity/flora-components/FloracityCountDown";
import ReuseableMainComponent from "../FloraCity/flora-components/ReuseableMainComponent";
import Footer from "../../layouts/Footer";

const Estates2 = () => {
  let params = useParams();
  let name = params?.name;
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const properties = useSelector((state) => state?.properties?.properties);

  let property = properties?.find(
    (property) => replaceSpaceWithHyphen(property.name) === name
  );

  return (
    <>
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <div className="heading-container-ecopolis">
                <h1>{property?.name}</h1>
              </div>

              <div className="heading-paragraph">
                <p style={{ color: "#fff", fontSize: 20, lineHeight: "26px" }}>
                  {property?.caption}
                </p>
              </div>
              <div className="vidBox">
                {property?.coverMediaType === "video" ? (
                  <video
                    width="100%"
                    loop="true"
                    autoPlay="autoplay"
                    controls
                    muted
                  >
                    <source src={property?.coverPhoto} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={property?.coverPhoto}
                    alt="cover diag"
                    width="100%"
                  />
                )}
              </div>
              <br />
              <br />
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: "26px",
                    textAlign: "left",
                  }}
                >
                  <span className="icon fa fa-map-marker-alt mr-3" />
                  <strong> Location:</strong> {property?.area}
                </p>
              </div>
              <br />
              {property?.unitsPerPlot && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-bullseye mr-3" />
                      <strong> Land Size:</strong> {property?.unitsPerPlot} Sqm
                      per plot
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.currentPricePerPlot && property?.unitsPerPlot && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-credit-card mr-3" />
                      <strong> Price:</strong> &#8358;
                      {amountFormat(
                        Math.ceil(
                          property?.currentPricePerPlot / property?.unitsPerPlot
                        )
                      )}{" "}
                      per sqm
                    </p>
                  </div>
                  <br />
                </>
              )}

              {property?.otherFee && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-credit-card mr-3" />
                      <strong>Other Fee:</strong> &#8358;
                      {amountFormat(property?.otherFee)}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.title && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-book mr-3" />
                      <strong> Title:</strong> {property?.title}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.otherDocuments && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-book mr-3" />
                      <strong> Other Documents:</strong>{" "}
                      {property?.otherDocuments}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.searchParticular && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-book mr-3" />
                      <strong>Search Particular:</strong>{" "}
                      {property?.searchParticular}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.planNumber && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-anchor mr-3" />
                      <strong> Plan Number: </strong>
                      {property?.planNumber}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.coordinatesUTM && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-globe mr-3" />
                      <strong>Coordinates(UTM): </strong>
                      {property?.coordinatesUTM}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.coordinatesWGS84 && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-globe mr-3" />
                      <strong>Coordinates(WGS84): </strong>
                      {property?.coordinatesWGS84}
                    </p>
                  </div>
                  <br />
                </>
              )}
              {property?.developedBy && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-university mr-3" />
                      <strong> Developed by:</strong> {property?.developedBy}
                    </p>
                  </div>
                  <br />
                </>
              )}

              {property?.insuredBy && (
                <>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        lineHeight: "26px",
                        textAlign: "left",
                      }}
                    >
                      <span className="icon fa fa-anchor mr-3" />
                      <strong> Insured by: </strong>
                      {property?.insuredBy}
                    </p>
                  </div>
                  <br />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="auto-container">
          <div className="row">
            {renderHTML(property?.content)}

            <div className="content-column col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
                <br />

            
              </div>
            </div>
          </div>
        </div>
      </section>

{property?.features?.length > 0 && (
  <>
      <p className="text-center" style={{ marginTop: "10px" }}>
                  <div className="text-center mb-4 mt-4">
                    <FloracityCountDown
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "20px",
                        marginTop: "10px",
                        padding: "2px",
                      }}
                    />
                  </div>
                  <button
                    data-toggle="modal"
                    data-target="#optinForm"
                    className="theme-btn btn-style-one clickable-modal"
                  >
                    <span className="btn-title">
                      CLICK HERE TO FILL THE INTEREST FORM AND A FLORACARE
                      MANAGER WILL CONTACT YOU
                    </span>
                  </button>
                </p>
       <section style={{ backgroundImage: `url(${background})` }}>
       <div className="auto-container">
         <div className="row">
           <div className="col-lg-12 pt-5 pb-5 text-white">
             <img alt="simple park" src={property?.photo} width="100%" />
             <br />
             <br />
             <br />

             <div className="sec-title">
               <span className="flora-ecopolis">Features &amp; Benefits</span>
             </div>

             <div className="row">
               {/* Bullet Listing Column */}
               <div className="affiliate-block col-lg-12 col-md-12">
                 <ul className="list-style-one flora-list-orange">
                   {property?.features?.map((feat) => (
                     <li className="text-white" key={feat.uuid}>
                       {feat.feature}
                     </li>
                   ))}
                 </ul>

                 <br />
               </div>
               <br />
               <br />
             </div>

           
           </div>
         </div>
       </div>
     </section>

     </>
)}

{property?.info?.length > 0 && (
  <>
  
  {property?.info?.map((inf, index) => (
        <Fragment key={inf?.uuid}>
          <ReuseableMainComponent
            span={`${letters[index % letters.length]}. `}
            h1={inf?.infoTitle}
            image={inf?.infoImage}
            isList
            li1={inf.infoFeature?.slice(0, inf.infoFeature?.length / 2)}
            li2={inf.infoFeature?.slice(
              inf.infoFeature?.length / 2,
              inf.infoFeature?.length
            )}
          />
        </Fragment>
      ))}

      <br />
  </>
)}
 

      <section>
        <div className="auto-container">
          <div className="row">

            {property?.faq?.length > 0 && (
               <div className="col-lg-12 pt-5 pb-5 text-white">
               <br />
               <h4 className="faq-heading">
                 <b>
                   <font color style={{ color: "black!important" }}>
                     Frequently Asked Questions
                   </font>
                 </b>
               </h4>
               <div
                 className="faq-accordion"
                 style={{ display: "flex", justifyContent: "center" }}
               >
                 <UncontrolledAccordion
                   defaultOpen={[]}
                   stayOpen
                   style={{ width: "100%" }}
                 >
                   {property?.faq?.map((fa) => (
                     <AccordionItem key={fa?.uuid}>
                       <AccordionHeader targetId={fa?.uuid}>
                         {fa?.question}
                       </AccordionHeader>
                       <AccordionBody accordionId={fa?.uuid}>
                         <p>{fa?.answer}</p>
                       </AccordionBody>
                     </AccordionItem>
                   ))}
                 </UncontrolledAccordion>
               </div>
             </div>
            )}
           
            <p
              className="text-center"
              style={{ marginTop: "10px", marginBottom: 40 }}
            >
              <div className="text-center mb-4 mt-4">
                <FloracityCountDown
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "2px",
                  }}
                />
              </div>
              <button
                data-toggle="modal"
                data-target="#optinForm"
                className="theme-btn btn-style-one clickable-modal"
                style={{ backgroundColor: "#98b285", fontWeight: "bold" }}
              >
                <span className="btn-title">
                  CLICK HERE TO FILL THE INTEREST FORM AND A FLORACARE MANAGER
                  WILL CONTACT YOU
                </span>
              </button>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Estates2;
