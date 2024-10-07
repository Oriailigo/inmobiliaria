import { postData } from "./httpService";

/**
 * Envia la solicitud de contacto, junto con el email al admin del sistema.
 * @param {} contactoDTO 
 * @returns 
 */
export const enviarContacto = async (contactoDTO) => {
    return await postData("/public/contacto", contactoDTO);
};