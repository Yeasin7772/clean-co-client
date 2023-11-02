import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Routes from './routes/Routes.jsx';
import AuthProviders from './provider/AuthProviders';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Routes} />
    </AuthProviders>
    <Toaster/>
  </React.StrictMode>,
)
