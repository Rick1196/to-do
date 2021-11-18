import React from "react";
import { Modal, Box } from "@mui/material";

export default function BasicModal({ child, style, open, handleCloseCB }) {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleCloseCB}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>{child}</Box>
    </Modal>
  );
}
