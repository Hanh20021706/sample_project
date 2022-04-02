import api from "./instance";

export const getProducts = () => {
    return api.get('/products')
}
export const getProduct = (id : string | undefined) => {
    return api.get(`/products/${id}`)
}
export const createProduct = (data: any) => {
    return api.post('/products', data)
} 
export const deleteProduct = (id : number | string) => {
    return api.delete(`/products/${id}`)
}
export const updateProduct = (id : string | undefined , data: any) => {
    return api.put(`/products/${id}`)
}