/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import floraEcopolisAction from "../../../actions/floraEcopolis";

const FloraForm = ({ showReg = true, handleClose }) => {
  const dispatch = useDispatch();
  const [otherSlot, setOtherSlot] = useState();
  const [regDetails, setRegDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
    city: "",
    enquiry_category: "",
    purchase_category: "",
    purpose_category: "",
    property_type: "",
    num_of_slots: "",
    when_to_purchase: "",
    how_you_hear_about_us: "",
  });
  const {
    full_name,
    email,
    phone_number,
    whatsapp_number,
    city,
    enquiry_category,
    purchase_category,
    purpose_category,
    property_type,
    num_of_slots,
    when_to_purchase,
    how_you_hear_about_us,
  } = regDetails;
  const navigation = useHistory();
  const onChange = (e) => {
    setRegDetails({ ...regDetails, [e.target.name]: e.target.value });
  };
  const onOtherChange = (e) => {
    setOtherSlot(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regDetails);
    if (
      regDetails.full_name === "" ||
      regDetails.email === "" ||
      regDetails.phone_number === "" ||
      regDetails.whatsapp_number === "" ||
      regDetails.city === "" ||
      regDetails.enquiry_category === "" ||
      regDetails.purchase_category === "" ||
      regDetails.purpose_category === "" ||
      regDetails.property_type === "" ||
      regDetails.num_of_slots === "" ||
      regDetails.when_to_purchase === "" ||
      regDetails.how_you_hear_about_us === ""
    ) {
      alert("Please fill all form fields");
      return;
    }
    if (regDetails.num_of_slots === "other" && !otherSlot) {
      alert("Please fill all form fields");
      return;
    }
    dispatch(floraEcopolisAction(regDetails));
    navigation.push("/thank-you-for-submission");

    setRegDetails({
      full_name: "",
      email: "",
      phone_number: "",
      whatsapp_number: "",
      city: "",
      enquiry_category: "",
      purchase_category: "",
      purpose_category: "",
      property_type: "",
      num_of_slots: "",
      when_to_purchase: "",
      how_you_hear_about_us: "",
    });

    // dispatch(booksAction(regDetails));
  };
  console.log({ regDetails });
  return (
    <>
      <h5
        className="text-center"
        style={{ fontSize: "15px", marginBottom: "10px" }}
      >
        Enter your correct information and expect to be contacted by a FloraCare
        Manager.
      </h5>
      <form method="post" id="customer_equiry_form">
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
          <input
            type="text"
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
            type="text"
            name="whatsapp_number"
            className="form-control number"
            id="whatsapp_number"
            required
            placeholder="WhatsApp Number"
            onChange={onChange}
            value={whatsapp_number}
            maxLength={20}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            className="form-control"
            id="city"
            required
            placeholder="City"
            onChange={onChange}
            value={city}
          />
        </div>
        <div className="form-group">
          <select
            name="enquiry_category"
            value={enquiry_category}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              Enquiry category
            </option>
            <option value="Individual Investor/ Property Buyer">
              Individual Investor/ Property Buyer
            </option>
            <option value="Group of individuals/Club/family">
              Group of individuals/Club/family
            </option>
            <option value="Organizations: Corporate, Religious, NGO...">
              Organizations: Corporate, Religious, NGO...
            </option>
            <option value="Developer Company">Developer Company</option>
            <option value="Realtor/Marketer/Agent">
              Realtor/Marketer/Agent
            </option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="purpose_category"
            value={purpose_category}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              Purpose category
            </option>
            <option value="Full-time Live-in (Sole-own only)">
              Full-time Live-in (Sole-own only)
            </option>
            <option value="For Part time Live-in and Part time Holiday-Shortlet Rentals (Sole-own only)">
              For Part time Live-in and Part time Holiday-Shortlet Rentals
              (Sole-own only)
            </option>
            <option value="To Resell (Sole-own OR Co-Own Option)">
              To Resell (Sole-own OR Co-Own Option)
            </option>
            <option value="For Annual and/or Holiday-Shortlet Rentals (Sole-own OR Co-Own Option)">
              For Annual and/or Holiday-Shortlet Rentals (Sole-own OR Co-Own
              Option)
            </option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="purchase_category"
            value={purchase_category}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              Purchase category
            </option>
            <option value="Apartment Sole Ownership">
              Sole-Owning (For Any Purpose)
            </option>
            <option value="Annual/Shortlet Rental Income">
              Co-Owning For One-time Resell Income
            </option>
            <option value="One-time 12 months income">
              Co-Owning For Yearly/Shortlet Rental Income
            </option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="property_type"
            value={property_type}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              Property type
            </option>
            <option value="1 bedroom flat [Sole-Own OR Co-Own Option]">
              1 bedroom flat [Sole-Own OR Co-Own Option]
            </option>
            <option value="1 bedroom duplex [Sole-Own OR Co-Own Option]">
              1 bedroom duplex[Sole-Own OR Co-Own Option]
            </option>
            <option value="2 bedroom flat [Sole-Own Only]">
              2 bedroom flat [Sole-Own Only]
            </option>
            <option value="2 bedroom duplex [Sole-Own Only]">
              2 bedroom duplex [Sole-Own Only]
            </option>
            <option value="3 bedroom flat [Sole-Own Only]">
              3 bedroom flat [Sole-Own Only]
            </option>
            <option value="3 bedroom duplex [Sole-Own Only]">
              3 bedroom duplex [Sole-Own Only]
            </option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="num_of_slots"
            value={num_of_slots}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              Number of slot/Unit
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="other">Other </option>
          </select>
        </div>
        {regDetails.num_of_slots === "other" && (
          <input
            style={{
              border: "1px solid gray",
              marginTop: "-10px",
              paddingLeft: "4px",
            }}
            onChange={onOtherChange}
            placeholder="Enter other slot value"
            name="num_of_slots"
            value={otherSlot}
          />
        )}
        {regDetails.num_of_slots === "other" && (
          <div style={{ marginTop: "10px" }} />
        )}
        <div className="form-group">
          <label for="service_of_interested">Proposed purchase date</label>
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
          <select
            name="how_you_hear_about_us"
            value={how_you_hear_about_us}
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled defaultValue>
              How do you see this advert
            </option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Youtube">Youtube</option>
            <option value="Google">Google</option>
            <option value="Blogs/Website">Blogs/Website</option>
            <option value="App">App</option>
            <option value="Friend & Family">Friend & Family</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group text-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            name="submit_form_btn"
            id="submit_form_btn"
            onClick={handleSubmit}
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

export default FloraForm;
