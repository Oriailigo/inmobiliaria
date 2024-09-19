import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
//iconos
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import Button from '@mui/material/Button';
import './CardCont.css';  // Importa el archivo CSS
//minicomponentes
import {Input} from '../ContactForm/InputForm';
import {TextFieldc} from '../ContactForm/TextfieldForm';

const StyledCard = styled(Card)({
  padding: '2rem',
});

function CardCont() {
  return (
    <StyledCard>
      <CardHeader
        title="Contacto"
        action={
          <div className="header-icons">
            <IconButton>
              {/* Ejemplo de iconos, reemplázalos según sea necesario */}
              <WhatsAppIcon style={{ color: '#25D366' }} />
            </IconButton>
            <IconButton>
              <PhoneIcon style={{ color: '#000'}} />
            </IconButton>
            <IconButton>
              <EmailIcon  style={{ color: '#000' }} />
            </IconButton>
          </div>
        }
        titleTypographyProps={{ align: 'left' }}
        actionTypographyProps={{ align: 'right' }}
        className="card-header"
      />
      <CardContent>
        <div className="second-row">
          <HomeIcon />
          <span>Franco Lopez</span>
        </div>
        <div className="form-container">
        <div className="input-container">
            <Input label="Nombre y Apellido" />
            <Input label="Telefono" />
            <Input label="Email" />
            <Input label="Telefono" />
        </div>

          <TextFieldc
            label="Mensaje"            
          />
         
        </div>
      </CardContent>
      <CardActions className="container-center">
      <div className="container-center">
      <Button variant="contained" color="primary" className="btn-min">
            Contactar
          </Button>
          <p className="terms">
            Al enviar se están aceptando los Términos y Condiciones de Uso y la Política de Privacidad
          </p>
          </div>
      </CardActions>
    </StyledCard>
  );
}

export {CardCont};
