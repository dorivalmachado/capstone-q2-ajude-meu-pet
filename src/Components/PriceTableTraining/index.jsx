import { Popover } from "@mui/material"


const PriceTableTraining = ({open, anchorEl, handleClose}) => {
    return(
        <Popover
            open={open === 'trainingPrice'}
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
            <p>The content of the Popover Training.</p>
        </Popover>
    )
}

export default PriceTableTraining