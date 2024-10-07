import React from 'react';
import { Divider, MenuItem,  Select } from '@mui/material';
import {Filtros} from './Filtros'; // Importar el componente Filtros
import {CardImg} from './CardImg'; // Importar el componente Filtros
import './EmprendimientosLayout.css'; // Importar los estilos

function EmprendimientosLayout() {
  return (
    <div className="alquileres-layout">
      {/* Línea separadora superior */}
      <Divider />

      {/* Componente de Filtros */}
      <Filtros />

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
