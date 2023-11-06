'use client';

import theme from '@/styles/theme';
import { Card, CardContent, Typography, Grid, CardMedia, CardActions } from '@mui/material';
import Link from 'next/link';

function RecommendCard({ id, brand, description, category, image, model }) {
  return (
    <Grid item lg={3} md={6} sm={6} xs={12}>
      <Card
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 4px 0 rgb(0, 0, 0, 0.25)',
        }}
      >
        <CardMedia component="img" alt={brand} height="231" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            style={{ color: theme.palette.text.paragraph }}
            sx={theme.typography.paragraph}
          >
            {model}
          </Typography>
          <Typography sx={theme.typography.label}>{description}</Typography>
        </CardContent>
        <CardActions sx={theme.typography.button}>
          <Link href={`/detail/${id}`}>Saiba mais</Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RecommendCard;
