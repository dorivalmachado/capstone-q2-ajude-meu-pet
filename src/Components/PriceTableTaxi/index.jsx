import { Popover } from "@mui/material"


const PriceTableTaxi = ({open, anchorEl, handleClose}) => {
    return(
        <Popover
            open={open === 'taxiPrice'}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <p>The content of the Popover Taxi.</p>
        </Popover>
    )
}

export default PriceTableTaxi