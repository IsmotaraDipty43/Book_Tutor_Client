import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
           <ThemeProvider> 
            
            
            
            
           <AuthProvider><RouterProvider router={router} /></AuthProvider>
            
            
            
             </ThemeProvider>
    

  </StrictMode>,
)
