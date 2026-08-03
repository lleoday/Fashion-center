import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { FashionProvider } from './FashionContext' // <-- Import Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FashionProvider> {/* <-- Bungkus App di sini */}
      <App />
    </FashionProvider>
  </React.StrictMode>,
)