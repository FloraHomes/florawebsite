import React from "react";
import { Link } from "react-router-dom";

const CtaButton = ({
  link,
  path,
  title,
  display_type,
  exec,
  own,
  optinForm,
  client_eng,
}) => {
  return (
    <>
      <div
        class="btn-box"
        style={{
          display: ` ${display_type || "inline"}`,
          marginRight: "10px",
          textAlign: "center",
        }}
      >
        {link ? (
          <Link to={path} class="theme-btn btn-style-four mb-4 mt-3">
            <span class="btn-title">{title}</span>
          </Link>
        ) : (
          <button
            data-toggle="modal"
            data-target={exec || own || optinForm || client_eng}
            class="theme-btn btn-style-four mb-4 mt-3"
          >
            <span class="btn-title">{title}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default CtaButton;
