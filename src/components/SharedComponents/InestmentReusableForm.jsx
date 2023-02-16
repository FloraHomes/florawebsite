import React from "react";
import LoadingComponent from "./Loading";

export default function InestmentReusableForm({
  formData,
  setformData,
  handleSubmit,
  first_p,
  second_p,
  third_p,
  useAddress,
  useBudget,
  useDate,
  loading,
  use_no_of_units_every_sub,
  use_no_of_units,
  use_no_of_units_unpaid,
  use_amount_of_first_purc,
  use_land_size,
  use_balance_payment,
  use_sub_plan,
  use_discount,
  use_est_name,
}) {
  const Address = () => (
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
  );
  const NumberOfUnits = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <input
        type="text"
        className="form-control"
        name="number_of_units"
        value={formData.no_of_units}
        onChange={(e) =>
          setformData({
            ...formData,
            no_of_units: e.target.value,
          })
        }
        placeholder="Proposed no of unit for the first purchase (min. of 10 units)"
        required
      />
    </div>
  );
  const NumberOfUnitsEverySubscription = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <input
        type="text"
        className="form-control"
        name="number_of_units"
        value={formData.no_of_units_every_sub}
        onChange={(e) =>
          setformData({
            ...formData,
            no_of_units_every_sub: e.target.value,
          })
        }
        placeholder="Enter No of units at every subscription"
        required
      />
    </div>
  );
  const AmountOfFirstPurchase = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <input
        type="text"
        className="form-control"
        name="Amounts_of_first_purchase"
        value={formData.amount_of_purchase}
        onChange={(e) =>
          setformData({
            ...formData,
            amount_of_purchase: e.target.value,
          })
        }
        placeholder="Amount in Naira of first Purchase "
        required
      />
    </div>
  );
  const NoOfUnitsUnpaid = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <input
        type="text"
        className="form-control"
        name="mumber_of_units_unpaid"
        value={formData.no_of_units_unpaid}
        onChange={(e) =>
          setformData({
            ...formData,
            no_of_units_unpaid: e.target.value,
          })
        }
        placeholder="No of units left unpaid "
        required
      />
    </div>
  );
  const DateInput = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <label for="service_of_interested">Proposed payment Date</label>
      <input
        onChange={(e) =>
          setformData({
            ...formData,
            when_to_purchase: e.target.value,
          })
        }
        type="date"
        className="form-control date"
        name="when_to_purchase"
        id="when_to_purchase"
        placeholder="When do you intend to purchase"
        value={formData.when_to_purchase}
        required
      />
    </div>
  );
  const Budget = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <select className="custom-select" name="budget" required>
        <option defaultValue disabled value="">
          How much is your budget for purchase/Investment (In Naira)?
        </option>
        <option value="5m-9m">5m - 9m</option>
        <option value="10m - 40m">10m - 40m</option>
        <option value="50m - 90m">50m - 90m</option>
        <option value="100m - 400m">100m - 400m</option>
        <option value="500m - 900m">500m - 900m</option>
        <option value="1b and above">1b and above</option>
      </select>
    </div>
  );
  const LandSize = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <select className="custom-select" name="landsize" required>
        <option value>Land-Size Goal</option>
        <option value="162 sqm (648/4)">162 sqm (648/4)</option>
        <option value="225 sqm (450/2)">225 sqm (450/2)</option>
        <option value="324 sqm (648/2)">324 sqm (648/2)</option>
        <option value="450 sqm">450 sqm</option>
        <option value="648 sqm">648 sqm</option>
        <option value="1200 sqm">1200 sqm</option>
        <option value="2400 sqm">2400 sqm</option>
        <option value="4000 sqm">4000 sqm</option>
        <option value="10000 sqm">10000 sqm</option>
      </select>
      <input type="text" name="landsize" id="" placeholder="Others (specify)" />
    </div>
  );
  const BalancePayment = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <select className="custom-select" name="balance_payment" required>
        <option defaultValue value="">
          Duration to Balance Payment
        </option>
        <option value="1 month">1 month</option>
        <option value="3 month ">3 month</option>
        <option value="6 month">6 month</option>
        <option value="1 year">1 year</option>
        <option value="2 years">2 years</option>
      </select>
      <input
        type="text"
        name="balance_payment"
        id=""
        placeholder="Others (specify)"
      />
    </div>
  );
  const SubscriptionPlan = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <select className="custom-select" name="subscription_plan" required>
        <option disabled defaultValue value="">
          Subscription Plan after first purchase
        </option>
        <option value="Daily">Daily</option>
        <option value="Bi-Weekly ">Bi-Weekly</option>
        <option value="Weekly">Weekly</option>
        <option value="Fortnightly">Fortnightly</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
      </select>
      <input
        type="text"
        name="subscription_plan"
        id=""
        placeholder="Others (specify)"
      />
    </div>
  );
  const Discount = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <input
        type="text"
        className="form-control"
        name="discount"
        value={formData.discount}
        onChange={(e) =>
          setformData({
            ...formData,
            discount: e.target.value,
          })
        }
        placeholder="5% Discount Code {get it through your referrer} (Enter NIL if there's none)"
        required
      />
    </div>
  );
  const EstateName = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
      <input
        type="text"
        className="form-control"
        name="estate name"
        value={formData.estate_name}
        onChange={(e) =>
          setformData({
            ...formData,
            estate_name: e.target.value,
          })
        }
        placeholder="Estate Name (Estate code)"
        required
      />
    </div>
  );
  return (
    <div>
      <form method="POST" id="pricing_modal_form" onSubmit={handleSubmit}>
        <div className="text-box col-lg-12 col-md-12 col-sm-12">
          <p className="text my-1">{first_p}</p>
          <p className="text my-1">{second_p}</p>
          <p className="text my-1">{third_p}</p>
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
                    name="Username"
                    value={formData.username}
                    onChange={(e) =>
                      setformData({ ...formData, username: e.target.value })
                    }
                    placeholder="Username/Pet Name/Alias"
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
                {useAddress === true && <Address />}
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    name="category"
                    value={formData.category}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    required
                  >
                    <option value>Select Enquiry Category</option>
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
                {useBudget === true && <Budget />}
                {use_discount === true && <Discount />}
                {use_est_name === true && <EstateName />}
                {use_land_size === true && <LandSize />}
                {use_no_of_units === true && <NumberOfUnits />}
                {use_amount_of_first_purc === true && <AmountOfFirstPurchase />}
                {useDate === true && <DateInput />}
                {use_no_of_units_unpaid === true && <NoOfUnitsUnpaid />}
                {use_balance_payment === true && <BalancePayment />}
                {use_sub_plan === true && <SubscriptionPlan />}
                {use_no_of_units_every_sub === true && (
                  <NumberOfUnitsEverySubscription />
                )}
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
                    className="custom-select"
                    name="source"
                    value={formData.how_you_hear_about_us}
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        how_you_hear_about_us: e.target.value,
                      })
                    }
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
              className="theme-btn btn-style-one"
              type="submit"
              name="submit-form"
              style={{ width: "100%", textTransform: "uppercase" }}
            >
              <span className="btn-title btn-lg">Submit Details</span>
            </button>
          )}

          {/* <button type="button" class="theme-btn btn-style-four" style=" pointer-events: none; cursor: pointer !important;" data-dismiss="modal">Close</button> */}
        </div>
      </form>
    </div>
  );
}
