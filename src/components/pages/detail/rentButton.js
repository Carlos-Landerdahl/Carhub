'use client';   

import React from 'react';
import { CarRental } from '@mui/icons-material';
import { Button, Box, Typography } from '@mui/material';
import { DateRangeCalendar } from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Popper from '@mui/material/Popper';


export default function RentButton({ carDetails }) {
    
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <div>
            <Button
                onClick={handleClick}
                variant="contained"
                color="primary"
                startIcon={<CarRental />}
                disabled={!carDetails.available}
                maxWidth="lg"
                sx={{
                width: '100%',
                height: '36px',
                borderRadius: '4px',    
                }}
                >
                {carDetails.available ? 'Alugar Agora' : 'Indisponível'}
            </Button>
                
            <Popper id={id} open={open} anchorEl={anchorEl}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateRangeCalendar />
                    </LocalizationProvider>  
            </Popper>
        </div>

        
    );
}
