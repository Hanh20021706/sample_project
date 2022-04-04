import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createProduct, getProduct, updateProduct } from '../../../api/product';
import { PRODUCT_TYPE } from '../../../types/product';

const ProductForm = () => {
    const navigate = useNavigate();
    const { _id } = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            price: '',
            desc: '',
            img: '',
            status: 0,

        }
    })

    const handleSubmitProduct = async (data: PRODUCT_TYPE) => {
        const response = await createProduct(data);
        if (response.status === 200) {
            navigate('/admin/products')
        }
    }

    const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data) => {
        const submitData = {
            ...data,
            status: +data.status

        };
        if(_id){
            return handleUpdateProduct(submitData);


        }
        return handleSubmitProduct(submitData);
    }

    const handleGetProduct = async (_id : string)=> {
        const response = await getProduct(_id)
        if(response.status === 200){
            reset({...response.data, status: `${response.data.status}`})
        }

    }
    const handleUpdateProduct = async (data : PRODUCT_TYPE) => {
        const response = await updateProduct(_id, data);
        if(response.status === 200){
            navigate('/admin/products')
        }
    }

    useEffect(() => {
        if(_id){
            handleGetProduct(_id)
        }
    }, [_id])


    return (
        <div>
            <form onClick={handleSubmit(onSubmit)} style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
                <div className="">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            {
                            ...register('name',
                                {
                                    required: { value: true, message: "khong the bo trong" }
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
                        <input type="number" className="form-control"
                            {
                            ...register('price',
                                {
                                    required: { value: true, message: "khong the bo trong" }
                                }
                            )
                            }
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.price ? errors.price.message : ''}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">desx</label>
                        <textarea className="form-control"
                            {
                            ...register('desc',
                                {
                                    required: { value: true, message: 'khong the bo trong' }
                                }
                            )
                            }

                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.desc ? errors.desc.message : ''}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">img</label>
                        <input type="text" className="form-control"
                            {
                            ...register('img',
                                {
                                    required: { value: true, message: "khong the bo trong" }
                                }
                            )
                            }
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.img ? errors.img.message : ''}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">status</label>

                        <input className="form-check-input" type="radio"   {...register('status')} value={0} defaultChecked /> an
                        <input className="form-check-input" type="radio"   {...register('status')} value={1} defaultChecked /> hien


                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className='btn btn-dark' style={{ margin: '0px 10px' }} to={'/admin/products'}>
                        Trở Lại
                    </Link>
                </div>
            </form >

        </div >
    )
}

export default ProductForm
