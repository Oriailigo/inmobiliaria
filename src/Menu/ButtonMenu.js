import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'; // Icono de menú
import IconButton from '@mui/material/IconButton'; // Botón para el menú

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
          <Button className="menu-button" variant="text">Inicio</Button>
          <Button className="menu-button" variant="text">Alquileres</Button>
          <Button className="menu-button" variant="text">Ventas</Button>
          <Button className="menu-button" variant="text">Ver mapa</Button>
          <Button className="menu-button" variant="text">Tasaciones</Button>
          <Button className="menu-button" variant="text">Quienes somos</Button>
          <Button className="menu-button" variant="text">Emprendimientos</Button>
          <Button className="menu-button" variant="text">Contacto</Button>
        </Box>
        <Button variant="outlined" startIcon={<PersonIcon/>} onClick={() => console.log("Iniciar sesión")}>
          Iniciar sesión
        </Button>
      </Stack>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="mobile-menu">
        <IconButton onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
        </IconButton>
        {openMenu && (
          <div className="mobile-menu-content">
            <Button className="menu-button" variant="text">Inicio</Button>
            <Button className="menu-button" variant="text">Alquileres</Button>
            <Button className="menu-button" variant="text">Ventas</Button>
            <Button className="menu-button" variant="text">Ver mapa</Button>
            <Button className="menu-button" variant="text">Tasaciones</Button>
            <Button className="menu-button" variant="text">Quienes somos</Button>
            <Button className="menu-button" variant="text">Emprendimientos</Button>
            <Button className="menu-button" variant="text">Contacto</Button>
            <Button variant="outlined" startIcon={<PersonIcon/>} onClick={() => console.log("Iniciar sesión")}>
              Iniciar sesión
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export { ButtonMenu };
