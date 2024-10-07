import { postData } from './httpService';

/**
 * Realiza la autenticación de administrador, obtiene el token para los endpoints protegidos.
 * @param {Object} loginRequest 
 * @returns {Promise} Resuelve con el token de autorización si la autenticación es exitosa.
 */
export const authenticateUser = async (loginRequest) => {
    try {
        const response = await postData("/auth/signin", loginRequest);
        
        // Verifica si la respuesta tiene un token
        if (response && response.token) {
            // Guarda el token en localStorage
            localStorage.setItem('jwt_token_inmox2024', response.token);
            
            // Devuelve el token o la respuesta completa
            return response.token; 
        } else {
            throw new Error("No se recibió token en la respuesta.");
        }
    } catch (error) {
        console.error("Error en la autenticación:", error);
        throw error; // Rechaza la promesa si hay un error
    }
};


/**
 * Realiza el cierre de session, borrando el token.
 * @returns 
 */
export const logoutUser = async () => {
    localStorage.setItem('jwt_token', null);
    return await postData("/auth/signout");
};
