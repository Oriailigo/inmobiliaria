import React, { useState } from 'react';
import { getImagen, uploadImage } from './Servicio/multimediaService';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [url, setUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        debugger;
        const fileName = await uploadImage(selectedFile);
        setUploadMessage(`Archivo subido correctamente: ${fileName}`);
        setUrl(getImagen(fileName));
      } catch (error) {
        setUploadMessage(`Error al subir el archivo: ${error.message}`);
      }
    } else {
      setUploadMessage('Primero debe seleccionar el archivo.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
      {url && <p>{url}</p>}
    </div>
  );
};

export default UploadComponent;
