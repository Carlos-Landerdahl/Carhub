'use client';

import React from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import Man4OutlinedIcon from '@mui/icons-material/Man4Outlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import theme from '@/styles/theme';

export default function RentalPolicy() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            
            <Button onClick={handleOpen} variant="outlined" sx={{backgorund: theme.palette.background.button}}>
                <PrivacyTipIcon sx={{mr: '2px' }} />
                Informação importante
            </Button>

            <Modal
                open={open}
                onClose={handleClose} >
                <Box sx={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40%',
                    height: 'auto',
                    maxHeight: '95%',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '12px',
                    border: '3px solid' ,
                    borderColor: theme.palette.background.button,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>
                    <box>
                        <Typography variant="h1" component="h1" sx={{fontSize:'24px'}}>
                        Informações importantes
                        </Typography>
                        <CloseOutlinedIcon onClick={handleClose} sx={{position: 'absolute', right: '10px', top: '10px', cursor: 'pointer'}}/>
                    </box>
                
                    <Box sx={{mt: '5px', 
                        border: '1px solid',
                        borderColor: 'black',
                        borderRadius: '12px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'row', 
                        width: '100%',
                    }}>
                        <Man4OutlinedIcon sx={{mr: '3px' }} />
                        <Typography sx={{width:'30%', fontWeight: 'bold', fontSize: '12px'}}>
                        Exigências para condutores e habilitação
                        </Typography>
                        <Typography sx={{fontSize:'10px', width:'50%'}}>
                        Ao retirar o carro, você precisará apresentar:<br/>
                        - Passaporte ou documento nacional de identidade;<br/>
                        - Carteira de habilitação;<br/>
                        - Cartão de crédito;

                        </Typography>
                    </Box>
                    <Box sx={{mt:'2px', 
                        border: '1px solid',
                        borderColor: 'black',
                        borderRadius: '12px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'row', 
                        width: '100%',
                    }}>
                        <AddCardOutlinedIcon sx={{mr: '3px' }} />
                        <Typography sx={{width:'30%', fontWeight: 'bold', fontSize: '12px'}}>
                        Depósito caução - € 2.700,00
                        </Typography>
                        <Typography sx={{fontSize:'10px', width:'50%'}}>
                        Na retirada, o condutor principal deverá deixar um depósito caução reembolsável <br/>
                        de € 2.700,00 em seu cartão de crédito. <br/>
                        Cartões de débito e dinheiro não são aceitos. A equipe do balcão irá confirmar o valor.

                        </Typography>
                    </Box>
                    <Box sx={{mt:'2px', 
                        border: '1px solid',
                        borderColor: 'black',
                        borderRadius: '12px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'row', 
                        width: '100%',
                    }}>
                        <CarCrashOutlinedIcon sx={{mr: '3px' }} />
                        <Typography sx={{width:'30%', fontWeight: 'bold', fontSize: '12px'}}>
                        Franquia de danos - € 2.500,00

                        </Typography>
                        <Typography sx={{fontSize:'10px', width:'50%'}}>
                        Se a carroceria do carro for danificada, o máximo que você pagará pelos reparos<br/>
                        cobertos pela Isenção de Danos por Colisão é a Franquia de danos (€ 2.500,00).<br/>
                        Essa cobertura só é válida se você cumprir os termos do acordo de locação. <br/>
                        Ela não cobre outras partes do carro (por exemplo, janelas, rodas, interior ou chassi)<br/>
                        ou outras taxas (por exemplo, de reboque ou indisponibilidade), ou qualquer coisa no carro<br/> 
                        (por exemplo, cadeirinha infantil, GPS ou pertences pessoais).

                        </Typography>
                    </Box>
                    <Box sx={{mt:'2px', 
                        border: '1px solid',
                        borderColor: 'black',
                        borderRadius: '12px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'row', 
                        width: '100%',
                    }}>
                        <RouteOutlinedIcon sx={{mr: '3px' }} />
                        <Typography sx={{width:'30%', fontWeight: 'bold', fontSize: '12px'}}>
                        Quilometragem -Livre
                        </Typography>
                        <Typography sx={{fontSize:'10px', width: '50%'}}>
                        Seu aluguel inclui quilômetro grátis livres.

                        </Typography>
                    </Box>
                    
                </Box>
            </Modal>
        </div>
    );
    }