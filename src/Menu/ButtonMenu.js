import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'; // Icono de menú
import IconButton from '@mui/material/IconButton'; // Botón para el menú
import { Link } from 'react-router-dom'; // Para enlazar las rutas

import './ButtonMenu.css';  // Importa el archivo CSS

// Definición del ícono de la casa (HomeIcon) como SVG
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

function ButtonMenu() {
  const [openMenu, setOpenMenu] = useState(false); // Estado para el menú móvil

  return (
    <nav className="navigation">
      {/* Menú en dispositivos grandes */}
      <Stack spacing={2} direction="row" className="desktop-menu">
        <HomeIcon />
        <Box component="section" >
          <Button className="menu-button" variant="text">
            <Link to="/">Inicio</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/alquileres">Alquileres</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/ventas">Ventas</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/ver-mapa">Ver mapa</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/tasaciones">Tasaciones</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/quienes-somos">Quienes somos</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/emprendimientos">Emprendimientos</Link>
          </Button>
          <Button className="menu-button" variant="text">
            <Link to="/contacto">Contacto</Link>
          </Button>
        </Box>
        <Button variant="outlined" startIcon={<PersonIcon/>}>
          <Link to="/iniciar-sesion">Iniciar sesión</Link>
          
        </Button>
        <Button className="menu-button" variant="text">
          <Link to="/datos-personales">Datos personales</Link>
          
        </Button>
        <Button className="menu-button" variant="text">
          <Link to="/favoritos">Favoritos</Link>
          
        </Button>
        
      </Stack>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="mobile-menu">
        <IconButton onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
        </IconButton>
        {openMenu && (
          <div className="mobile-menu-content">
            <Button className="menu-button" variant="text">
              <Link to="/">Inicio</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/alquileres">Alquileres</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/ventas">Ventas</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/ver-mapa">Ver mapa</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/tasaciones">Tasaciones</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/quienes-somos">Quienes somos</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/emprendimientos">Emprendimientos</Link>
            </Button>
            <Button className="menu-button" variant="text">
              <Link to="/contacto">Contacto</Link>
            </Button>
            <Button variant="outlined" startIcon={<PersonIcon/>}>
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export { ButtonMenu };
