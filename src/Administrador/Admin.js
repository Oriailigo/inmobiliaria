import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {Header} from './components/Header';
import {SideMenu} from './components/SideMenu';
import {Tabla} from './components/Tabla'; // Importamos el componente Tabla
import './Admin.css'; // Importamos los estilos personalizados
import { TablaUsuarios } from './components/TablaUsuarios';
import { CargarPropiedad } from './components/CargarPropiedad';
import { GraficoVisitas } from './components/GraficoVisitas';
import { TraficoUsuarios } from './components/TraficoUser';
import { PropiedadesVisitadas } from './components/PropiedadesVisitadas';
import { RecientesUsuarios } from './components/RecientesUsuarios';
import { VisitasLayout } from './components/VisitasLayout';


const DashboardLayout = () => {
     // Estado para manejar qué contenido mostrar
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  // Función para actualizar el contenido según el botón seleccionado
  const handleMenuItemClick = (menu) => {
    setSelectedMenu(menu);
  };
 
 return (

    <Box >
        <Header />
        <div className="dashboard-layout">
        {/* SideMenu */}
        <SideMenu onMenuItemClick={handleMenuItemClick} />

        {/* Contenido principal dinámico */}
        <Box className="content-area">
            {/* Título */}
            {/* Mostrar el contenido dinámico basado en el botón seleccionado */}
            {selectedMenu === 'Propiedades' && (
              <>
                <div className="cont-text">
                    <Typography variant="h5" className="dashboard-title">
                    Hola Franco
                    </Typography>
                    <Typography variant="body1" className="dashboard-subtitle">
                    esto es lo que está pasando con tu inmobiliaria hoy
                    </Typography>
                </div>
                {/* Tabla para Propiedades */}
                <Tabla />
              </>
            )}

            {selectedMenu === 'AgregarPropiedad' && (
               <>
               <div className="cont-text">
                   <Typography variant="h5" className="dashboard-title">
                   Hola Franco
                   </Typography>
                   <Typography variant="body1" className="dashboard-subtitle">
                   esto es lo que está pasando con tu inmobiliaria hoy
                   </Typography>
               </div>
               {/* Tabla para Propiedades  
               <TablaUsuarios />  */}
               <CargarPropiedad/>
             </>
            )}
              {selectedMenu === 'Reports' && (
               <>
               <div className="cont-text">
                   <Typography variant="h5" className="dashboard-title">
                   Hola Franco
                   </Typography>
                   <Typography variant="body1" className="dashboard-subtitle">
                   esto es lo que está pasando con tu inmobiliaria hoy
                   </Typography>
               </div>
               {/* Tabla para Propiedades  
               <TablaUsuarios />  */}
               <VisitasLayout/>
             </>
            )}
                 {selectedMenu === 'UsuariosConectados' && (
               <>
               <div className="cont-text">
                   <Typography variant="h5" className="dashboard-title">
                   Hola Franco
                   </Typography>
                   <Typography variant="body1" className="dashboard-subtitle">
                   esto es lo que está pasando con tu inmobiliaria hoy
                   </Typography>
               </div>
              
               <TablaUsuarios />
             </>
            )}
        
        </Box>
        </div>
    </Box>
  );
};

export  {DashboardLayout};
