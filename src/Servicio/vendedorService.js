import { fetchData, postData } from './httpService';

/**
 * Obtiene todos los vendedores sin paginado.
 * @returns 
 */
export const getAllVendedores = async () => {
  return await fetchData("/admin/vendedor");
};

/**
 * Crea o actualiza un vendedor
 * @param {*} vendedorDTO 
 * @returns 
 */
export const updateOrCreateVendedor = async (vendedorDTO) => {
  return await postData("/admin/vendedor", vendedorDTO);
};
