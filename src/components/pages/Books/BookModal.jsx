import React from "react";
import ErrorMessage from "../../SharedComponents/Error";
import { Feedback } from "../../SharedComponents/Feedback";
import "../../SharedComponents/optinmodal.css";
import "../../SharedComponents/landing-optin.css";
import "../../../css/Modal.css";
import LoadingComponent from "../../SharedComponents/Loading";

export default function BookModal({
  setbookingDetail,
  error_msg,
  data,
  loading,
  formData,
  setformData,
  handleSubmit,
}) {
  return (
    <>
      {/* padding-top-custom */}
      <div
        class="modal "
        id={"bookOptin"}
        tabindex="-1"
        aria-labelledby={`bookOptinLabel`}
        aria-hidden="true"
        data-backdrop="false"
        style={{ marginTop: "15px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div class="modal-root modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class=" modal-content" style={{ background: "white" }}>
            <div
              class="modal-header"
              style={{
                borderBottom: "0px solid #dee2e6",
                background: "#541484",
                color: "#fff",
                marginTop: "65px",
              }}
            >
              {data === null || !data ? (
                error_msg ? (
                  <ErrorMessage errorMessage={error_msg} />
                ) : (
                  <>
                    <h4 className="font-weight-bold text-white text-center mt-5">
                      The Property Investment Checklist
                    </h4>
                  </>
                )
              ) : (
                <Feedback data={data} />
              )}
              <button
                style={{ color: "#fff", marginTop: "15px" }}
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() =>
                  setbookingDetail({ bookings_data: null, error_msg: null })
                }
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div> 
            <div className="modal-body">
              <form
                method="post"
                id="pricing_modal_form"
                onSubmit={handleSubmit}
              >
                <div className="text-box col-lg-12 col-md-12 col-sm-12">
                  <p className="text my-1">
                    Congratulations for coming across this.
                  </p>
                  <p className="text my-1">
                    Here is the Time-Tested, Step-by-Step Guide to Making ZERO
                    MISTAKE When Buying Real Estate Anywhere In Nigeria.
                  </p>
                  <p className="text my-1">
                    This book is part of the "Preventing Real Estate Losses"
                    projects By FloraHomes Global Consult Limited...to help
                    Nigerians Property Investors both home and abroad.
                  </p>
                 <p className="text my-4">
                    <b>
                      Enter your correct details below to access it immediately
                      without leaving the page.
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
                              setformData({
                                ...formData,
                                full_name: e.target.value,
                              })
                            }
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={(e) =>
                              setformData({
                                ...formData,
                                phone_number: e.target.value,
                              })
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
                              setformData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
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
                          <select
                            className="custom-select"
                            name="category"
                            required
                            value={formData.category}
                            onChange={(e) =>
                              setformData({
                                ...formData,
                                category: e.target.value,
                              })
                            }
                          >
                            <option selected disabled value="">
                              Select Enquiry Category
                            </option>
                            <option value="Individual buyer/investor">
                              Individual buyer/investor
                            </option>
                            <option value="Agent, Marketer, Realtor, or Consultant">
                              Agent, Marketer, Realtor, or Consultant
                            </option>
                            <option value="Developer Company/Corporate Organizations">
                              Developer Company/Corporate Organizations
                            </option>
                            <option value="Groups of individuals, clubs etc">
                              Groups of individuals, clubs etc
                            </option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <select
                            className="custom-select"
                            name="how_you_hear_about_us"
                            required
                            value={formData.how_you_hear_about_us}
                            onChange={(e) =>
                              setformData({
                                ...formData,
                                how_you_hear_about_us: e.target.value,
                              })
                            }
                          >
                            <option selected disabled value="">
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
                      style={{ textTransform: "uppercase", width: "100%" }}
                    >
                      <span className="btn-title">Submit Details</span>
                    </button>
                  )}

                  {/* <button type="button" class="theme-btn btn-style-four" style=" pointer-events: none; cursor: pointer !important;" data-dismiss="modal">Close</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
