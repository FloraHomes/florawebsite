import React from "react";
import ErrorMessage from "../../SharedComponents/Error";
import { Feedback } from "../../SharedComponents/Feedback";
import "../../SharedComponents/optinmodal.css";

export default function FloraModal({
  setbookingDetail,
  componentId,
  component,
  error_msg,
  data,
  header,
  own,
  exec,
  client_eng,
}) {
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      <div
        class="modal optin-root"
        id="optinForm"
        tabindex="-1"
        aria-labelledby="optinFormLabel"
        aria-hidden="true"
        data-backdrop="false"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            class="modal-content modal-content-flora-modal"
            style={{ background: "white" }}
          >
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
                  <div style={{ flexDirection: "column" }}>
                    <h4 className="font-weight-bold text-white text-center mt-5 modal-heading-h4">
                      Own apartment(s) fully OR Co-own to earn a high yield
                      Income.
                    </h4>
                    <mark
                      className="text"
                      style={{
                        background: "yellow",
                        fontSize: "10px",
                      }}
                    >
                      PS: Once this offer closes, prices are not the same as
                      seen on this page. So before payment, please confirm if
                      the offer is still available. Thank you for your
                      understanding.
                    </mark>
                  </div>
                )
              ) : (
                <Feedback data={data} />
              )}
              <button
                style={{ color: "#fff", marginTop: "15px", opacity: 1 }}
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
}
