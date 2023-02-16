/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

const OptinForm = ({ showReg = true, handleClose }) => {
  const [regDetails, setRegDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    category: "",
    est_interest: "",
    when_to_purchase: "",
    budget: "",
    how_you_hear_about_us: "",
  });
  const {
    fullName,
    email,
    phoneNumber,
    category,
    est_interest,
    when_to_purchase,
    budget,
    how_you_hear_about_us,
  } = regDetails;

  const onChange = (e) => {
    setRegDetails({ ...regDetails, [e.target.name]: e.target.value });
  };

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   handleClose()
  // }

  return (
    <>
      <form method="post" id="customer_equiry_form">
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            className="form-control txtOnly"
            id="full_name"
            required
            maxLength={50}
            placeholder="Full Name"
            onChange={onChange}
            value={fullName}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phoneNumber"
            className="form-control number"
            id="phone_number"
            required
            placeholder="Phone Number"
            onChange={onChange}
            value={phoneNumber}
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
          >
            <option value="" disabled defaultValue>
              {" "}
              Enquiry category
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
              Group of individuals, Developers, Organizations (Corporate, Club,
              Religious, NGO)
            </option>
            <option
              value="Individual and Group property OWNER(family, club, corporate, religious)
"
            >
              Individual and Group property OWNER(family, club, corporate,
              religious)
            </option>
          </select>
        </div>

        <div className="form-group">
          {/*  <label for="service_of_interested">Select Service Of Interest</label> */}
          {/* <select name="service_of_interested" id="service_of_interested" className="form-control" required>
                  <option value selected disabled>Select Service Of Interest</option>
                  <option value="Complete Verification Service">Complete Verification Service</option>
                  <option value="Complete Property Buyer Service (Sourcing, Verification, Valuation, Negotiation, Payment, Survey and Documentation)">Complete Property Buyer Service (Sourcing, Verification, Valuation, Negotiation, Payment, Survey and Documentation)</option>
                  <option value="Bulk Land Purchase">Bulk Land Purchase</option>
                  <option value="Personalized Advisory Session">Personalized Advisory Session</option>
                  <option value="Trainings">Trainings</option>
                  <option value="Sell My Property">Sell My Property</option>
                  <option value="Our Estate">Our Estate</option>
                  <option value="Done-For-You Investment">Done-For-You Investment</option>
                  <option value="Other:">Other:</option>
                </select> */}
          <select
            name="est_interest"
            value={est_interest}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              {" "}
              Estate Of Interest
            </option>
            <option value="The Hive">The Hive</option>
            <option value="The Fern Highland">The Fern Highland </option>
            <option value="Floracity Ecopolis">Floracity Ecopolis</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="Budget"
            className="form-control txtOnly"
            id="budget"
            required
            maxLength={50}
            placeholder="Budget(Naira)"
            onChange={onChange}
            value={budget}
          />
        </div>
        <div className="form-group">
          <label for="service_of_interested">
            When do you need this service
          </label>
          <input
            onChange={onChange}
            type="date"
            className="form-control date"
            name="when_to_purchase"
            id="when_to_purchase"
            placeholder="When do you intend to purchase"
            value={when_to_purchase}
            required
          />
        </div>
        <div className="form-group">
          {/* <label for="how_you_know_about_us">How did you know about us?</label> */}
          <select
            name=" how_you_hear_about_us"
            value={how_you_hear_about_us}
            className="form-control"
            onChange={onChange}
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
        {/* <div className="form-group">
                <textarea className="form-control" id="more_details_from_customer" name="more_details_from_customer" rows={3} maxLength={1000} placeholder="Explain other details you'll like us to know" required defaultValue={""} />
              </div> */}
        <div className="form-group text-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            name="submit_form_btn"
            id="submit_form_btn"
            style={{ width: "100%", textTransform: "uppercase" }}
          >
            Submit Details
          </button>
        </div>
        <div id="notification_div"></div>
      </form>
    </>
  );
};

export default OptinForm;
