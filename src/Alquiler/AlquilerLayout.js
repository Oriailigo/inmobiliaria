import React from 'react';
import Button from '@mui/material/Button';
import {CardCont} from '../Card/CardCont';
import {CardIn} from '../Card/CardInfo';
import {CardMa} from '../Card/CardMas';
import {ButtonMenu} from '../Menu/ButtonMenu';
import {Breadcrumb} from '../BreadcrumbNavegacion/Breadcrumb';
import './AlquilerLayout.css';  // Importa los estilos

function AlquilerLayout() {
  return (
    <div className="web-page">
      {/* Header */}
      <header className="header">
        <div className="header-row centered">
        <ButtonMenu/>
       
        </div>
        <div className="header-row left-aligned">
        <Breadcrumb/>
        </div>
      </header>

      {/* Línea separadora */}
      <hr className="separator" />

      {/* Contenedor principal */}
      <div className="main-container">
        <div className="title-row">
          <h2>Título de la Sección</h2>
        </div>
        <div className="button-group">
          {/* Botones alineados a la izquierda */}
          <div className="button-group-left">
            <div className="tags">
              <span className="tag">Tag 1</span>
              <span className="tag">Tag 2</span>
            </div>
          </div>
          {/* Botones alineados a la derecha */}
          <div className="button-group-right">
            <Button variant="outlined">Botón 3</Button>
            <Button variant="outlined">Botón 4</Button>
            <Button variant="outlined">Botón 5</Button>
            <Button variant="outlined">Botón 6</Button>
          </div>
        </div>
      </div>

      {/* Contenedor de 2 columnas */}
      <div className="two-column-container">
        {/* Columna principal */}
        <div className="main-column">
          <p>Contenido principal de la página</p>
          <div className="main-image-box">
            <img src="https://via.placeholder.com/600x400" alt="Imagen principal" className="main-image" />
          </div>
          <CardIn/>
          <CardMa  text="Este es un texto extremadamente largo que se recortará inicialmente. Si el usuario desea leer más, puede hacer clic en el acordeón para expandir el contenido completo..." />
        </div>

        {/* Columna secundaria (slide) */}
        <div className="side-column">
          <p>Slide o contenido adicional</p>
          <div className="image-container">
          <div className="image-box">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" className="responsive-img" />
            </div>
            <div className="image-box">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 2" className="responsive-img" />
            </div>
            <div className="image-box">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 3" className="responsive-img" />
            </div>
          </div>
          <CardCont/>
          
        </div>
      </div>
    </div>
  );
}

export {AlquilerLayout};
