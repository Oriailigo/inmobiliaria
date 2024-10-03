import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AlquilerLayout } from './Alquiler/AlquilerLayout';
import { AlquileresLayout } from './Alquileres/AlquileresLayout';
import { EmprendimientosLayout } from './Emprendimientos/EmprendimientosLayout';
import { ContactoLayout } from './Contacto/ContactoLayout';
import { VentaLayout } from './Ventas/VentasLayout';
import { AboutUs } from './QuienesSomos/QuienesLayout';
import { PropertySearchPage } from './VerMapa/VerMapaLayout';
import { LoginContainer } from './Login/LoginLayout';
import { TasacionesLayout } from './Tasaciones/TasacionesLayout'; // Si tienes este layout
import { InicioLayout } from './Inicio/InicioLayout'; // Si tienes este layout

// Componente de menú de navegación (el que me diste)
import { ButtonMenu } from './Menu/ButtonMenu';

function App() {
  return (
    <Router>
      {/* Menú de navegación */}
      <header className="header">
        <div className="header-row centered">
        <ButtonMenu/>
        </div>
     
      </header>
     
      
      {/* Configuración de rutas */}
      <Routes>
        <Route path="/" element={<InicioLayout />} />
        <Route path="/alquileres" element={<AlquileresLayout />} />
        <Route path="/alquiler" element={<AlquilerLayout />} /> {/* Nueva ruta para AlquilerLayout */}
        <Route path="/ventas" element={<VentaLayout />} />
        <Route path="/ver-mapa" element={<PropertySearchPage />} />
        <Route path="/tasaciones" element={<TasacionesLayout />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/emprendimientos" element={<EmprendimientosLayout />} />
        <Route path="/contacto" element={<ContactoLayout />} />
        <Route path="/iniciar-sesion" element={<LoginContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
