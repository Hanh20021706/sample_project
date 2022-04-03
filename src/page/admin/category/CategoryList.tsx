import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteCategory, getCategories } from '../../../api/category';
import { CATEGORY_TYPE } from '../../../types/category'

const CategoryList = () => {
    const [categories, setcategories] = useState<CATEGORY_TYPE[]>([]);

    const handleGetCategory =  async () => {
        const response = await getCategories();
        setcategories(response.data);

    }

    
    const ondelete = async (_id : number) => {
        const response = await deleteCategory(_id);
        if(response.status === 200){
            handleGetCategory();
        }
    }

    useEffect(() => {
        handleGetCategory();
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EDIT</th>
                        <th scope="col">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category => (
                            <tr key={category._id}>
                               
                                <td>{category._id}</td>
                                <td>{category.name}</td>
                                <td><Link to={`/categories/edit/${category._id}`}>
                                        edit
                                    </Link></td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => ondelete(category._id as number)}>
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

export default CategoryList
