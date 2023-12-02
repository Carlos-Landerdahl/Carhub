import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { CarRental } from '@mui/icons-material';
import { useAuth } from '@/context/AuthContext';
import ErrorIcon from '@mui/icons-material/Error';

export default function RentButton({ isAvailable, id }) {
  const { user } = useAuth();

  let buttonText = isAvailable ? 'Alugar Agora' : 'Indisponível';

  return (
    <>
      <Link passHref href={`/checkout/${id}`}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CarRental />}
          disabled={!isAvailable || !user}
        >
          {buttonText}
        </Button>
      </Link>
      {!user && (
        <Typography
          level="body-sm"
          fontSize="small"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            color: '#ed6c02',
          }}
        >
          Faça login para prosseguir <ErrorIcon color="warning" />
        </Typography>
      )}
    </>
  );
}
