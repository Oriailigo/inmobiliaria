import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AlquilerLayout } from './Alquiler/AlquilerLayout';
import { AlquileresLayout } from './Alquileres/AlquileresLayout';
import { EmprendimientosLayout } from './Emprendimientos/EmprendimientosLayout';
// import { ContactoLayout } from './Contacto/ContactoLayout';
import { VentaLayout } from './Ventas/VentasLayout';
import { AboutUs } from './QuienesSomos/QuienesLayout';
import { PropertySearchPage } from './VerMapa/VerMapaLayout';
import { LoginContainer } from './Login/LoginLayout';
import { TasacionesLayout } from './Tasaciones/TasacionesLayout'; // Si tienes este layout
import { InicioLayout } from './Inicio/InicioLayout'; // Si tienes este layout

// Componente de menú de navegación (el que me diste)
import { ButtonMenu } from './Menu/ButtonMenu';
import { fetchData } from './Servicio/httpService';
import { getAllPropiedades, getPropiedadesFavoritas, updateOrCreatePropiedad } from './Servicio/propiedadService';
import { authenticateUser } from './Servicio/authService';
import UploadComponent from './UploadComponent ';

function App() {

  useEffect(()=>{

    procesar();
    
  },[]);

  async function procesar() {
    try {
      let resp = await getPropiedadesFavoritas("matias@gmail.com");
      console.log(resp);
      let login = await authenticateUser({email:"matias@gmail.com" , password:"123"});
      console.log(login);
      let props = await getAllPropiedades();
      console.log(props);

      let primera = props.content[0];
      primera.descripcion += 'MODIFICADA '
      let updateProp = await updateOrCreatePropiedad(primera);
      console.log(updateProp)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      {/* Menú de navegación */}
      <header className="header">
        <div className="header-row centered">
        <ButtonMenu/>
        </div>
     
      </header>
      <UploadComponent></UploadComponent>
      
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
        {/* <Route path="/contacto" element={<ContactoLayout />} /> */}
        <Route path="/iniciar-sesion" element={<LoginContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
