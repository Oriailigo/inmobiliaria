import { fetchData, postData } from './httpService';

/**
 * Obtiene la informacion de la inmobiliaria
 * @returns 
 */
export const getInmobiliaria = async () => {
    return await fetchData("/public/informacion/inmobiliaria")
}

/**
 * Crea o actualiza el objeto unico inmobiliaria
 * @param {} inmobiliariaDTO 
 * @returns 
 */

export const updateInmobiliaria = async (inmobiliariaDTO) => {
    return await postData("/admin/inmobiliaria", inmobiliariaDTO);
};