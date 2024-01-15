import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layout/MainLayOut';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>
    }
])
export default Routers;