import React from 'react'
import Dashboard from '../Dashboard'

const ProductForm = () => {
    return (
        <div className="">
 <Dashboard/>
        <div className="dashboard-wrapper">
            <div className="container-fluid dashboard-content">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Basic Form</h5>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="inputText3" className="col-form-label">Input Text</label>
                                                <input id="inputText3" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputEmail">Email address</label>
                                                <input id="inputEmail" type="email" placeholder="name@example.com" className="form-control" />
                                                <p>We'll never share your email with anyone else.</p>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputText4" className="col-form-label">Number Input</label>
                                                <input id="inputText4" type="number" className="form-control" placeholder="Numbers" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword">Password</label>
                                                <input id="inputPassword" type="password" placeholder="Password" className="form-control" />
                                            </div>
                                            <div className="custom-file mb-3">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">File Input</label>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                            </div>
                                            <h5>Inline Radio</h5>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" defaultChecked className="custom-control-input" /><span className="custom-control-label">Option 1</span>
                                            </label>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" className="custom-control-input" /><span className="custom-control-label">Option 2</span>
                                            </label>
                                            <label className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" name="radio-inline" className="custom-control-input" /><span className="custom-control-label">Option 3</span>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       

    )
}

export default ProductForm
