import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import {ContactForm} from './Componentes/Contacto/Form';
import {CardIn} from '../Card/CardInfo';
import {CardMa} from '../Card/CardMas';
import {CardMapa} from '../Card/CardMapa';
import {Breadcrumb} from '../BreadcrumbNavegacion/Breadcrumb';
import PhotoIcon from '@mui/icons-material/Photo'; // Asegúrate de tener los íconos instalados
import VideoIcon from '@mui/icons-material/VideoLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw'; // Icono para Fotos 360
import ViewInArIcon from '@mui/icons-material/ViewInAr'; // Icono para Tour Virtual
import { ActionAreaCard } from '../Inicio/ActionAreaCard'; // Si tienes este layout

import './AlquilerLayout.css';  // Importa los estilos

function AlquilerLayout() {
    //estados de corazon
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  //estados de footo o video
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
       {/* Ícono de corazón */}
       <div className='left-favourite'>
            <IconButton
              onClick={handleFavoriteClick}
              className= {`favorite-icon ${isFavorited ? 'favorited' : ''}`}
            >
              <FavoriteIcon
                sx={{
                  marginRight: { xs: '2rem', sm: '0rem' },
                  color: isFavorited ? 'red' : 'inherit', // Cambia el color a rojo si está favorito
                }}
              />
            </IconButton>
        </div>
      <div className="button-group-alquiler">
       
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
          <CardMa  text="Alquiler Casa 3 ambientes Quilmes - Alquiler de Casa 3 ambientes, en el barrio Casas del Bosque, la propiedad se desarrolla en 2 plantas. Planta baja" />
          <CardMapa/>
        </div>

        {/* Columna secundaria (slide) */}
        <div className="side-column">
       
          <ContactForm/>
          
        </div>
      </div>
      <div className="main-container main-alquiler">
        <div className="title-row">
          <h2>Busquedas relacionadas</h2>
        </div>
        
      </div>
      
      <div className="main-container">
       <div className="button-group">
         
         {/* Botones alineados a la derecha */}
         <div className="button-group-right">
         <ActionAreaCard image="/img/inicio4.svg" titulo="Casa en Del Carril" precio="75,000 dolares"/>
         <ActionAreaCard image="/img/inicio5.svg" titulo="Gonzalez y San Millan" precio="150,000 dolares" />
         <ActionAreaCard image="/img/inicio6.jpg" titulo="Casa a restaurar + garaje" precio="80,000 dolares" />
         </div>
         
       </div>
       
     </div>
    </div>
  );
}

export {AlquilerLayout};
