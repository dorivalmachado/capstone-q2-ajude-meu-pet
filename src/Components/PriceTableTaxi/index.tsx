import { Popover, PopoverOrigin, Typography } from "@mui/material";

interface PriceTableTaxiProps extends PopoverOrigin{
  openPop: string,
  handleClose: () => void 
}

const PriceTableTaxi = ({ openPop, handleClose, ...rest }:PriceTableTaxiProps) => {
  return (
    <Popover
      open={openPop === "taxiPrice"}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      {...rest}
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
