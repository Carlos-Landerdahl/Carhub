import { useContext, useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import './styles.css';
import theme from '@/styles/theme';
import { CarContext } from '@/context/carContext';
import Toast from '../toasts';

function SearchFilter() {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [cityError, setCityError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');
  const { setSelectedCity } = useContext(CarContext);
  const today = new Date();

  const handleSearch = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!city) {
      setCityError('Por favor, insira uma cidade');
      hasError = true;
    } else {
      setCityError('');
    }

    if (!startDate) {
      setStartDateError('Selecione uma data');
      hasError = true;
    } else {
      setStartDateError('');
    }

    if (!endDate) {
      setEndDateError('Selecione uma data');
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
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
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
            <DatePicker
              label="Retirada"
              value={startDate}
              onChange={setStartDate}
              minDate={today}
              fullWidth
              inputFormat="dd/MM/yyyy"
              openTo="month"
              views={['year', 'month', 'day']}
              slotProps={{
                textField: {
                  helperText: startDateError,
                  error: !!startDateError,
                },
              }}
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
            <DatePicker
              label="Devolução"
              value={endDate}
              inputFormat="dd/MM/yyyy"
              onChange={setEndDate}
              fullWidth
              openTo="month"
              minDate={startDate || today}
              views={['year', 'month', 'day']}
              slotProps={{
                textField: {
                  helperText: endDateError,
                  error: !!endDateError,
                },
              }}
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
    </LocalizationProvider>
  );
}

export default SearchFilter;
