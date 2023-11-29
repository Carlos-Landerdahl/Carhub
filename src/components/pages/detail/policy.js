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
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{ backgorund: theme.palette.background.button, padding: '5px', mb: '10px' }}
      >
        <PrivacyTipIcon sx={{ mr: '2px' }} />
        Política de uso
      </Button>

      <Modal
        sx={{
          margin: '10px',
        }}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxHeight: '550px',
            maxWidth: '550px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            gap: '7px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <Box>
            <Typography variant="h1" component="h1" sx={{ fontSize: '24px', textAlign: 'center' }}>
              Políticas de uso
            </Typography>
            <CloseOutlinedIcon
              onClick={handleClose}
              sx={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              maxHeight: '100%',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              '&::-webkit-scrollbar': {
                width: '5px',
              },
              padding: '10px',
              '&::-webkit-scrollbar-track': {
                background: '#f0f0f0',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#a0a0a0',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#909090',
                },
              },
            }}
          >
            <Box
              sx={{
                mt: '5px',
                border: '1px solid',
                borderColor: 'black',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'end' }}
              >
                <Man4OutlinedIcon /> Condutores
              </Typography>
              <Typography sx={{ fontSize: '10px' }}>
                Ao retirar o carro, você precisará apresentar:
                <br />
                - Passaporte ou documento nacional de identidade;
                <br />
                - Carteira de habilitação;
                <br />- Cartão de crédito;
              </Typography>
            </Box>
            <Box
              sx={{
                mt: '2px',
                border: '1px solid',
                borderColor: 'black',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '5px',
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'end' }}
              >
                <AddCardOutlinedIcon sx={{ mr: '5px' }} /> Caução
              </Typography>
              <Typography sx={{ fontSize: '10px' }}>
                Na retirada, o condutor principal deverá deixar um depósito caução reembolsável{' '}
                <br />
                de R$2.700,00 em seu cartão de crédito. <br />
                Cartões de débito e dinheiro não são aceitos. A equipe do balcão irá confirmar o
                valor.
              </Typography>
            </Box>
            <Box
              sx={{
                mt: '2px',
                border: '1px solid',
                borderColor: 'black',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '5px',
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'end' }}
              >
                <CarCrashOutlinedIcon sx={{ mr: '5px' }} /> Franquia
              </Typography>
              <Typography sx={{ fontSize: '10px' }}>
                Se a carroceria do carro for danificada, o máximo que você pagará pelos reparos
                <br />
                cobertos pela Isenção de Danos por Colisão é a Franquia de danos (R$2.500,00).
                <br />
                Essa cobertura só é válida se você cumprir os termos do acordo de locação. <br />
                Ela não cobre outras partes do carro (por exemplo, janelas, rodas, interior ou
                chassi)
                <br />
                ou outras taxas (por exemplo, de reboque ou indisponibilidade), ou qualquer coisa no
                carro
                <br />
                (por exemplo, cadeirinha infantil, GPS ou pertences pessoais).
              </Typography>
            </Box>
            <Box
              sx={{
                mt: '2px',
                border: '1px solid',
                borderColor: 'black',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '5px',
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'end' }}
              >
                <RouteOutlinedIcon sx={{ mr: '5px' }} /> Distância
              </Typography>
              <Typography sx={{ fontSize: '10px' }}>
                Seu aluguel inclui quilômetro grátis livres.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
