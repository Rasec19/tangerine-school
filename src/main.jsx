import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import TangerineApp from './TangerineApp.jsx'
import './index.css'
import '../font/font-neuwelt.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TangerineApp />
    </BrowserRouter>
  </React.StrictMode>,
)
