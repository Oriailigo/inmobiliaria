import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Icono para el botón Agregar
import HomeIcon from '@mui/icons-material/Home'; // Icono para los botones de Home
import PerformanceIcon from '@mui/icons-material/BarChart';
import PropiedadIcon from '@mui/icons-material/TouchApp';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings'; // Icono para ajustes
import LogoutIcon from '@mui/icons-material/Logout'; // Icono para cerrar sesión
import './SideMenu.css'; // Archivo CSS para los estilos

const SideMenu = ({ onMenuItemClick }) => {
  return (
    <Box className="sidemenu-container">
      {/* Botón Agregar */}
      <Button
        variant="contained"
        className="add-button"
        startIcon={<AddIcon />}
        onClick={() => onMenuItemClick('AgregarPropiedad')}
      >
        Agregar propiedad
      </Button>

      {/* Botón Dashboard */}
      <Button className="menu-button" startIcon={<HomeIcon />}>
        Dashboard
      </Button>

      {/* Título Analytics */}
      <Typography className="menu-title">Analytics</Typography>

      {/* Botón Performance */}
      <Button className="menu-button" startIcon={<PerformanceIcon />}
      onClick={() => onMenuItemClick('Performance')}
      >
        Performance
      </Button>

      {/* Botón Propiedades con tag New */}
      <Box className="menu-button-with-tag">
        <Button className="menu-button" startIcon={<PropiedadIcon />}
        onClick={() => onMenuItemClick('Propiedades')}
        >
          Propiedades
        </Button>
        <span className="new-tag">New</span>
      </Box>
      {/* Botón user */}
      <Button className="menu-button" startIcon={<GroupIcon />}
      onClick={() => onMenuItemClick('UsuariosConectados')}
      >
        Usuarios conectados
      </Button>

      {/* Título Support */}
      <Typography className="menu-title">Support</Typography>

      {/* Botón Reports */}
      <Button className="menu-button" startIcon={<AssessmentIcon />}
      onClick={() => onMenuItemClick('Reports')}
      >
        Reports
      </Button>

      {/* Botones inferiores: Ajustes y Cerrar sesión */}
      <Box className="bottom-buttons">
        <Button className="menu-button" startIcon={<SettingsIcon />}
        onClick={() => onMenuItemClick('Ajustes')}
        >
          Ajustes
        </Button>
        <Button className="menu-button" startIcon={<LogoutIcon />}>
          Cerrar Sesión
        </Button>
      </Box>
    </Box>
  );
};

export  {SideMenu};
