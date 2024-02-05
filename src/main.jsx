import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Components/Organims/Login.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Login/>,
  index: true,
  },
  {
    path: `/chat`,
    element: <App/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router = { router } />
  </>,
)
