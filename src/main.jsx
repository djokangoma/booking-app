import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/layout.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Contact from './pages/contact.jsx'
import Section from './components/section.jsx'
import Login from './pages/login.jsx'
import Errorpage from './pages/errorpage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage/>,
    children: [
      {
        path:"/home",
        element:<Section/>
      },
      {
        
        path:"/contact",
        element:<Contact/>
      },
      {
        
        path:"/login",
        element:<Login/>
      },
      // {
      //   path:"/sign in",
      //   element:<SignIn/>,
      //   children : [
      //     path: "/sign in/registrer",
      //     element: <Register/>,
      //   ]
      // },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
