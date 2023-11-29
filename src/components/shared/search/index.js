import { useContext, useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import './styles.css';
import theme from '@/styles/theme';
import { CarContext } from '@/context/CarContext';
import { Toast } from '@/components/shared/toasts/toastForm';

function SearchFilter() {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cityError, setCityError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');
  const { setSelectedCity } = useContext(CarContext);

  const handleSearch = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!city) {
      setCityError('Por favor, insira uma cidade.');
      hasError = true;
    } else {
      setCityError('');
    }

    if (!startDate) {
      setStartDateError('Selecione uma data de início.');
      hasError = true;
    } else {
      setStartDateError('');
    }

    if (!endDate) {
      setEndDateError('Selecione uma data de término.');
      hasError = true;
    } else {
      setEndDateError('');
    }

    if (!hasError) {
      Toast.fire({
        icon: 'info',
        title: 'Cidade buscada com sucesso',
      });
      setSelectedCity(city);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'space-around',
        p: theme.spacing(3),
        backgroundColor: theme.palette.background.light,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: theme.shadows[1],
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: '1200px' }}>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            type="search"
            label="Local de retirada"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!cityError}
            helperText={cityError}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            type="date"
            label="Data de retirada"
            variant="outlined"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            error={!!startDateError}
            helperText={startDateError}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            type="time"
            label="Horário"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            type="date"
            label="Data de devolução"
            variant="outlined"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            error={!!endDateError}
            helperText={endDateError}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              height: '56px',
              width: '100%',
            }}
          >
            Pesquisar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchFilter;
