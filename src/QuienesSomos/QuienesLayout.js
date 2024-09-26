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
        imageUrl="https://via.placeholder.com/500"
        altText="Descripción de la imagen"
        description="Somos una empresa dedicada a la innovación y calidad en todos nuestros servicios. Nuestra misión es mejorar la vida de nuestros clientes mediante soluciones eficientes y de alto impacto."
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
