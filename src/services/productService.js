import { productApi } from "./productApi"

export const getProducts = () => {
    return productApi.get('');
}