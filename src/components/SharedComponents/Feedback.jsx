import React from "react";

export const Feedback = ({ data, regFeedback }) => {
  if (data) {
    return (
      <h4 className="font-weight-bold text-center text-success pt-3">
        {`${data}. Our team will contact you soon.`}
      </h4>
    );
  } else if (regFeedback) {
    return (
      <h4 className="font-weight-bold text-center text-success pt-3">
        {`${regFeedback}, please login.`}
      </h4>
    );
  } else {
    return <></>;
  }
};
