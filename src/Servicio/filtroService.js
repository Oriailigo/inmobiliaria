import { fetchData } from "./httpService";

export const getTiposPropiedades = async() => {
    return await fetchData(`/public/filtro/tipos_propiedad`);
}

export const getTags = async (busqueda) => {
    return await fetchData(`/public/filtro/tags?query=${busqueda}`);
}