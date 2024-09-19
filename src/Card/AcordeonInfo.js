import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './AcordeonInfo.css';  // Estilos

const MAX_LENGTH = 100; // Número de caracteres a mostrar antes del recorte

function AccordionExpandIcon({ text }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);  // Alterna el estado de expansión
  };

  return (
    <div className="text-accordion-container">
      <Typography variant="body1" className="preview-text">
        {/* Si el texto es largo, mostrar la versión recortada con "Ver más" */}
        {expanded ? text : `${text.slice(0, MAX_LENGTH)}...`}
      </Typography>

      {/* Si el texto es más largo que MAX_LENGTH, mostrar el acordeón */}
      {text.length > MAX_LENGTH && (
        <Accordion expanded={expanded} onChange={handleExpandClick} className="accordion-responsive">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="toggle-text">
              {expanded ? 'Ver menos' : 'Ver más'}
            </Typography>
          </AccordionSummary>
          
        </Accordion>
      )}
    </div>
  );
}

export {AccordionExpandIcon}
