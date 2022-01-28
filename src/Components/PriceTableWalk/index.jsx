import { Popover } from "@mui/material"


const PriceTableWalk = ({open, anchorEl, handleClose}) => {
    return(
        <Popover
            open={open === 'walk'}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <p>The content of the Popover Walk.</p>
        </Popover>
    )
}

export default PriceTableWalk