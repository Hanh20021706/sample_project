import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../../api/product';
import { PRODUCT_TYPE } from '../../../types/product'

const ProductsList = () => {
    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);


    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    }

    const ondelete = async (_id: number) => {
        const response = await deleteProduct(_id);
        if (response.status === 200) {
            handleGetProducts();
        }
    }
    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <div style={{marginTop: '20px'}}>
            <h2 style={{fontSize: '20px' , textAlign: 'center', marginBottom: '50px'}}>
                QUẢN LÝ SẢN PHẨM
            </h2>
            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">DESC</th>
                        <th scope="col">IMG</th>
                        <th scope="col">status</th>
                        <th scope="col">DETAIL</th>
                        <th scope="col">EDIT</th>
                        <th scope="col">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id}>

                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                                <td>{product.img}</td>
                                <td>{product.status ? 'an' : 'hien thi'}</td>
                                <td>
                                    <Link  className="btn btn-info" to={`/products/${product._id}`}>
                                        <i className="fa-solid fa-calendar-day" style={{color: '#fff'}} />

                                    </Link>
                                </td>
                                <td>
                                    <Link className="btn btn-warning" to={`/products/edit/${product._id}`}>
                                        <i className="fa-solid fa-pen-to-square" />

                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => ondelete(product._id as number)}>

                                        <i className="fa-solid fa-delete-left" />

                                    </button>

                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
            <Link style={{margin: '10px 0px'}} className='btn btn-success' to={'/admin/products/create'}>
                Thêm Sản Phẩm
            </Link>

        </div>
    )
}

export default ProductsList
