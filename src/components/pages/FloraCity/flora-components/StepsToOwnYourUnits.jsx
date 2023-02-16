import React from "react";
import background from "../../../assets/background.jpg";
import StepToOwnYourUnits from "../../../SharedComponents/StepToOwnYourUnits";
import FloracityCountDown from "./FloracityCountDown";

export default function StepsToOwnYourUnits() {
  return (
    <section style={{ backgroundImage: `url(${background})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <StepToOwnYourUnits
              first_step="RESERVE YOUR INTEREST BY CLICKING THIS FORM"
              openModal="#optinForm"
              second_step="Recieve the slot(s) confirmation detail."
              third_step={
                <div>
                  <p>
                    Make payment according to your chosen purchase option into
                  </p>
                  <p> Acc.name: FloraHomes Global Consult ltd.</p>
                  <p>Bank name: Jaiz Bank</p>
                  <ul className="list-style-one">
                    <li> Naira: 0007101193</li>
                    <li> Dollar: 0007101210</li>
                  </ul>
                </div>
              }
              fourth_step="Get your documents"
              howToOur={true}
              remove3rdButton={true}
              call_to_action={
                <>
                  <div
                    class="btn-box veriff-first"
                    style={{
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    <FloracityCountDown
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    />
                    <button
                      href="#"
                      data-toggle="modal"
                      data-target="#optinForm"
                      class="theme-btn btn-style-four mb-4 mt-3"
                    >
                      <span class="btn-title">
                        RESERVE YOUR INTEREST BY CLICKING THIS FORM
                      </span>
                    </button>
                  </div>
                </>
              }
              call_to_action2={
                <>
                  <div
                    className="phone-number"
                    style={{
                      color: "#ed6c11",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    <a href="tel:+2348094442019 " className="call-link-two">
                      OR CLICK HERE TO CALL
                    </a>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
