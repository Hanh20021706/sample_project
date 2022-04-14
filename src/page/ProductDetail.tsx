import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../api/product';
import { PRODUCT_TYPE } from '../types/product';

const ProductDetail = () => {
    const {_id } = useParams();

    const [product, setProduct] = useState<PRODUCT_TYPE>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(_id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    },[_id])

    return (
        <div style={{ marginTop: '100px' }}>
            <section className="probootstrap-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <p><img src={product?.img} className="img-responsive img-border" /></p>
                            <h2>Desc</h2>
                            <p>{product?.desc}</p>
                           
                        </div>
                        <div className="col-md-3">
                            <div className="panel-group probootstrap-panel" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            {product?.name}
                                        </h4>
                                    </div>

                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title" style={{color: 'red'}}>
                                            {product?.price} vnd
                                        </h4>
                                    </div>
                                  
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title" >
                                            {product?.status ? 'con hang' : 'het hang' } 
                                        </h4>
                                    </div>
                                  
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title">
                                       <button type="button" className="btn btn-success">ADD TO CARD</button>

                                        </h4>
                                    </div>

                                </div>
                            </div>
                            {/* END panel-group */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductDetail
