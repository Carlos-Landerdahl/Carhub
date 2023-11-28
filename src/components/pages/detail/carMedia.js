import theme from '@/styles/theme';
import { CardMedia } from '@mui/material';

export default function CarMedia({ brand, model, imageUrl }) {
  return (
    <CardMedia
      component="img"
      alt={`${brand} ${model}`}
      image={imageUrl}
      sx={{ maxWidth: { xl: '60%', lg: '50%', md: '100%' }, objectFit: 'cover' }}
    />
  );
}
