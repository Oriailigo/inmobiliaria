import React from 'react';
import {CardVent} from '../Card/CardVen';

import './VentasLayout.css';  // Importa los estilos

function VentaLayout() {
  return (
    <div className="web-page">
      {/* Contenedor principal */}
      <div className="main-container main-ventas">
        <div className="content-form">
          <CardVent/>
        </div>
      </div>
    </div>
  );
}

export {VentaLayout};
