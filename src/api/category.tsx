import api from "./instance";

export const getCategories = () => {
    return api.get('/categories')
}
export const getCategory = (_id : string | undefined) => {
    return api.get(`/categories/${_id}`)
}
export const createCategory = (data: any) => {
    return api.post('/categories', data)
} 
export const deleteCategory = (_id : number | string) => {
    return api.delete(`/categories/${_id}`)
}
export const updateCategory = (_id : string | undefined , data: any) => {
    return api.put(`/categories/${_id}`)
}