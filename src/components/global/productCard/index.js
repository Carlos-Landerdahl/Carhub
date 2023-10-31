'use client';

import { Box, Button } from '@mui/material';
import { Height, WidthFull } from '@mui/icons-material';
import theme from '@/styles/theme';
import Image from 'next/image';
import fiat500 from '../../../../public/img/fiat500.jpg';

function ProductCard() {
    return (
        <Box sx={{
            width: '37.2rem',
            height: '12.7rem',
            backgroundColor: '#fff',
            borderRadius: '10px',
            border: '1px solid #F3F1ED',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            flexShrink: '0',
            display: 'flex',
            p: '1%',
            justifyContent: 'space-around',
            alignItems: 'center',
        }} >
        <Image  style={{
            width: '20%',
            maxHeight: '100%',
            objectFit: 'contain',
            m: 0
        }}src={fiat500} alt="Imagem do produto" />
        <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: '',
        p: '1%',
        fontSize: '14px',
        gap: '10px',
    }}>
            <div>
                <p>Fiat</p>
                <p>3</p>
                <p>Um carro qualquer</p>
            </div>
            <div>
                <p>Categoria</p>
                <p>Preço</p>
                <p>Ano</p>
            </div>
        </Box>

        <Box sx= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
            <div style={{fontSize: '24px',fontWeight: 'bold',}} >27,50</div>
            <div style={{fontSize: '12px'}} >Cancelamento gratuito</div>
            <Button variant="contained" sx={{ width: '160px', height: '36px', marginTop: '15px'}}> Reservar </Button>
        </Box>
        
        </Box>
    )}

export default ProductCard;