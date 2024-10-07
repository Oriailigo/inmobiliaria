import httpService, { getImagenURL }  from "./httpService";
/**
 * Metodo para subir imagenes.
 * @param {} file 
 * @param {*} headers 
 * @returns 
 */
export const uploadImage = async (file, headers = {}) => {
  const formData = new FormData();
  formData.append('file', file); // 'file' es el nombre del campo esperado por el backend
  const response = await httpService("/admin/multimedia/upload", 'POST', formData, {
    ...headers,
  });
  
  return response.data;
};


export const getImagen = (nombre)=>{
    return getImagenURL(nombre);
}