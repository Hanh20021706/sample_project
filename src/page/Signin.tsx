import React from 'react'

const Signin = () => {
    return (
        <div>
            <section className="probootstrap-section" style={{ marginTop: '100px' }}>
                <div className="container"  >

                    <div className="col-md-8" style={{marginLeft: '200px'}}>
                        <form className="probootstrap-form mb60">

                            <div className=" col-md-12">

                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" id="email" name="email" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="fname">password</label>
                                    <input type="password" className="form-control" id="fname" name="fname" />
                                </div>
                                <div className="form-group">
                                    <button type="button" style={{backgroundColor: '#000033',borderRadius:'2px' , color: '#fff', border:'none' , padding: '5px 15px'}}>Đăng Nhập</button>
                                    <a href="" style={{ color: '#0000FF', float: 'right', font: '12px', marginTop: '5px', marginRight: '10px' }}>
                                        Đăng Ký
                                    </a>



                                </div>
                            </div>






                        </form>
                    </div>


                </div >
            </section >


        </div >
    )
}

export default Signin
