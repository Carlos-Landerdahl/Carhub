'use client';

import React from 'react';
import { Modal, Typography, Box, Button, Divider } from '@mui/material';
import theme from '@/styles/theme';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
import { useRouter as useAppRouter } from 'next/navigation';

export default function CheckoutConfirmation({}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useAppRouter();

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        sx={{ height: '50px', width: '100%' }}
      >
        Concluir Reserva
      </Button>

      <Modal
        sx={{
          margin: '10px',
        }}
        open={open}
        onClose={() => router.push('/')}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxHeight: '650px',
            maxWidth: '550px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            Typography: 4,
            gap: '7px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <Box
            sx={{
              w: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              textAlign: 'center',
            }}
          >
            <CheckCircleOutlineIcon sx={{ fontSize: '100px', color: theme.palette.primary.main }} />
            <Typography variant="h3">Reserva confirmada!</Typography>
            <Typography>
              Obrigado por ter feito sua reserva conosco! <br /> Seu carro está reservado e pronto
              para ser retirado.
            </Typography>
          </Box>

          <Divider sx={{ width: '90%', mt: 3, mb: 3 }} textAlign="left">
            Resumo da reserva
          </Divider>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '15px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
                fontWeight: 'bold',
                maxWidth: '100%',
                [theme.breakpoints.up('sm')]: {
                  gap: '5px',
                  fontSize: '25px',
                },
                [theme.breakpoints.down('sm')]: {
                  gap: '5px',
                  fontSize: '17px',
                },
              }}
            >
              <Typography>Número da reserva</Typography>
              <Typography>Data da reserva</Typography>
              <Typography>Nome do cliente</Typography>
              <Typography>Carro reservado</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                justifyContent: 'flex-start',
                maxWidth: '100%',
                [theme.breakpoints.up('sm')]: {
                  gap: '5px',
                  mt: '0px',
                },
                [theme.breakpoints.down('sm')]: {
                  gap: '5px',
                  fontSize: '14px',
                },
              }}
            >
              <Typography>123456</Typography>
              <Typography>29/11/2023</Typography>
              <Typography>Lucas Nogueira</Typography>
              <Typography>Renaul Megane</Typography>
            </Box>
          </Box>
          <Link href="/">
            <Button
              variant="contained"
              sx={{ m: '10px', width: '100%', height: '50px' }}
              onClick={handleClose}
            >
              Voltar para a Home
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
