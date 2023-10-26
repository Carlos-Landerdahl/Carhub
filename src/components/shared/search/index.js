import { useState } from 'react';
import { TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tune } from '@mui/icons-material';
import './styles.css';

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
        backgroundColor: '#595959',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: 'white', textAlign: 'center' }}
      >
        <Tune sx={{ marginRight: '10px' }} /> Search Filter
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
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!cityError}
            helperText={cityError}
            sx={{ background: 'white', fontFamily: 'Roboto' }}
          />
          <TextField
            fullWidth
            type="date"
            label="Data ínicio"
            variant="outlined"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            error={!!startDateError}
            helperText={startDateError}
            InputLabelProps={{ shrink: true }}
            sx={{ background: 'white', fontFamily: 'Roboto' }}
          />
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
            sx={{ background: 'white', fontFamily: 'Roboto' }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: '#00875f',
              color: 'white',
              width: '100%',
              fontFamily: 'Roboto',
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
