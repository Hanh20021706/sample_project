import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { getCategories } from '../../../api/category';
import { createProduct } from '../../../api/product';
import { CATEGORY_TYPE } from '../../../types/category';
import { PRODUCT_TYPE } from '../../../types/product';

const ProductForm = () => {
    const [categories, setCategories] = useState<CATEGORY_TYPE[]>([]);

    const navigate = useNavigate();
    const { _id } = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            price: 0,
            desc: '',
            categoryId: 0
        }
    });
    const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data) => {
        const submitData = {
            ...data,
        }
        handleSubmitProduct(submitData);
    }
    const handleSubmitProduct = async (data: PRODUCT_TYPE) => {
        const response = await createProduct(data);
        if (response.status === 200) {
            navigate('/admin/products')
        }
    }
    const handleGetCate = async () => {
        const response = await getCategories();
        setCategories(response.data)
    }


    useEffect(() => {
        handleGetCate();
    }, [])

    return (
        <div>
            <form onClick={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="name"
                            {
                            ...register('name',
                                {
                                    required: { value: true, message: "không thể bỏ trống" }
                                }
                            )
                            }
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.name ? errors.name.message : ''}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price</label>
                        <input type="number" className="form-control" placeholder="price"
                            {
                            ...register('price',
                                {
                                    required: { value: true, message: "không được bỏ trống" }

                                }
                            )
                            }
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.price ? errors.price.message : ''}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mô Tả</label>
                        <textarea className="form-control"
                            {
                            ...register('desc',
                                {
                                    required: { value: true, message: "không thể bỏ trống" }
                                }
                            )
                            }
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.desc ? errors.desc.message : ''}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Categories</label>
                        <select className="form-select" 
                            {
                                ...register('categoryId',
                                {
                                    required : {value: true, message: "khong bo trong"}
                                }
                                )
                            }
                        >
                            {
                                categories.map(category => (
                                        <option value={category._id}>{category.name}</option>    
                                ))
                            }
                           
                            
                        </select>
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.categoryId ? errors.categoryId.message : ''}
                        </div>
                       
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
        </div>
            </form >

        </div >
    )
}

export default ProductForm
