import { useState } from 'react';
import {
  TextField,
  Button,
  InputLabel,
  FormControl,
  Input,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import './styles.css';

function SearchBlock() {
  const [cidade, setCidade] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [erroCidade, setErroCidade] = useState('');
  const [erroDataInicio, setErroDataInicio] = useState('');
  const [erroDataFim, setErroDataFim] = useState('');

  const handleBuscar = (e) => {
    e.preventDefault();

    let temErro = false;

    if (!cidade) {
      setErroCidade('Por favor, insira uma cidade.');
      temErro = true;
    } else {
      setErroCidade('');
    }

    if (!dataInicio) {
      setErroDataInicio('Selecione uma data de início.');
      temErro = true;
    } else {
      setErroDataInicio('');
    }

    if (!dataFim) {
      setErroDataFim('Selecione uma data de término.');
      temErro = true;
    } else {
      setErroDataFim('');
    }

    if (!temErro) {
      alert('Buscando...');
    }
  };

  return (
    <Accordion style={{ backgroundColor: '#7097C3' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: 'white', textAlign: 'center' }}
      >
        <FilterListIcon sx={{ marginRight: '10px' }} /> Filtro de busca Filtro de busca
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
          onSubmit={handleBuscar}
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
            label="Busque sua cidade"
            variant="outlined"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            error={!!erroCidade}
            helperText={erroCidade}
            sx={{ background: 'white' }}
          />
          <TextField
            fullWidth
            type="date"
            label="Data ínicio"
            variant="outlined"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
            error={!!erroDataInicio}
            helperText={erroDataInicio}
            InputLabelProps={{ shrink: true }}
            sx={{ background: 'white' }}
          />
          <TextField
            fullWidth
            type="date"
            label="Data final"
            variant="outlined"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
            error={!!erroDataFim}
            helperText={erroDataFim}
            InputLabelProps={{ shrink: true }}
            sx={{ background: 'white' }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: '#5A67D8',
              color: 'white',
              width: '100%',
            }}
          >
            Buscar
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default SearchBlock;
