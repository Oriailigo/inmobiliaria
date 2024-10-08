import React, { useState }  from 'react';
import { Divider, MenuItem,  Select, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Filtros} from './Filtros'; // Importar el componente Filtros
import {FiltroPopUp} from './Modal'; // Importar el componente Filtros
import {CardImg} from './CardImg'; // Importar el componente Filtros
import './EmprendimientosLayout.css'; // Importar los estilos

function EmprendimientosLayout() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="alquileres-layout">
      {/* Línea separadora superior */}
      <Divider />

      {/* Componente de Filtros */}
      <div className='filter-container'>
          <Filtros />
          {/* Botón que abre el modal */}
          <Button variant="contained" 
              startIcon={<FilterListIcon />}onClick={openPopup}>
              Filtros
          </Button>
      </div>
      <div>
        {/* Ventana emergente */}
        <FiltroPopUp open={isPopupOpen} handleClose={closePopup} />
    </div>

      {/* Línea separadora inferior */}
      <Divider />

      {/* Contenedor de párrafo y select alineados con flexbox */}
      <div className="paragraph-select-container">
        <p><b>3800</b>  propiedades en alquiler</p>
        <Select className="select-element" defaultValue="Ordenar por" variant="outlined" size="small">
          <MenuItem value="opcion1">Opción 1</MenuItem>
          <MenuItem value="opcion2">Opción 2</MenuItem>
          <MenuItem value="opcion3">Opción 3</MenuItem>
        </Select>
      </div>
      <CardImg image='/img/emprendimientos1.svg' />
      <CardImg  image= '/img/emprendimientos2.svg'  />
      <CardImg  image= '/img/emprendimientos3.svg' />
    </div>
  );
}

export {EmprendimientosLayout} ;
