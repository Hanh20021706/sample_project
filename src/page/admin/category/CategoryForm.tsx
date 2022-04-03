import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { createCategory, updateCategory } from '../../../api/category';
import { CATEGORY_TYPE } from '../../../types/category';

const CategoryForm = () => {
    const navigate = useNavigate();
    const {_id} = useParams();

    const {register, handleSubmit, formState: {errors} , reset} = useForm({
        defaultValues : {
            name : ''
        }
    });

    const onSubmit : SubmitHandler<CATEGORY_TYPE> = (data) => {
        const submiData = {
            ...data,
        }
        if(_id){
            return handlerUpdateCate(submiData);
        }
        handleSubmitCate(submiData);
    }

    const handleSubmitCate = async (data: CATEGORY_TYPE) => {
        const response = await createCategory(data);
        if(response.status === 200){
            navigate('/admin/categories')

        }
    }
    const handlerUpdateCate = async (data : CATEGORY_TYPE) => {
        const response = await updateCategory(_id, data);
        if(response.status === 200){
            navigate('/admin/categories')
        }
    }

    useEffect(() => {

    }, [])


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control"
                        {
                            ...register('name' ,
                                {
                                    required : {value: true, message: "khong the bo trong"}
                                }
                            )
                        }
                        />
                        <div id="emailHelp" className="form-text" style={{color: 'red'}}>
                            {errors.name ? errors.name.message: ''}
                        </div>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CategoryForm
