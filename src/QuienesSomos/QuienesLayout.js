import React from 'react';
import { Box, Typography } from '@mui/material';
import {ImageTextRow} from './components/ImageTextRow';
import {CenteredTitleDescription} from './components/CenteredTitleDescription';
import {IconDescriptionRow} from './components/IconDescriptionRow';

function AboutUs() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }} >
      {/* Título principal centrado */}
      <Typography variant="h4" align="center" gutterBottom  sx={{ fontWeight: 'bold' }}>
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
        imageUrl="/img/quien2.svg"
        altText="Descripción de la imagen"
        description="Satisfacer y superar con responsabilidad y cordialidad las necesidades inmobiliarias de todas aquellas personas que confían en nuestra empresa para realizar operaciones comerciales vinculadas a sus propiedades."
        reverse={true}
      />

      {/* Tercera fila - Título centrado y Descripción */}
      <CenteredTitleDescription
        title="Visión"
        description="Estar siempre a disposición de nuestros clientes para lograr a través de la acción conjunta y comprometida de cada uno de nosotros, una relación personal y profesional tendiente a la maximización de nuestras acciones en todos los ámbitos en los que actuamos."
      />
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Valores
      </Typography>
      {/* Cuarta fila - Iconos con descripciones */}
      <div>
      <IconDescriptionRow
        icons={[
          { icon: 'star', title: 'Servicialidad', description: 'Nos orientamos al otro para escuchar sus necesidades y satisfacerlas ampliamente tanto en el ámbito laboral como personal, destacando siempre las prioridades de nuestros clientes.' },
          { icon: 'people', title: 'Respeto', description: 'Entendemos y actuamos respetuosamente ante cada situación que se nos presenta para crear un ambiente en el que prime la tolerancia y la comprensión hacia el otro como pilar fundamental de toda relación comercial.' }
        ]}
      />

      {/* Quinta fila - Iconos con descripciones */}
      <IconDescriptionRow
        icons={[
          { icon: 'public', title: 'Responsabilidad', description: 'Asumimos los compromisos de manera humana y profesional como verdaderos pactos de honor entre las partes y cumplimos con honradez y respeto la tarea que nos es confiada.' },
          { icon: 'security', title: 'Excelencia', description: 'Damos de nosotros lo mejor y, más aún, en pos de lograr impregnar de calidad los servicios que brindamos.' }
        ]}
      />
      </div>
    </Box>
  );
}

export { AboutUs }
