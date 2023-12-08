import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from '@mui/material';
import Swal from 'sweetalert2';

export default function CarTable({ cars, onUpdateCar, onDeleteCar }) {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [searchId, setSearchId] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars || []);
  const [isSearching, setIsSearching] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdateProcessing, setIsUpdateProcessing] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : isTablet ? '70%' : '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    maxHeight: '90vh',
    borderRadius: '4px',
  };

  useEffect(() => {
    setFilteredCars(cars.slice(0, 5));
  }, [cars]);

  const handleDelete = (carId) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteCar(carId);
      }
    });
  };

  const handleOpen = (car) => {
    setEditData(car);
    setOpen(true);
  };

  const handleSearch = () => {
    setIsSearching(true);
    const searchResults = cars.filter((car) => car.id.toString().includes(searchId));
    setFilteredCars(searchResults.slice(0, 5));
    setIsSearching(false);
  };

  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const { id, category, rentalCompany, ...carData } = editData;
    const updatedCarData = {
      ...carData,
      categoryId: category.id,
      rentalCompanyId: rentalCompany.id,
    };

    try {
      setIsUpdateProcessing(true);
      await onUpdateCar(id, updatedCarData);
    } catch (error) {
      console.error('Erro ao atualizar o carro', error);
    } finally {
      setIsUpdateProcessing(false);
      handleClose();
    }
  };

  const handleConfirmUpdate = () => {
    Swal.fire({
      title: 'Confirmar Alterações',
      text: 'Você tem certeza que deseja salvar as alterações?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: isUpdateProcessing ? <CircularProgress size={20} /> : 'Sim, salvar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed && !isUpdateProcessing) {
        handleUpdate();
      }
    });
  };

  const truncateDescription = (description) => {
    const firstPeriodIndex = description.indexOf('.');
    if (firstPeriodIndex !== -1) {
      return description.slice(0, firstPeriodIndex + 1);
    }
    return description.length > 100 ? description.slice(0, 100) + '...' : description;
  };

  return (
    <Box sx={{ maxWidth: 900, m: '10px auto' }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={1}
        gap={2}
        bgcolor="white"
        borderRadius={1}
        sx={{
          px: '10px',
          pb: '5px',
          borderRadius: '4px',
          background: 'white',
          mb: '10px',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
        }}
      >
        <TextField
          label="Pesquisar Carro por ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{ height: '56px', px: 6 }}
          disabled={isSearching}
        >
          {isSearching ? <CircularProgress size={20} /> : 'Pesquisar'}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 300 }}
          size={isMobile ? 'small' : 'medium'}
          aria-label="tabela de carros"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Ano</TableCell>
              <TableCell>Preço/Dia</TableCell>
              <TableCell>Disponível</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={car.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {car.id}
                </TableCell>
                <TableCell>{car.brand}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.carYear}</TableCell>
                <TableCell>R${car.pricePerDay}</TableCell>
                <TableCell>{car.isAvailable ? 'Sim' : 'Não'}</TableCell>
                <TableCell>{truncateDescription(car.description)}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(car)}>Atualizar</Button>
                  <Button onClick={() => handleDelete(car.id)}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Atualização de dados"
        aria-describedby="Faça a atualização de um carro já existente"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Carro
          </Typography>
          <TextField
            label="Marca"
            value={editData.brand}
            onChange={(e) => setEditData({ ...editData, brand: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Modelo"
            value={editData.model}
            onChange={(e) => setEditData({ ...editData, model: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ano do Carro"
            type="number"
            value={editData.carYear}
            onChange={(e) => setEditData({ ...editData, carYear: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="URL da Imagem"
            value={editData.imageUrl}
            onChange={(e) => setEditData({ ...editData, imageUrl: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Preço por Dia"
            type="number"
            value={editData.pricePerDay}
            onChange={(e) => setEditData({ ...editData, pricePerDay: e.target.value })}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={editData.isAvailable}
                onChange={(e) => setEditData({ ...editData, isAvailable: e.target.checked })}
                name="isAvailable"
              />
            }
            label="Disponível"
          />
          <TextField
            label="Descrição"
            multiline
            rows={4}
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="ID da Categoria"
            type="number"
            value={editData.category ? editData.category.id : ''}
            onChange={(e) =>
              setEditData({ ...editData, category: { ...editData.category, id: e.target.value } })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="ID da Empresa de Aluguel"
            type="number"
            value={editData.rentalCompany ? editData.rentalCompany.id : ''}
            onChange={(e) =>
              setEditData({
                ...editData,
                rentalCompany: { ...editData.rentalCompany, id: e.target.value },
              })
            }
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleConfirmUpdate}
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isUpdateProcessing}
          >
            {isUpdateProcessing ? <CircularProgress size={18} /> : 'Salvar Alterações'}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
