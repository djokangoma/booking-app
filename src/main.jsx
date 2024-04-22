import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/layout.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Contact from './pages/contact.jsx'
import Section from './components/section.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path:"/",
        element:<Section/>
      },
      {
        
        path:"/contact",
        element:<Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
