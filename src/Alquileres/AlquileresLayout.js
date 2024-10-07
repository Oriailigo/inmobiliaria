import React from 'react';
import { Divider, MenuItem,  Select } from '@mui/material';
import {Filtros} from './Filtros'; // Importar el componente Filtros
import {CardImg} from './CardImg'; // Importar el componente Filtros
import './AlquileresLayout.css'; // Importar los estilos

function AlquileresLayout() {
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
        <p><b>38000</b> propiedades en alquiler</p>
        <Select className="select-element" defaultValue="" variant="outlined" size="small">
          <MenuItem value="opcion1">Opción 1</MenuItem>
          <MenuItem value="opcion2">Opción 2</MenuItem>
          <MenuItem value="opcion3">Opción 3</MenuItem>
        </Select>
      </div>
      <CardImg image="/img/alquiler1.svg" />
      <CardImg image="/img/alquiler2.svg" />
      <CardImg image="/img/alquiler3.svg" />
    </div>
  );
}

export {AlquileresLayout} ;
