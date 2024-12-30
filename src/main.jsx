import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import React from 'react';
// import ReactDOM from 'react-dom';
import {  HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider>
     <RouterProvider router={router} />
      </HelmetProvider>
  </StrictMode>,
)
