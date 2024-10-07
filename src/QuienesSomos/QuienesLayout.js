import React from 'react';
import { Box, Typography } from '@mui/material';
import {ImageTextRow} from './components/ImageTextRow';
import {CenteredTitleDescription} from './components/CenteredTitleDescription';
import {IconDescriptionRow} from './components/IconDescriptionRow';

function AboutUs() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      {/* Título principal centrado */}
      <Typography variant="h4" align="center" gutterBottom>
        Quiénes Somos
      </Typography>

      {/* Primera fila - Imagen y texto */}
      <ImageTextRow
        imageUrl="/img/quien1.svg"
        altText="Descripción de la imagen"
        description="Somos una empresa dedicada a brindar servicios inmobiliarios de alto nivel. Para ello contamos con profesionales orientados a satisfacer y superar los requerimientos de un mercado cada vez más competitivo y exigente. Ofrecemos un servicio personalizado a cada cliente. Nuestra trayectoria, experiencia y confiabilidad hacen que nuestros valores agregados sean la confianza y profesionalismo que nos destacan."
        reverse={false}
      />

      {/* Segunda fila - Texto y imagen */}
      <ImageTextRow
        title="Misión"
        imageUrl="https://via.placeholder.com/500"
        altText="Descripción de la imagen"
        description="Nuestro objetivo es transformar ideas en proyectos exitosos. Creemos en el trabajo en equipo, la responsabilidad y la excelencia como valores fundamentales."
        reverse={true}
      />

      {/* Tercera fila - Título centrado y Descripción */}
      <CenteredTitleDescription
        title="Visión"
        description="Creemos en la transparencia, la innovación constante y el compromiso con nuestros clientes. Estos valores son la base de nuestro éxito."
      />
      <Typography variant="h4" align="center" gutterBottom>
        Valores
      </Typography>
      {/* Cuarta fila - Iconos con descripciones */}
      <div>
      <IconDescriptionRow
        icons={[
          { icon: 'star', title: 'Servicialidad', description: 'Nos esforzamos por alcanzar la excelencia en cada proyecto que emprendemos.' },
          { icon: 'people', title: 'Respeto', description: 'Creemos que el trabajo en equipo es fundamental para lograr resultados excepcionales.' }
        ]}
      />

      {/* Quinta fila - Iconos con descripciones */}
      <IconDescriptionRow
        icons={[
          { icon: 'public', title: 'Responsabilidad', description: 'Siempre buscamos nuevas formas de mejorar y de ofrecer soluciones únicas.' },
          { icon: 'security', title: 'Excelencia', description: 'Nos comprometemos con nuestros clientes para ofrecer el mejor servicio posible.' }
        ]}
      />
      </div>
    </Box>
  );
}

export { AboutUs }
