import './init.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/router';
import './index.css';
import '@fontsource/noto-sans';
import '@fontsource/lobster';
import '@fontsource-variable/lora';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
