import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layout/MainLayOut';
import Home from '../Page/Home/Home';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default Routers;