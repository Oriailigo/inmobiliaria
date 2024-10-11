import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./NavbarLogin.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150); // Estado para saber si es vista móvil
  const open = Boolean(anchorEl);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setShowMenu(false);
    }
  };

  // Funciones del menú desplegable (para el botón con PersonIcon)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Detectar cambios en el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const [showSubMenu, setShowSubMenu] = useState(false); // Estado para mostrar u ocultar el submenú

 

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  

  return (
    <header className="header-flex">
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
              <NavLink to="/ver-mapa" className="nav__link" onClick={closeMenuOnMobile}>
                Ver mapa
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/tasaciones" className="nav__link" onClick={closeMenuOnMobile}>
                Tasaciones
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/quienes-somos" className="nav__link" onClick={closeMenuOnMobile}>
                Quienes somos
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/emprendimientos" className="nav__link" onClick={closeMenuOnMobile}>
                Emprendimientos
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contacto" className="nav__link" onClick={closeMenuOnMobile}>
                Contacto
              </NavLink>
            </li>

            {/* Menú desplegable de usuario visible tanto en escritorio como en móvil */}
            {!isMobile && (
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                className="btn-inicio"
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Franco Perez
              </Button>
            )}

            {isMobile && (
               <li className="nav__item">
               <button className="nav__link sub-menu-btn" onClick={toggleSubMenu}>
                 Franco Perez {showSubMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
               </button>
 
               {/* Submenú que se muestra cuando se hace clic en la opción principal */}
               {showSubMenu && (
                 <ul className="sub-menu">
                   <li className="nav__sub-item">
                     <NavLink to="/datos-personales" className="nav__sub-link" onClick={closeMenuOnMobile}>
                     Perfil
                     </NavLink>
                   </li>
                   <li className="nav__sub-item">
                     <NavLink to="/favoritos" className="nav__sub-link" onClick={closeMenuOnMobile}>
                       Favoritos
                     </NavLink>
                   </li>
                   <li className="nav__sub-item">
                     <NavLink to="/cerrar-sesion" className="nav__sub-link" onClick={closeMenuOnMobile}>
                       Cerrar sesion
                     </NavLink>
                   </li>
                 </ul>
               )}
             </li>
            
            )}
          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <CloseIcon />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <MenuIcon />
        </div>

        {/* Menú desplegable de usuario para escritorio */}
        {!isMobile && (
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem component={Link} to="/datos-personales" onClick={handleClose}>
              Perfil
            </MenuItem>
            <MenuItem component={Link} to="/favoritos" onClick={handleClose}>
              Favoritos
            </MenuItem>
            <MenuItem component={Link} to="/logout" onClick={handleClose}>
              Cerrar sesión
            </MenuItem>
          </Menu>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
