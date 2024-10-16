import React, { useState }  from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import './CardVent.css';  // Importa el archivo CSS
//minicomponentes
import {Input} from '../ContactForm/InputForm';
import {BasicSelect} from '../ContactForm/SelectForm';
import {TextFieldc} from '../ContactForm/TextfieldForm';
import {CustomModal} from '../Ventas/Modal'; // Importa el modal personalizado

const StyledCard = styled(Card)({
  padding: '2rem',
});

function CardVent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <StyledCard>
      <CardHeader
        title={
          <div className='center'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Vendé tu propiedad</Typography>
            <Typography variant="body2" color="textSecondary">
              Completá el formulario y una oficina adherida a la red de Franco se pondrá en contacto con vos para continuar con el proceso.
            </Typography>
          </div>
        }
       
        titleTypographyProps={{ align: 'center' }}
        className="card-header"
       
       
      
      />
      <CardContent>
       
        <div className="form-container">
        <div className="input-container">
            <Input required label="Nombre y Apellido" />
            <Input required label="Telefono" />
            <Input required label="Email" />
            <Input label="Telefono" />
            <Input label="Localidad/Provincia" />
            <BasicSelect label="Tipo de propiedad" />
        </div>

          <TextFieldc
            label="Déjanos tu duda"            
          />
         
        </div>
      </CardContent>
      <CardActions className="container-center">
      <div className="container-center">
          <div>
            <Button variant="contained" color="info" className="btn-min" sx={{ backgroundColor: '#FFD466', color: 'gray'}} onClick={handleOpenModal}>
                  Enviar
                </Button>
                {/* Modal personalizado */}
            <CustomModal open={isModalOpen} onClose={handleCloseModal} />
          </div>
          <p className="terms">
            Al enviar se están aceptando los Términos y Condiciones de Uso y la Política de Privacidad
          </p>
          </div>
      </CardActions>
    </StyledCard>
  );
}

export {CardVent};
