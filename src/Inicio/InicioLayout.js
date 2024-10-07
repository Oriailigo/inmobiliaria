import React,{useEffect} from 'react';
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
            <IconButton color="inherit"  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} >
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
{/* Divs superpuestos el negro es relativo y el blanco absoluto */}
<div className="section-wrapper"> 
  
    <div className="div-ng">
      <div className="div-bl">
        <h1>Oportunidad</h1>
        <p>Rojas bla bla</p>
        <p>Rojas bla bla</p>
        <div className='div-g'>
          <p>95,000 Dólares</p>
        </div>
      </div>
    </div>
    
    <div className='div-img'>
     
    </div>
  
</div>

    
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
