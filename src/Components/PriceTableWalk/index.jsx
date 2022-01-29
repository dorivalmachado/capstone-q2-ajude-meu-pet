import { Popover } from "@mui/material"


const PriceTableWalk = ({open, anchorEl, handleClose}) => {
    return(
        <Popover
            open={open === 'walkPrice'}
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
            <p>The content of the Popover Walk.</p>
        </Popover>
    )
}

export default PriceTableWalk