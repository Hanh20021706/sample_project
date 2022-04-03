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

    const ondelete = async (_id : number) =>{
        const response= await deleteProduct(_id);
        if(response.status === 200){
            handleGetProducts();
        }
    }
    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
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
                                <td>
                                    <Link  className="btn btn-warning" to={`/products/edit/${product._id}`}>
                                        edit
                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => ondelete(product._id as number)}>
                                        delete
                                    </button>
                                    
                                    </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>

        </div>
    )
}

export default ProductsList
