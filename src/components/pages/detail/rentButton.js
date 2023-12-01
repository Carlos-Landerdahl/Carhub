import Link from 'next/link';
import { Button } from '@mui/material';
import { CarRental } from '@mui/icons-material';
import { useAuth } from '@/context/AuthContext';

export default function RentButton({ isAvailable, id }) {
  const { token } = useAuth();

  let buttonText = isAvailable ? 'Alugar Agora' : 'Indisponível';

  if (!token) {
    buttonText = 'Faça o login para continuar';
  }

  return (
    <Link passHref href={`/checkout/${id}`}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CarRental />}
        disabled={!isAvailable || !token}
      >
        {buttonText}
      </Button>
    </Link>
  );
}
