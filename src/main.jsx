import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BirdsProvider from './context/BirdsContext.jsx'
import { BrowserRouter } from "react-router-dom"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BirdsProvider>
    <App />
    </BirdsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
