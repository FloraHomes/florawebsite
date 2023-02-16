import React, { useEffect } from "react";
import { useState } from "react";
import "../../css/Modal.css";
import "./landing-optin.css";
import ErrorMessage from "./Error";
import { Feedback } from "./Feedback";
import LoadingComponent from "./Loading";
const LandingPageOptinForm = ({
  onSubmit,
  setconsultationDetails,
  consultationDetails,
  data,
  loading,
  error,
}) => {
  const {
    full_name,
    email,
    phone_number,
    whatsaap_number,
    category,
    est_of_interest,
    contact_me,
    message,
    how_you_hear_about_us,
  } = consultationDetails;

  const onChange = (e) => {
    setconsultationDetails({
      ...consultationDetails,
      [e.target.name]: e.target.value,
    });
  };
  const onFormClose = (data) => {
    setsetData(null);
    seterror_msg(null);
  };
  const [setData, setsetData] = useState(null);
  const [error_msg, seterror_msg] = useState(null);
  const [loading_value, setloading_value] = useState(null);
  useEffect(() => {
    setsetData(data);
    seterror_msg(error);
    setloading_value(loading);
  }, [data, error, loading]);

  // const LoadingComponent = () => (
  //   <button class="btn btn-primary" type="button" disabled>
  //     <span
  //       class="spinner-grow spinner-grow-sm"
  //       role="status"
  //       aria-hidden="true"
  //     ></span>
  //     Sending...
  //   </button>
  // );

  // const ErrorMessage = (error_msg) => (
  //   <h4 className="font-weight-bold text-center text-danger">{error_msg}</h4>
  // );

  return (
    <>
      <div
        class="modal optin-root"
        id="landingModal"
        tabindex="-1"
        aria-labelledby="landingModalLabel"
        aria-hidden="true"
        data-backdrop="false"
        style={{ marginTop: "15px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content" style={{ background: "white" }}>
            <div
              class="modal-header"
              style={{
                borderBottom: "0px solid #dee2e6",
                background: "#541484",
                color: "#fff",
                marginTop: "65px",
              }}
            >
              {setData === null || !setData ? (
                error_msg ? (
                  <ErrorMessage errorMessage={error_msg} />
                ) : (
                  <h4 className="font-weight-bold text-white text-center mt-5">
                    PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED
                  </h4>
                )
              ) : (
                <Feedback data={setData} />
              )}
              <button
                style={{ color: "#fff", marginTop: "15px" }}
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => onFormClose(data)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form method="post" id="customer_equiry_form" onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="full_name"
                    className="form-control txtOnly"
                    id="full_name"
                    required
                    maxLength={50}
                    placeholder="Full Name"
                    onChange={onChange}
                    value={full_name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="phone_number"
                    className="form-control number"
                    id="phone_number"
                    required
                    placeholder="Phone Number"
                    onChange={onChange}
                    value={phone_number}
                    maxLength={20}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="whatsaap_number"
                    className="form-control number"
                    id="whatsaap_number"
                    required
                    placeholder="Whatsaap Number"
                    onChange={onChange}
                    value={whatsaap_number}
                    maxLength={20}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email_address"
                    placeholder="Email"
                    required
                    maxLength={50}
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="category"
                    value={category}
                    className="form-control"
                    onChange={onChange}
                    required
                  >
                    <option value="" defaultValue disabled>
                      Select Enquiry Category
                    </option>
                    <option value="Individual buyer/Investors">
                      Individual buyer/Investors
                    </option>
                    <option value="Property professionals and contractors ">
                      Property professionals and contractors{" "}
                    </option>
                    <option value="Realtor, Agents, Marketers, Consultants">
                      Realtor, Agents, Marketers, Consultants
                    </option>
                    <option value="Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)">
                      Group of individuals, Developers, Organizations
                      (Corporate, Club, Religious, NGO)
                    </option>
                    <option value="Individual and Group property OWNER(family, club, corporate, religious)">
                      Individual and Group property OWNER(family, club,
                      corporate, religious)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  {/*  <label for="service_of_interested">Select Service Of Interest</label> */}
                  <select
                    name="est_of_interest"
                    id="service_of_interested"
                    className="form-control"
                    value={est_of_interest}
                    onChange={onChange}
                    required
                  >
                    <option value="" defaultValue disabled>
                      Select Service Of Interest
                    </option>
                    <option value="Complete Verification Service">
                      Complete Verification Service
                    </option>
                    <option value="Complete Property Buyer Service (Sourcing, Verification, Valuation, Negotiation, Payment, Survey and Documentation)">
                      Complete Property Buyer Service (Sourcing, Verification,
                      Valuation, Negotiation, Payment, Survey and Documentation)
                    </option>
                    <option value="Bulk Land Purchase">
                      Bulk Land Purchase
                    </option>
                    <option value="Personalized Advisory Session">
                      Personalized Advisory Session
                    </option>
                    <option value="Trainings">Trainings</option>
                    <option value="Sell My Property">Sell My Property</option>
                    <option value="Our Estate">Our Estate</option>
                    <option value="Done-For-You Investment">
                      Done-For-You Investment
                    </option>
                    <option value="Other:">Other:</option>
                  </select>
                  {/* <select name='est_interest' value={est_interest} className="form-control" onChange={onChange}>
                <option value="" disabled defaultValue> Estate Of Interest</option>
                <option value="The Hive">The Hive</option>
                <option value="The Fern Highland">The Fern Highland </option>
                <option value="Floracity Ecopolis">Floracity Ecopolis</option>
            </select> */}
                </div>
                <div
                  id="dynamic_field"
                  className="form-group"
                  style={{ display: "none" }}
                ></div>
                <div className="form-group">
                  {/* <label for="service_of_interested">When do you need this service</label> */}
                  <select
                    name="contact_me"
                    id="when_you_need_us"
                    value={contact_me}
                    required
                    onChange={onChange}
                    className="form-control"
                  >
                    <option value="" defaultValue disabled>
                      When do you need this service
                    </option>
                    <option value="Now">Now</option>
                    <option value="In one months">In one months</option>
                    <option value="In 3 months">In 3 months</option>
                    <option value="Later in the future ">
                      Later in the future{" "}
                    </option>
                    <option value="I have a specific date (please enter date)">
                      I have a specific date (please enter date)
                    </option>
                  </select>
                  {/* <input onChange={onChange} type="date"  onfocus={focus} className="form-control date" name="when_to_purchase" id="when_to_purchase" placeholder="When do you intend to purchase" value={when_to_purchase} required/> */}
                </div>
                <div className="form-group">
                  {/* <label for="how_you_know_about_us">How did you know about us?</label> */}
                  <select
                    name="how_you_hear_about_us"
                    value={how_you_hear_about_us}
                    className="form-control"
                    onChange={onChange}
                    required
                  >
                    <option value="" disabled defaultValue>
                      How do you know about us
                    </option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Google">Google</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="A Friend">A Friend</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="more_details_from_customer"
                    name="message"
                    rows={3}
                    maxLength={1000}
                    placeholder="Explain other details you'll like us to know"
                    required
                    value={message}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    disabled={loading_value ? true : false}
                    type="submit"
                    className="btn btn-primary btn-lg"
                    name="submit_form_btn"
                    id="submit_form_btn"
                    style={{
                      width: "100%",
                      marginBottom: "30px",
                      textTransform: "uppercase",
                    }}
                  >
                    {loading_value ? <LoadingComponent /> : "Submit Details"}
                  </button>
                </div>
                <div id="notification_div"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageOptinForm;
