import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import { SWRConfig } from 'swr'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ }}>
     <Layout>  
      <RouterProvider router={router} />
     </Layout>
    </SWRConfig>
  </React.StrictMode>
)
