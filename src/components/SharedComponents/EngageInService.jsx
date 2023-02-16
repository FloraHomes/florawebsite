import React from "react";

export default function EngageInService({
  first_step,
  second_step,
  third_step,
  fourth_step,
  call_to_action,
  call_to_action2,
  howToOur = false,
  remove3rdButton = false,
}) {
  return (
    <>
      <div className="auto-container mt-5 mb-3">
        <div className="sec-title text-center">
          <span
            className={!howToOur && "title"}
            style={{ color: howToOur && "#fff" }}
          >
            HOW TO
          </span>
          <h2 style={{ color: howToOur && "#fff" }}>ENGAGE THIS SERVICE</h2>
        </div>

        <div className="schedule-tabs tabs-box">
          <div className="tabs-content">
            {/*Tab*/}
            <div className="tab active-tab" id="tab-1">
              <div className="schedule-timeline">
                {/* schedule Block */}
                <div className="schedule-block">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        1ST <br /> STEP
                      </div>
                      {/* <h4>Click Button</h4> */}
                      {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                      <button
                        className="theme-btn btn-style-three"
                        data-toggle="modal"
                        data-target="#landingModal"
                        id="form_caller"
                      >
                        <span className="btn-title">{first_step}</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* schedule Block */}
                <div className="schedule-block even">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        2ND <br /> STEP
                      </div>
                      {/* <h4>Review</h4> */}
                      <div className="text" style={{ color: "#000000" }}>
                        {second_step}
                      </div>
                    </div>
                  </div>
                </div>
                {/* schedule Block */}
                <div className="schedule-block">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        3RD <br /> STEP
                      </div>
                      {/* <h4>Payment</h4> */}
                      {/* <div class="text" style="color: #000000">Submit Service Information.</div> */}
                      {remove3rdButton ? (
                        <div className="text" style={{ color: "#000000" }}>
                          {third_step}
                        </div>
                      ) : (
                        <div
                          className="theme-btn btn-style-three"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="btn-title">{third_step}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="schedule-block even">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        4TH <br /> STEP
                      </div>
                      {/* <h4>Customer Care</h4> */}
                      <div className="text" style={{ color: "#000000" }}>
                        {fourth_step}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center" style={{ marginTop: "10px" }}>
                  <h5 style={{ marginTop: "5px", color: "#3A005F !important" }}>
                    <b style={{ color: howToOur ? "#fff" : "#000" }}>
                      NOW IT'S TIME TO TAKE YOUR FIRST STEP
                    </b>
                  </h5>
                  {/* <div className="btn-box">
                    <button
                      id
                      className="theme-btn btn-style-four pop_up_form_simple"
                      data-toggle="modal"
                      data-target="#landingModal"
                    >
                      <span className="btn-title">
                        CLICK HERE TO SCHEDULE YOUR 15 MINUTES FREE CONSULTATION
                        NOW
                      </span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {call_to_action}

      {!remove3rdButton && call_to_action2}
    </>
  );
}
