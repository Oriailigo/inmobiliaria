import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'; // Para enlazar las rutas
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
        <img src="/img/logoInicio.svg" width="50px" alt="Logo" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
         
            <li className="nav__item">
              <NavLink to="/alquileres" className="nav__link" onClick={closeMenuOnMobile}>
              Alquileres
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/ventas" className="nav__link" onClick={closeMenuOnMobile}>
              Ventas
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/ver-mapa"className="nav__link" onClick={closeMenuOnMobile}>
                Ver mapa
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/tasaciones" className="nav__link" onClick={closeMenuOnMobile}>
              Tasaciones
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/quienes-somos"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Quienes somos
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/emprendimientos"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Emprendimientos
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contacto"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contacto
              </NavLink>
            </li>
            
            <Button variant="outlined" startIcon={<PersonIcon/>} className="btn-inicio">
                <Link to="/iniciar-sesion">Iniciar sesión</Link>
                
                </Button>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <CloseIcon />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};



export  {Navbar};
