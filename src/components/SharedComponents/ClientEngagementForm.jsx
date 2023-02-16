import React from "react";
import LoadingComponent from "./Loading";

const ClientEngagementForm = ({
  formData,
  setformData,
  handleSubmit,
  loading,
}) => {
  return (
    <div>
      <form method="POST" id="pricing_modal_form" onSubmit={handleSubmit}>
        <div className="text-box col-lg-12 col-md-12 col-sm-12">
          <p className="text my-1">
            Kindly fill this form to engage any of our service. Here's our
            account detail to pay to.
          </p>
          <p className="text my-1">
            Acc name: FloraHomes Global Consult Ltd <br /> Jaiz Bank Plc:
            0007101193 Naira), 0007101210 (Dollar) <br /> GT bank: 0449454858
            (Naira), 0449454865 (Dollar) <br /> Sterling Bank Plc. 0501420218
            (Naira), 0501467363 (Dollar Account)
          </p>
          {/* <p className="text my-1">
          
          </p> */}
          <p className="text my-4">
            <b>
              Enter your correct details below to access it immediately without
              leaving the page.
            </b>
          </p>
        </div>
        <hr />
        <div className="form-column mt-3 col-lg-12 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="contact-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    value={formData.full_name}
                    onChange={(e) =>
                      setformData({ ...formData, full_name: e.target.value })
                    }
                    placeholder="Full Name (First Name and Surname should match name on bank account)"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.contact_address}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        contact_address: e.target.value,
                      })
                    }
                    placeholder="Contact Adrress"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={(e) =>
                      setformData({ ...formData, phone_number: e.target.value })
                    }
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setformData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="whatsapp_number"
                    value={formData.whatsapp_number}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        whatsapp_number: e.target.value,
                      })
                    }
                    placeholder="Whatsapp Number"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Occupation"
                    value={formData.occupation}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        occupation: e.target.value,
                      })
                    }
                    placeholder="Occupation"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="payment_name"
                    value={formData.payment_name}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        payment_name: e.target.value,
                      })
                    }
                    placeholder="Name on the payment"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <label htmlFor="payment_proof">
                    Upload screenshot or snapshot of payment
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="payment_proof"
                    value={formData.payment_proof}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        payment_proof: e.target.value,
                      })
                    }
                    placeholder="upload screenshot or snapshot of payment"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    name="service_of_engagement)"
                    required
                  >
                    <option defaultValue disabled value="">
                      Service of Engagement
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
                    <option value="Design, Build and Manage">
                      Design, Build and Manage
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
                  </select>
                  <input
                    type="text"
                    placeholder="others(Specify)"
                    name="service_of_engagement"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    name="choice_of_service_engagement"
                    required
                  >
                    <option defaultValue disabled value="">
                      Choice of Service Engagement
                    </option>
                    <option value="Online">Online</option>
                    <option value="Offline ">Offline</option>
                    <option value="Both online and offline. ">
                      Both online and offline.
                    </option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    name="Choose your preferred communication choice"
                    required
                  >
                    <option defaultValue disabled value="">
                      Choose your preferred communication choice
                    </option>
                    <option value="Call">Call</option>
                    <option value="Whatsaap ">Whatsaap </option>
                    <option value="Mail ">Mail </option>
                    <option value="SMS ">SMS </option>
                    <option value="Physical Meeting ">Physical Meeting </option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="choice_location"
                    value={formData.choice_location}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        choice_location: e.target.value,
                      })
                    }
                    placeholder="Choice location/Site Address"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="property_budget"
                    value={formData.property_budget}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        property_budget: e.target.value,
                      })
                    }
                    placeholder="Property Budget/Worth/Project budget ( in Naira)"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    name="property_uses"
                    required
                  >
                    <option defaultValue disabled value="">
                      Property Uses
                    </option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Institutional">Institutional</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="Recreational">Recreational</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Other(Specify)"
                    name="property_uses"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <label for="inspection_date">
                    Proposed Site Inspection Date
                  </label>
                  <input
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        inspection_date: e.target.value,
                      })
                    }
                    type="date"
                    className="form-control date"
                    name="inspection_date"
                    id="inspection_date"
                    value={formData.inspection_date}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <textarea
                    type="text"
                    className="form-control"
                    name="detailed_information"
                    value={formData.detailed_information}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        detailed_information: e.target.value,
                      })
                    }
                    placeholder="Detail Information (specific request and description of needs)"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <label htmlFor="available_doc">
                    Upload Any available documents
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="available_doc"
                    value={formData.available_doc}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        available_doc: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        how_you_hear_about_us: e.target.value,
                      })
                    }
                    value={formData.how_you_hear_about_us}
                    name=" how_you_hear_about_us"
                    required
                  >
                    <option defaultValue disabled value="">
                      How did you know about us?
                    </option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram ">Instagram </option>
                    <option value="Google">Google</option>
                    <option value="YouTube ">YouTube </option>
                    <option value="Twitter">Twitter</option>
                    <option value="LinkedIn ">LinkedIn </option>
                    <option value="WhatsApp ">WhatsApp </option>
                    <option value="App">App</option>
                    <option value="Friend">Friend</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group"></div>
                <div id="notification_error" />
              </div>
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="modal-footer">
          {loading ? (
            <LoadingComponent />
          ) : (
            <button
              onClick={handleSubmit}
              className="theme-btn btn-style-one btn-lg"
              type="submit"
              name="submit-form"
              style={{ width: "100%" }}
            >
              <span className="btn-title">Submit Details</span>
            </button>
          )}

          {/* <button type="button" class="theme-btn btn-style-four" style=" pointer-events: none; cursor: pointer !important;" data-dismiss="modal">Close</button> */}
        </div>
      </form>
    </div>
  );
};

export default ClientEngagementForm;
