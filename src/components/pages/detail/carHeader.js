import { Box, Typography, Button } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import Link from 'next/link';
import theme from '@/styles/theme';

export default function CarHeader({ name, onBackClick }) {
  return (
    <Link href="/" passHref>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: theme.palette.background.secondary,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          padding: '10px',
        }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.text.text, fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Button
          startIcon={<ArrowBackIos />}
          onClick={onBackClick}
          sx={{ color: theme.palette.background.button, fontWeight: 'bold' }}
        >
          Voltar
        </Button>
      </Box>
    </Link>
  );
}
