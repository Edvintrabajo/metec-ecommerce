import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from './context/Context';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <ContextProvider>
            <App />
        </ContextProvider>
    </ThemeProvider>
)
