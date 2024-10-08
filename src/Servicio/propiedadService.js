import { fetchData, postData, deleteData } from './httpService';

/**
 * Obtiene las propiedades que tiene en favoritos el email.
 * @param {} email 
 * @returns 
 */
export const getPropiedadesFavoritas = async (email) => {
    return await fetchData("/public/propiedad/favorito", { email: email })
}

/**
 * Actualiza o crea un favortio
 * @param {} favoritoDTO 
 * @returns 
 */

export const updateFavorito = async (favoritoDTO) => {
    return await postData("/public/favorito", favoritoDTO);
};



/**
 * Obtiene el listado de propiedaes con paginado.
 * @param {*} pageable 
 * @returns 
 */
export const getAllPropiedades = async ({ page = 0, size = 10, soloActivas = true } = {}) => {
    const pageable = {
        page,
        size,
        soloActivas
    };
    return await fetchData("/public/propiedad/all", pageable);
};

/**
 * Obtiene una propiedad por su id
 * @param {*} id 
 * @returns 
 */
export const getPropiedadById = async (id) => {
    return await fetchData(`/public/propiedad/${id}`);
};

/**
 * Crea o actualiza una propiedad
 * @param {*} propiedadDTO 
 * @returns 
 */
export const updateOrCreatePropiedad = async (propiedadDTO) => {
    return await postData("/admin/propiedad", propiedadDTO);
};

/**
 * Borra una propiedad por su id
 * @param {*} id 
 * @returns 
 */
export const deletePropiedad = async (id) => {
    return await deleteData(`/admin/propiedad/${id}`);
};
