import { useState } from 'react';
import { TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tune } from '@mui/icons-material';
import './styles.css';
import theme from '@/styles/theme';

function SearchBlock() {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cityError, setCityError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

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
      alert('Buscando...');
    }
  };

  return (
    <Accordion
      style={{
        backgroundColor: theme.palette.background.secondary,
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.default.primary }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: theme.palette.default.primary, textAlign: 'center' }}
      >
        <Tune sx={{ marginRight: '10px' }} /> Filtro de busca
      </AccordionSummary>
      <AccordionDetails
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <form
          onSubmit={handleSearch}
          className="formContainer"
          style={{
            backgroundColor: 'transparent',
            display: 'flex',
            gap: '10px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          <TextField
            fullWidth
            type="search"
            label="Selecione sua cidade"
            variant="filled"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!cityError}
            helperText={cityError}
            sx={{ background: theme.palette.default.primary }}
          />
          <TextField
            fullWidth
            type="date"
            label="Data ínicio"
            variant="filled"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            error={!!startDateError}
            helperText={startDateError}
            InputLabelProps={{ shrink: true }}
            sx={{ background: theme.palette.default.primary }}
          />
          <TextField
            fullWidth
            type="date"
            label="Data de devolução"
            variant="filled"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            error={!!endDateError}
            helperText={endDateError}
            InputLabelProps={{ shrink: true }}
            sx={{ background: theme.palette.default.primary }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{
              backgroundColor: theme.palette.background.button,
              color: theme.palette.default.primary,
              height: '56px',
            }}
          >
            Filtrar
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default SearchBlock;
