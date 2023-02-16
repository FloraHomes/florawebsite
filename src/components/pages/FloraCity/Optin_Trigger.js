import React from "react";

const Optin_Trigger = ({ handleSubmit }) => {
  return (
    <>
      <div
        className="card border border-0"
        style={{ marginTop: "10%", marginBottom: "25px" }}
      >
        <button
          className="theme-btn btn-style-one"
          style={{ padding: "30px", fontSize: "23px" }}
          data-toggle="modal"
          data-target="#optinForm"
          type="button"
        >
          <span className="btn-title">
            For Enquiry, inspection or reservation, click here to fill the form
          </span>{" "}
        </button>
      </div>

      {/* {isOpen && <Modal handleClose={togglePopup}/>} */}
    </>
  );
};

export default Optin_Trigger;
