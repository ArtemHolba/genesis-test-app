import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const rootComponent = document.getElementById('app')
const root = createRoot(rootComponent as Element)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
