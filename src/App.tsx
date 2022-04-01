import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/admin/Dashboard';
import ProductForm from './page/admin/Products/ProductForm';
import ProductsList from './page/admin/Products/ProductsList';
import HomePage from './page/HomePage';
import AdminLayout from './page/layout/AdminLayout';
import WebsiteLayout from './page/layout/WebsiteLayout';
import ProductDetail from './page/ProductDetail';
import ProductPage from './page/ProductPage';
import Signin from './page/Signin';
import Signup from './page/Signup';

function App() {
  
    return (
        <div className="">
            <Routes>
                {/* route layout  */}
                <Route path="/" element={<WebsiteLayout/>}>
                    <Route index element={<HomePage/>} />
                    {/* products */}
                    <Route path="products">
                        <Route index element={<ProductPage />} />
                        <Route path=":id" element={<ProductDetail/>}/>
                    </Route>

                    <Route path="signin" element={<Signin/>}/>
                    <Route path="signup" element={<Signup/>}/>

                </Route>


                {/* route admin */}
                <Route path="admins" element={<AdminLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    {/* product admin  */}
                    <Route path="products" >
                        <Route index element={<ProductsList/>} />
                        <Route path="add" element={<ProductForm/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
