import Link from 'next/link';
import { Button } from '@mui/material';
import { CarRental } from '@mui/icons-material';

export default function RentButton({ isAvailable, onClick, id }) {
  return (
    <Link passHref href={`/checkout/${id}`}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CarRental />}
        disabled={!isAvailable}
        onClick={onClick}
      >
        {isAvailable ? 'Alugar Agora' : 'Indisponível'}
      </Button>
    </Link>
  );
}
