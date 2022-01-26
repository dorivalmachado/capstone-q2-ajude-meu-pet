import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px",
  minHeight: "300px",
  width: "auto",
  height: "auto",
  bgcolor: "#ffffff",
  border: "2px solid #EFEFEF",
  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
  p: 4,
  borderRadius: "10px",
};

const ModalBase = ({ open, handleClose, children }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default ModalBase;
