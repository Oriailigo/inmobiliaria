import React from 'react';
import {CardVent} from '../Card/CardVen';
import {ButtonMenu} from '../Menu/ButtonMenu';

import './VentasLayout.css';  // Importa los estilos

function VentaLayout() {
  return (
    <div className="web-page">
      {/* Header */}
      <header className="header">
        <div className="header-row centered">
        <ButtonMenu/>      
        </div>
      </header>

      {/* Contenedor principal */}
      <div className="main-container">
        <div className="content-form">
          <CardVent/>
        </div>
      </div>
    </div>
  );
}

export {VentaLayout};
