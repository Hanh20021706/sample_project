import api from "./instance";

export const getCategories = () => {
    return api.get('/categories')
}
export const getCategory = (id : string | undefined) => {
    return api.get(`/categories/${id}`)
}
export const createCategory = (data: any) => {
    return api.post('/categories', data)
} 
export const deleteCategory = (id : number | string) => {
    return api.delete(`/categories/${id}`)
}
export const updateCategory = (id : string | undefined , data: any) => {
    return api.put(`/categories/${id}`)
}