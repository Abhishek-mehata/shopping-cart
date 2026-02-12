import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { ProductsProvider } from './context/ProductContext'

import routes from './router/routes'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProductsProvider>
      <RouterProvider router={routes} />
    </ProductsProvider>
  </StrictMode>,
)
