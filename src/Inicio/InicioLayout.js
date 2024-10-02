import React from 'react';
import Button from '@mui/material/Button';
import {CardIn} from '../Card/CardInfo';
import {CardMa} from '../Card/CardMas';
import { IconButton, TextField, Select, MenuItem, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ActionAreaCard } from './ActionAreaCard'; // Si tienes este layout
import { CardImg } from './CardImg'; // Si tienes este layout
import '../Alquiler/AlquilerLayout.css';  // Importa los estilos
import './InicioLayout.css';  // Importa los estilos


function InicioLayout() {
  return (
    <div className="web-page">
     {/* Contenedor principal */}
    {/* Imagen de fondo con los botones y los elementos superpuestos */}
    <Box className="background-section">
        <Box className="overlay">
          {/* Botones centrados */}
          <Box className="buttons-container">
            <Button variant="contained">Quiero comprar</Button>
            <Button variant="contained">Quiero alquilar</Button>
            <Button variant="contained">Quiero vender</Button>
          </Box>

          {/* Input, Selector y botón Buscar */}
          <Box className="search-container">
            <TextField className="search-input" placeholder="¿Dónde querés mudarte?" variant="outlined" />
            <Select defaultValue="" className="search-select">
              <MenuItem value="">Tipo de inmueble seleccionado</MenuItem>
              <MenuItem value="casa">Casa</MenuItem>
              <MenuItem value="departamento">Departamento</MenuItem>
            </Select>
            <IconButton color="primary" className="search-button">
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Botón de consultar inventario */}
          <Button variant="contained" className="inventory-button" startIcon={<SearchIcon />}>
            Consulta todo el inventario
          </Button>

          {/* Título de propiedades destacadas */}
          <Typography variant="h4" className="featured-title">
            Propiedades destacadas
          </Typography>
        </Box>
      </Box>

      {/* Sección de propiedades destacadas */}
      <Box className="properties-section">
        {/* Primera y segunda propiedad */}
        <CardImg/>
        <CardImg/>
      </Box>

      {/* Sección inferior con los tres divs */}
      <Box className="custom-section">
        {/* Primer div alineado a la izquierda */}
        <Box className="left-div back-div">
          <Typography variant="h6">Título</Typography>
          <Typography variant="body2">Descripción del primer div</Typography>
          
        </Box>
        <Box className="left-div sec-div">
        <Typography variant="h6">Oportunidad</Typography>
          <Typography variant="body2">Rojas e/ Av. Moreno y Av. Belgrano</Typography>
          <Typography variant="body2">Casa 4 ambientes y garaje con parrilla</Typography>
          <Box className="mini-div">
          <Typography variant="body2">95,000 Dólares</Typography>
          
          </Box>
        </Box>

        {/* Segundo div con imagen de fondo */}
        <Box className="right-div">
         
        </Box>
      </Box>
    
     <div className="main-container">
       
       <div className="button-group">
         
         {/* Botones alineados a la derecha */}
         <div className="button-group-right">
        
         </div>
         
       </div>
       
     </div>
      <div className="main-container">
       
        <div className="button-group">
          
          {/* Botones alineados a la derecha */}
          <div className="button-group-right">
          <ActionAreaCard/>
          <ActionAreaCard/>
          <ActionAreaCard/>
          </div>
          
        </div>
        
      </div>
      <div className="container-center">
      <Button variant="outlined">Conocer más</Button>
      </div>

    
     
    </div>
  );
}

export {InicioLayout};
