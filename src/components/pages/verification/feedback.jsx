import React from "react";


export const Feedback = ({ data }) => {
  if (data?.success === true) {
    return (
       window.location.href='https://calendly.com/florahomesgc/propertyinvestmentconsultation '
    );
  } else if (data?.success === false) {
    return (
      <h4 className="font-weight-bold text-center text-danger">
        {data?.data?.message}
      </h4>
    );
  }
};
