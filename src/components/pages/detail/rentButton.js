'use client';   

import React from 'react';
import { CarRental } from '@mui/icons-material';
import { Button, Box, Typography } from '@mui/material';
import { BasePopup, PopupBody } from '@/components/base/popup';
// import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';

export default function RentButton({ carDetails }) {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button
                onClick={open}
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

            <BasePopup id={id} open={open} anchor={anchor}>
                <PopupBody>The content of the Popup.</PopupBody>
            </BasePopup>
        </Box>
    );
}