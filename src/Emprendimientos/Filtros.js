import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FiltroPopUp } from './componentes/FiltroPopUp';
import './Filtros.css'; // Importamos los estilos

function Filtros() {
  const [filtersCount, setFiltersCount] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar la ventana emergente

  const handleFiltersButtonClick = () => {
    if (!isPopupOpen) {
      setFiltersCount(filtersCount + 1); // Aumentar el contador de filtros solo si el popup está cerrado
    }
    setIsPopupOpen(true); // Abrir la ventana emergente
  };

  return (
    <Box className="filter-container">
      {/* Contenedor de inputs */}
      <Box className="inputs-container">
        <TextField
          className="input"
          placeholder="¿Dónde querés mudarte?"
          variant="outlined"
          size="small"
        />

        <Select className="input" defaultValue="Tipo de propiedad" variant="outlined" size="small">
          <MenuItem value="Tipo de propiedad">Tipo de propiedad</MenuItem>
          <MenuItem value="casa">Casa</MenuItem>
          <MenuItem value="departamento">Departamento</MenuItem>
        </Select>

        <Select className="input" defaultValue="Preventa" variant="outlined" size="small">
          <MenuItem value="Preventa">Preventa</MenuItem>
          <MenuItem value="venta">Venta</MenuItem>
          <MenuItem value="alquiler">Alquiler</MenuItem>
        </Select>

        <Select className="input" defaultValue="Precio" variant="outlined" size="small">
          <MenuItem value="Precio">Precio</MenuItem>
          <MenuItem value="100000">Hasta 100.000</MenuItem>
          <MenuItem value="200000">Hasta 200.000</MenuItem>
          <MenuItem value="300000">Hasta 300.000</MenuItem>
        </Select>
      </Box>

      {/* Botón de filtros */}
      <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={handleFiltersButtonClick} // Manejar el clic en el botón
      >
        Filtros ({filtersCount})
      </Button>

      {/* Ventana emergente */}
      <FiltroPopUp open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </Box>
  );
}

export { Filtros };
