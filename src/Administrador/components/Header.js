import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src="../img/logo.svg" alt="Logo" className="" />
      
      <div className="search-container">
      <TextField
      placeholder="Buscar..."
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      className="search-input"
    />
      </div>
      
      <div>
        <img
          src="../img/perfil.svg" // Reemplaza con la ruta de tu imagen
          alt="Perfil"
          className="profile-pic"
          onClick={toggleMenu}
        />
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <div className="menu-item">Perfil</div>
          <div className="menu-item">Favoritos</div>
          <div className="menu-item">Cerrar Sesión</div>
          <div className="menu-item">Panel de Administrador</div>
        </div>
      </div>
    </header>
  );
};

export {Header};
