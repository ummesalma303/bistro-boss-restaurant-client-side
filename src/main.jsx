import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import React from 'react';
// import ReactDOM from 'react-dom';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
     <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
     </QueryClientProvider>
  </StrictMode>,
)
