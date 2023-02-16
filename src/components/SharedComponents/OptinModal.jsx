import React from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./Error";
import { Feedback } from "./Feedback";
import "./optinmodal.css";
export default function OptinModal({
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

  return ReactDOM.createPortal(
    <>
      <div
        class="modal optin-root"
        id={componentId}
        tabindex="-1"
        aria-labelledby={`${componentId}Label`}
        aria-hidden="true"
        data-backdrop="false"
        style={{ marginTop: "15px",backgroundColor:'rgba(0, 0, 0, 0.5)' }}
      >
        <div class="modal-root modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            class="modal-content"
            style={{
              background: "white",
            }}
          >
            <div
              class="modal-header"
              style={{
                borderBottom: "0px solid #dee2e6",
                background: "#541484",
                color: "#fff",
                paddingTop: "15px",
              }}
            >
              {data === null || !data ? (
                error_msg ? (
                  <ErrorMessage errorMessage={error_msg} />
                ) : (
                  <h4 className="font-weight-bold text-white text-center ">
                    {header}
                  </h4>
                )
              ) : (
                <Feedback data={data} />
              )}

              <button
                type="button"
                className={`close mt-2 text-white `}
                data-dismiss="modal"
                aria-label="Close"
                onClick={() =>
                  setbookingDetail({ bookings_data: null, error_msg: null })
                }
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{component}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
