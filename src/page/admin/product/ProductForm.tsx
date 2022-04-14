import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams, } from 'react-router-dom'
import { createProduct, getProduct, updateProduct,  } from '../../../api/product';
import { PRODUCT_TYPE } from '../../../types/product';

const ProductForm = () => {
    const navigate = useNavigate();
    const { _id } = useParams();

    const [imgBase64, setImgBase64] = useState<any>('');


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
            status: +data.status,
            img : imgBase64

        }
        if(_id){
            return handleUpdateProduct(submitData);
        }
        return handleSubmitProduct(submitData);
    }

    // update
    const handleUpdateProduct = async (data : PRODUCT_TYPE) => {
        const response = await updateProduct(_id, data);
        if(response.status === 200){
            navigate('/admin/products')
        }
    }

    // get 
    const handleGetProduct = async (_id : string) => {
        const response = await getProduct(_id);
        if(response.status === 200){
           reset({
               ...response.data,
               status: `${response.data.status}`

           })
        }
    }




    // up img
    const getEventResult = (event: any) => {
        if (event && event.target && typeof event.target.result == 'string') {
            return event.target.result;

        }
        return;
    }

    const handleChangeFile = (event: any) => {
        const file = event.target.files[0];
        if (!file) {
            console.log("khong co file");
            return;
        } else if (file.size > 5000000000) {
            console.log("file qua lon");
            return;
        }
        const render = new FileReader();

        render.onload= (e) => {
            const image = new Image();
            if(e && e.target){
                image.src = getEventResult(e);
                console.log(image.width, image.height, file.size, file.type);
                setImgBase64(e.target.result);
            }
        }
        render.readAsDataURL(file);

    }



    useEffect(() => {
        if(_id){
            handleGetProduct(_id)
        }
    }, [_id])


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '70px' }}>
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
                        <input type="file" className="form-control"
                                onChange={(event) => handleChangeFile(event)}
                                
                        />
                        <img src={imgBase64} width={200} style={{marginTop: '20px'}} alt="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">status</label>

                        <input className="form-check-input" type="radio"   {...register('status')} value={1} /> hien
                        <input className="form-check-input" type="radio"   {...register('status')} value={0} /> an


                    </div>

                    <button className="btn btn-primary">Submit</button>
                    <Link className='btn btn-dark' style={{ margin: '0px 10px' }} to={'/admin/products'}>
                        Trở Lại
                    </Link>
                </div>
            </form >

        </div >
    )
}

export default ProductForm
