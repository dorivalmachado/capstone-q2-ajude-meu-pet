import { Popover, Typography } from "@mui/material";

const PriceTableWalk = ({ open, anchorEl, handleClose }) => {
  return (
    <Popover
      open={open === "walkPrice"}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Typography sx={{ p: 3 }} style={{ backgroundColor: "var(--yellow50)" }}>
        <strong>PASSEIOS</strong> <br />
        <br />
        Para cães e gatos de pequeno porte: R$ 20,00. <br />
        <br />
        Para caẽs e gatos de médio porte: R$ 40,00. <br />
        <br />
        Para caẽs e gatos de grande porte: R$ 60,00.
      </Typography>
    </Popover>
  );
};

export default PriceTableWalk;
