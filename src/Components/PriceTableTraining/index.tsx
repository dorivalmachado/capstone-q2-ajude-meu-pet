import { Popover, Typography } from "@mui/material";
import { PopoverProps } from "material-ui";

interface PriceTableTrainingProps extends PopoverProps{
  openPop: string,
  handleClose: () => void 
}

const PriceTableTraining = ({ openPop, handleClose, ...rest }: PriceTableTrainingProps) => {
  return (
    <Popover
      open={openPop === "trainingPrice"}
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
        <strong>ADESTRAMENTO</strong> <br />
        <br />
        Adestramentos do tipo <strong>básico</strong> e <strong>grupal</strong>
        , cada aula custa de R$ 150,00 a R$ 200,00, dependendo do profissional
        que irá realizar o serviço.
        <br />
        <br />
        Adestramento do tipo <strong>avançado</strong>, cada aula custa de R$
        200,00 a R$ 400,00, dependendo do profissional que irá realizar o
        serivço.
      </Typography>
    </Popover>
  );
};

export default PriceTableTraining;