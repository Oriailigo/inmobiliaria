import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Phone, MailOutline, Home } from '@mui/icons-material';
import './CardIcon.css';

function CardIcon() {
  return (
 
      <div className="content-mg">
      
        {/* Contenedor de 2 columnas debajo del título */}
        <div className="info-columnsIcon ">
          <div className="info-column ">
            {/* Primera columna con 3 íconos */}
            
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/total-surface.svg" alt="Icono" width={24} height={24} />
              <p>superficie total: 520</p>
            </div>
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/covered-surface.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
              <p>superficie cubierta: 450</p>
            </div>
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/rooms.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
               
              <p>ambientes:3</p>
            </div>
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/bathrooms.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
                
              <p>baños:2</p>
            </div>
         </div>
          <div className="info-column">
            {/* Segunda columna con íconos adicionales si es necesario */}
            {/* Puedes añadir más iconos o contenido aquí */}
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/antiquity.svg" alt="Icono" width={24} height={24} />
            
              <p>10 años de antiguedad</p>
            </div>
            
            <div className="info-row">
            <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/expenses.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
             
              <p>expensas:ARS 150.000</p>
            </div>
            
            <div className="info-row">
            <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/garage.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
             
              <p>cocheras:2</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export {CardIcon};
