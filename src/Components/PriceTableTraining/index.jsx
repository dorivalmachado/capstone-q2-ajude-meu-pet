import { Popover } from "@mui/material"


const PriceTableTraining = ({open, anchorEl, handleClose}) => {
    return(
        <Popover
            open={open === 'training'}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <p>The content of the Popover Training.</p>
        </Popover>
    )
}

export default PriceTableTraining