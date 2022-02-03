import { Popover, Typography } from "@mui/material";

interface PriceTableTaxiProps {
  openPop: string,
  anchor: HTMLButtonElement | null,
  handleClose: () => void, 
}

const PriceTableTaxi = ({ openPop, anchor, handleClose }:PriceTableTaxiProps) => {
  return (
    <Popover
      open={openPop === "taxiPrice"}
      onClose={handleClose}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Typography
        sx={{ p: 3 }}
        style={{ backgroundColor: "var(--yellow50)", maxWidth: "320px" }}
      >
        <strong>TAXI-PET</strong> <br />
        <br />O preço médio das viagens é de R$ 10,00 a R$ 40,00, podendo variar
        pela distância do ponto de origem e chegada do pet.
      </Typography>
    </Popover>
  );
};

export default PriceTableTaxi;
