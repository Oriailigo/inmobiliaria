import React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import { IconButton, TextField, Select, MenuItem, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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
          <Box className="buttons-container" sx={{ marginBottom: '1rem' }} >
            <Button variant="contained" sx={{ backgroundColor: '#1C252C', color: '#FFFFFF' ,fontWeight: 'bold', paddingLeft: '2rem', paddingRight: '2rem'}}>Quiero comprar</Button>
            <Button variant="contained"sx={{ backgroundColor: 'white', color: 'black' ,fontWeight: 'bold' , paddingLeft: '2rem', paddingRight: '2rem'}}>Quiero alquilar</Button>
            <Button variant="contained"sx={{ backgroundColor: 'white', color: 'black' ,fontWeight: 'bold' , paddingLeft: '2rem', paddingRight: '2rem'}}>Quiero vender</Button>
          </Box>

          {/* Input, Selector y botón Buscar */}
          <Box className="search-container" sx={{ display: 'flex', gap: '0rem', alignItems: 'center' }}>
            <input
              type="text"
              className="search-input tamInput"
              placeholder="¿Dónde querés mudarte?"
              style={{
                paddingLeft: '2rem',
                paddingRight: '2rem',
                height: '50px', // Igualamos la altura con el Select y el IconButton
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRadius: '4px',
                outline: 'none'
               
              }}
            />

            <Select
              defaultValue="Tipo de inmueble seleccionado"
              className="search-select"
              sx={{
                paddingLeft: '2rem',
                paddingRight: '2rem',
                height: '50px', // Igualamos la altura
                width: 'auto',
                fontWeight: 'bold',
                '@media (max-width: 748px)': { // Eliminar padding en dispositivos móviles
                  paddingLeft: '0rem',
                  paddingRight: '0rem',
                },
              }}
            >
              <MenuItem value="Tipo de inmueble seleccionado">Tipo de inmueble seleccionado</MenuItem>
              <MenuItem value="casa">Casa</MenuItem>
              <MenuItem value="departamento">Departamento</MenuItem>
            </Select>

            <IconButton
              color="inherit"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                height: '50px', // Igualamos la altura con el input y el select
                paddingLeft: '2rem', // Ancho izquierda
                paddingRight: '2rem', // Ancho derecha
                borderRadius: '8px',
                backgroundColor: '#1C252C', color: '#FFFFFF',
                '@media (max-width: 748px)': { // Eliminar padding en dispositivos móviles
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                },
              }}
            >
               <SearchIcon/>
            </IconButton>
          </Box>


          {/* Botón de consultar inventario */}
          <Button variant="contained" className="inventory-button" startIcon={<img
                  src={`img/inicioIcon.svg`} // Ruta de la imagen en la carpeta public
                  alt="Buscar"
                  style={{
                    height: '100%', // Ajustar la imagen para que ocupe el espacio del botón
                    width: 'auto',
                    
                  }}
                />} sx={{ marginTop: '4rem', marginBottom: '4rem',backgroundColor: '#1C252C', color: '#FFFFFF'}}>
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
        <CardImg image="/img/inicio1.svg"  />
        <CardImg image="/img/inicio2.svg" />
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
          <ActionAreaCard image="/img/inicio4.svg" titulo="Casa en Del Carril" precio="75,000 dolares"/>
          <ActionAreaCard image="/img/inicio5.svg" titulo="Gonzalez y San Millan" precio="150,000 dolares" />
          <ActionAreaCard image="/img/inicio6.jpg" titulo="Casa a restaurar + garaje" precio="80,000 dolares" />
          </div>
          
        </div>
        
      </div>
      <div className="container-center">
      <Button variant="outlined" sx={{backgroundColor: '#FFD466', color: 'black'}}>Conocer más</Button>
      </div>

    
     
    </div>
  );
}

export {InicioLayout};
