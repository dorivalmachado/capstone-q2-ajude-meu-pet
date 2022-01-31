import { Popover, Typography } from "@mui/material";

const PriceTableTaxi = ({ open, anchorEl, handleClose }) => {
  return (
    <Popover
      open={open === "taxiPrice"}
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
        <strong>TAXI-PET</strong> <br />
        <br />O preço médio das viagens é de R$ 10,00 a R$ 40,00, podendo variar
        pela distância do ponto de origem e chegada do pet.
      </Typography>
    </Popover>
  );
};

export default PriceTableTaxi;
