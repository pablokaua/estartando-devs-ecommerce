import { productApi } from "./productApi"

export const getProducts = () => {
    return productApi.get('');
}

export const getProduct = (id) => {
    return productApi.get(`/${id}`);
}

export const getCategories = (category) => {
    return productApi.get(`/categorias/${category}`)
}