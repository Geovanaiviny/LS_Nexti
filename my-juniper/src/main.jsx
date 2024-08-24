import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';

import Root from './components/root.jsx'
import Home from './pages/home.jsx';
import Corpoedito from './pages/corpoedi.jsx';
import Quemsomos from './pages/quemsomos.jsx';
import ErrorPage from './components/ErrorPage.jsx';  

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/', 
        element: <Home/>,
        index: true,
      },
      {
        path: 'corpoedito',
        element: <Corpoedito/>,
      },
      {
        path: 'quemsomos',
        element:<Quemsomos/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
