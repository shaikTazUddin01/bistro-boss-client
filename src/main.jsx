import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routers/Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='max-w-screen-2xl mx-auto'>
<RouterProvider router={Routers}></RouterProvider>

</div>
  </React.StrictMode>,
)
