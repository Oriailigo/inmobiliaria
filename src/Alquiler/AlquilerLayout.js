import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {CardCont} from '../Card/CardCont';
import {CardIn} from '../Card/CardInfo';
import {CardMa} from '../Card/CardMas';
import {Breadcrumb} from '../BreadcrumbNavegacion/Breadcrumb';
import PhotoIcon from '@mui/icons-material/Photo'; // Asegúrate de tener los íconos instalados
import VideoIcon from '@mui/icons-material/VideoLibrary';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw'; // Icono para Fotos 360
import ViewInArIcon from '@mui/icons-material/ViewInAr'; // Icono para Tour Virtual

import './AlquilerLayout.css';  // Importa los estilos

function AlquilerLayout() {
  const [selectedTab, setSelectedTab] = useState('fotos'); // Estado para controlar la pestaña seleccionada

  const renderContent = () => {
    switch (selectedTab) {
      case 'fotos':
        return (
          <>
              <div className="two-column-container">
                <div className="main-column">
            
                    <div className="main-image-box">
                      <img src="/img/alquiler1.svg" alt="Imagen principal" className="main-image" />
                    </div>
                </div>
                  {/* Columna secundaria (slide) */}
                  <div className="side-column">
                    
                    <div className="image-container">
                      <div className="image-box">
                        <img src="/img/alquiler13.svg" alt="Imagen 1" className="responsive-img" />
                      </div>
                      <div className="image-box">
                        <img src="/img/alquiler13.svg" alt="Imagen 2" className="responsive-img" />
                      </div>
                      <div className="image-box">
                        <img src="/img/alquiler13.svg" alt="Imagen 3" className="responsive-img" />
                      </div>
                    </div>
                    
                    
                  </div>
              </div>
          </>
        );
      case 'video':
        return (
          <>
            <div className="main-image-box">
              {/* Video de YouTube */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your_video_id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
          </>
        );
      // Agregar más casos para 'fotos360' y 'tourVirtual' según sea necesario
      default:
        return null;
    }
  };
  return (
    <div className="web-page">
      {/* Header */}
      <header className="header">
        <div className="header-row left-aligned">
        <Breadcrumb/>
        </div>
      </header>

      {/* Línea separadora */}
      <hr className="separator" />

      {/* Contenedor principal */}
      <div className="main-container main-alquiler">
        <div className="title-row">
          <h2>Alquiler casa 3 ambientes quilmes con pileta</h2>
        </div>
        
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
          <Button
            variant={selectedTab === 'fotos' ? 'contained' : 'outlined'}
            onClick={() => setSelectedTab('fotos')}
          >
            <PhotoIcon /> Fotos
          </Button>
          <Button
            variant={selectedTab === 'video' ? 'contained' : 'outlined'}
            onClick={() => setSelectedTab('video')}
          >
            <VideoIcon /> Video
          </Button>
          <Button
            variant={selectedTab === 'fotos360' ? 'contained' : 'outlined'}
            onClick={() => setSelectedTab('fotos360')}
          >
            <Rotate90DegreesCcwIcon /> Fotos 360
          </Button>
          <Button
            variant={selectedTab === 'tourVirtual' ? 'contained' : 'outlined'}
            onClick={() => setSelectedTab('tourVirtual')}
          >
            <ViewInArIcon /> Tour Virtual
          </Button>
          </div>
        </div>
      {/* Contenedor de 2 columnas */}
      <div >
        {renderContent()}
    
      </div>
      <div className="two-column-container">
        {/* Columna principal */}
        <div className="main-column">
         
          <CardIn/>
          <CardMa  text="Este es un texto extremadamente largo que se recortará inicialmente. Si el usuario desea leer más, puede hacer clic en el acordeón para expandir el contenido completo..." />
        </div>

        {/* Columna secundaria (slide) */}
        <div className="side-column">
       
          <CardCont/>
          
        </div>
      </div>
    </div>
  );
}

export {AlquilerLayout};
