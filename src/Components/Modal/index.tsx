import React from "react";
import Dialog from "@mui/material/Dialog";
import { ButtonsContainer } from "./styles";
import {
  // Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "../Button";

interface ModalBaseProps {
  open: string;
  handleClose: () => void;
  children: any;
}

const ModalBase = ({ open, handleClose, children }: ModalBaseProps) => {
  return (
    <div>
      <Dialog
        open={open === "training"}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <DialogContent>{children}</DialogContent>
        <ButtonsContainer>
          <Button buttonColor="darkBrown" onClick={() => {}}>
            Agendar!
          </Button>
          <Button buttonColor="blue " onClick={() => {}}>
            Tabela de preços
          </Button>
        </ButtonsContainer>
      </Dialog>
    </div>
  );
};

export default ModalBase;
