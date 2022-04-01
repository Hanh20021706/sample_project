import React from 'react'
import ProductForm from './Products/ProductForm'

const Dashboard = () => {
    return (
        <div className="">

            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Dashboard <span className="badge badge-success">6</span></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms" />Forms</a>
                                    <div id="submenu-4" className="collapse submenu" style={{}}>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/form-elements.html">Form Elements</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table" />Tables</a>
                                    <div id="submenu-5" className="collapse submenu" style={{}}>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/general-table.html">General Tables</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/data-tables.html">Data Tables</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="dashboard-wrapper">
                <div className="dashboard-ecommerce">
                    <div className="container-fluid dashboard-content ">
                        {/* ============================================================== */}
                        {/* pageheader  */}
                        {/* ============================================================== */}
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title">E-commerce Dashboard Template </h2>
                                    <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">E-Commerce Dashboard Template</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* end pageheader  */}
                        {/* ============================================================== */}
                        <div className="ecommerce-widget">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Total Revenue</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">$12099</h1>
                                            </div>
                                            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                                <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                                            </div>
                                        </div>
                                        <div id="sparkline-revenue" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Affiliate Revenue</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">$12099</h1>
                                            </div>
                                            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                                <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                                            </div>
                                        </div>
                                        <div id="sparkline-revenue2" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Refunds</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">0.00</h1>
                                            </div>
                                            <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
                                                <span>N/A</span>
                                            </div>
                                        </div>
                                        <div id="sparkline-revenue3" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Avg. Revenue Per User</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">$28000</h1>
                                            </div>
                                            <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                                                <span>-2.00%</span>
                                            </div>
                                        </div>
                                        <div id="sparkline-revenue4" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* ============================================================== */}
                                {/* ============================================================== */}
                                {/* recent orders  */}
                                {/* ============================================================== */}
                                <div className="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <h5 className="card-header">Recent Orders</h5>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className="bg-light">
                                                        <tr className="border-0">
                                                            <th className="border-0">#</th>
                                                            <th className="border-0">Image</th>
                                                            <th className="border-0">Product Name</th>
                                                            <th className="border-0">Product Id</th>
                                                            <th className="border-0">Quantity</th>
                                                            <th className="border-0">Price</th>
                                                            <th className="border-0">Order Time</th>
                                                            <th className="border-0">Customer</th>
                                                            <th className="border-0">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <div className="m-r-10"><img src="assets/images/product-pic.jpg" alt="user" className="rounded" width={45} /></div>
                                                            </td>
                                                            <td>Product #1 </td>
                                                            <td>id000001 </td>
                                                            <td>20</td>
                                                            <td>$80.00</td>
                                                            <td>27-08-2018 01:22:12</td>
                                                            <td>Patricia J. King </td>
                                                            <td><span className="badge-dot badge-brand mr-1" />InTransit </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <div className="m-r-10"><img src="assets/images/product-pic-2.jpg" alt="user" className="rounded" width={45} /></div>
                                                            </td>
                                                            <td>Product #2 </td>
                                                            <td>id000002 </td>
                                                            <td>12</td>
                                                            <td>$180.00</td>
                                                            <td>25-08-2018 21:12:56</td>
                                                            <td>Rachel J. Wicker </td>
                                                            <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <div className="m-r-10"><img src="assets/images/product-pic-3.jpg" alt="user" className="rounded" width={45} /></div>
                                                            </td>
                                                            <td>Product #3 </td>
                                                            <td>id000003 </td>
                                                            <td>23</td>
                                                            <td>$820.00</td>
                                                            <td>24-08-2018 14:12:77</td>
                                                            <td>Michael K. Ledford </td>
                                                            <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <div className="m-r-10"><img src="assets/images/product-pic-4.jpg" alt="user" className="rounded" width={45} /></div>
                                                            </td>
                                                            <td>Product #4 </td>
                                                            <td>id000004 </td>
                                                            <td>34</td>
                                                            <td>$340.00</td>
                                                            <td>23-08-2018 09:12:35</td>
                                                            <td>Michael K. Ledford </td>
                                                            <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={9}><a href="#" className="btn btn-outline-light float-right">View Details</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <h5 className="card-header">Customer Acquisition</h5>
                                        <div className="card-body">
                                            <div className="ct-chart ct-golden-section" style={{ height: 354 }} />
                                            <div className="text-center">
                                                <span className="legend-item mr-2">
                                                    <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                                    <span className="legend-text">Returning</span>
                                                </span>
                                                <span className="legend-item mr-2">
                                                    <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                                    <span className="legend-text">First Time</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductForm/>

        </div>



    )
}

export default Dashboard
