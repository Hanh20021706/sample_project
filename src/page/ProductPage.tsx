import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getProducts } from '../api/product';
import BannerClient from '../components/BannerClient'
import { PRODUCT_TYPE } from '../types/product'

const ProductPage = () => {
    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);
    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);

    }

    useEffect(() => {
        handleGetProducts();
    }, [])

    return (
        <div>
            <BannerClient />
            <section className='probootstrap-section'>

                <div className="container">

                    <div className="box-filter-products">
                        <div className="filter-total ">
                            <i className="fa-solid fa-filter" style={{ marginRight: '5px' }} />
                            Bộ Lọc
                        </div>
                        <div className="filter-item">
                            <select aria-label="Default select example">
                                <option selected>Hãng</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>

                        </div>
                        <div className="filter-item">
                            <select aria-label="Default select example">
                                <option selected>Giá</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <select caria-label="Default select example">
                                <option selected>Loại Điện Thoại</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <select aria-label="Default select example">
                                <option selected>Màu</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                    </div>

                </div>
            </section>
            <section className="probootstrap-section">
                <div className="container">
                    <div className="row">
                        {
                            products.map((product, index) => (

                                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                                    <div className="probootstrap-card">
                                        <div className="probootstrap-card-media">
                                            <Link to={`${product._id}`}>
                                            <a href="single-page.html"><img src="https://cdn.tgdd.vn/Products/Images/42/274153/iphone-13-pro-max-xanh-la-thumb-600x600.jpg" className="img-responsive img-border" alt="Free HTML5 Template by uicookies.com" /></a>

                                            </Link>
                                        </div>
                                        <div className="probootstrap-card-text">
                                            <h2 className="probootstrap-card-heading mb0">{product.name}</h2>
                                            <p className="category">{product.desc}</p>
                                            <p className="price-item-section"> {product.price} vnd</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductPage
