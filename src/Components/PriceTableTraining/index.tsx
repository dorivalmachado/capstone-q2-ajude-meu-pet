import { Popover, Typography } from "@mui/material";

interface PriceTableTrainingProps {
  openPop: string,
  anchor: HTMLButtonElement | null,
  handleClose: () => void, 
}

const PriceTableTraining = ({ openPop, anchor, handleClose }: PriceTableTrainingProps) => {
  return (
    <Popover
      open={openPop === "trainingPrice"}
      onClose={handleClose}
      anchorEl={anchor}
      anchorOrigin={{
        horizontal: "center",
        vertical: "top",
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
        <strong>ADESTRAMENTO</strong> <br />
        <br />
        Adestramentos do tipo <strong>básico</strong> e <strong>grupal</strong>
        , cada aula custa de R$ 150,00 a R$ 200,00, dependendo do profissional
        que irá realizar o serviço.
        <br />
        <br />
        Adestramento do tipo <strong>avançado</strong>, cada aula custa de R$
        200,00 a R$ 400,00, dependendo do profissional que irá realizar o
        serviço.
      </Typography>
    </Popover>
  );
};

export default PriceTableTraining;
