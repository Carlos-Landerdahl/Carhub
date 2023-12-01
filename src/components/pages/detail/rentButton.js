import Link from 'next/link';
import { Button } from '@mui/material';
import { CarRental } from '@mui/icons-material';
import { useAuth } from '@/context/AuthContext';

export default function RentButton({ isAvailable, onClick, id }) {
  const { user } = useAuth();

  let buttonText = isAvailable ? 'Alugar Agora' : 'Indisponível';

  if (!user) {
    buttonText = 'Faça o login para continuar';
  }

  return (
    <Link passHref href={`/checkout/${id}`}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CarRental />}
        disabled={!isAvailable}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Link>
  );
}
