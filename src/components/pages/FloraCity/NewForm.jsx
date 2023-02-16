import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ErrorMessage from "../../SharedComponents/Error";
import { Feedback } from "../../SharedComponents/Feedback";

export default function NewForm({
  component,
  error_msg,
  data,
}) {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div
        style={{
          display: "block",
          width: 700,
          padding: 30,
        }}
      >
        <Button color="primary" onClick={toggle}>
          Open Modal
        </Button>
        <Modal
          scrollable={true}
          isOpen={modal}
          toggle={toggle}
          centered
          style={{ marginTop: "15px" }}
          className="modal-custom-style modal-xl"
        >
          <ModalHeader className="header-modal">
            {data === null || !data ? (
              error_msg ? (
                <ErrorMessage errorMessage={error_msg} />
              ) : (
                <div style={{ flexDirection: "column" }}>
                  <h4 className="font-weight-bold text-white ">
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
                    PS: Once this offer closes, prices are not the same as seen
                    on this page, you'll see the post-offer prices on the
                    brochure. So before payment, please confirm if the offer is
                    still available. Thank you for your understanding.
                  </mark>
                </div>
              )
            ) : (
              <Feedback data={data} />
            )}
            <button
              type="button"
              className={`close text-white `}
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggle}
              style={{
                opacity: 1,
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <ModalBody style={{ background: "white" }}>{component}</ModalBody>
        </Modal>
      </div>
    </>
  );
}
