//EJEMPLOS DE USO

//POST
// const [formData, setFormData] = useState({ name: '', email: '' });
// const responseData = await postData('users', formData); 

//GET
// const [formData, setFormData] = useState({ name: '', email: '' });
// const user = await fetchData(`users/${userId}` , formData);


//PUT
// const [formData, setFormData] = useState({ name: '', email: '' });
// const updatedUser = await putData(`users/${userId}`, formData);

//DELETE
// const result = await deleteData(`users/${userId}`); 

//SUBIR ARCHIVO
//const response = await uploadFile('upload-endpoint', file); 


// service.js

const BASE_URL = process.env.REACT_APP_API_URL;

const httpService = async (url, method = 'GET', data = null, headers = {}) => {
  let finalUrl = `${BASE_URL}${url}`;

  const token = localStorage.getItem('jwt_token_inmox2024');

  // Configurar los headers, incluyendo el Authorization si existe el token
  let config = {
    method,
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  // Verificar si los datos incluyen archivos (FormData)
  let isFileUpload = false;

  // Si el método es GET y hay parámetros, convertirlos a query params
  if (method === 'GET' && data) {
    const queryString = new URLSearchParams(data).toString();
    finalUrl = `${finalUrl}?${queryString}`;
  } else if (data) {
    if (data instanceof FormData) {
      isFileUpload = true; // Indica que estamos subiendo archivos
      config.body = data; // Asigna el FormData al body
    } else {
      config.headers['Content-Type'] = 'application/json'; // Establece JSON solo si no es archivo
      config.body = JSON.stringify(data); // Convierte los datos a JSON
    }
  }

  try {
    const response = await fetch(finalUrl, config);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.message || 'Error en la solicitud');
    }

    const responseData = await response.json();
    return responseData;

  } catch (error) {
    console.error('Error en la petición:', error);
    throw error;
  }
};

export const getImagenURL = (nombre) => {
    return `${BASE_URL}/public/multimedia/${nombre}`;
}

// Método para realizar peticiones GET
export const fetchData = async (url, params = {}, headers = {}) => {
  return httpService(url, 'GET', params, headers);
};

// Método para realizar peticiones POST
export const postData = async (url, data, headers = {}) => {
  return httpService(url, 'POST', data, headers);
};

// Método para realizar peticiones PUT
export const putData = async (url, data, headers = {}) => {
  return httpService(url, 'PUT', data, headers);
};

// Método para realizar peticiones DELETE
export const deleteData = async (url, data = {}, headers = {}) => {
  return httpService(url, 'DELETE', data, headers);
};

// Método para subir archivos
export const uploadFile = async (url, file, headers = {}) => {
  const formData = new FormData();
  formData.append('file', file); // 'file' es el nombre del campo esperado por el backend
  return httpService(url, 'POST', formData, headers);
};

export default httpService;

