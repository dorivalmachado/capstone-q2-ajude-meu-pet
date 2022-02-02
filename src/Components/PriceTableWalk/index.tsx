import { Popover, Typography } from "@mui/material";
import { PopoverProps } from "material-ui";

interface PriceTableWalkProps extends PopoverProps{
  openPop: string,
  handleClose: () => void 
}

const PriceTableWalk = ({ openPop, handleClose, ...rest }: PriceTableWalkProps) => {
  return (
    <Popover
      open={openPop === "walkPrice"}
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
