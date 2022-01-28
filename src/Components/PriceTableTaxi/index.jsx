import { Popover } from "@mui/material"


const PriceTableTaxi = ({open, anchorEl, handleClose}) => {
    return(
        <Popover
            open={open === 'taxi'}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <p>The content of the Popover Taxi.</p>
        </Popover>
    )
}

export default PriceTableTaxi