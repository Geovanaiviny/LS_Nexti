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
import Estante from './pages/Estante.jsx';
import CatLivr1 from './components/cataloliv/CatLivr1.jsx';
import CatLivr2 from './components/cataloliv/CatLivr2.jsx';
import PopUpBaixar from './components/cataloliv/PopUpBaixar.jsx'; 
import PopUpCompra from './components/cataloliv/PopUpCompra.jsx';
import ChamaAbert from './pages/ChamAbert.jsx'

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
      {
        path: 'estante',
        element: <Estante/>,
      },
      {
        path: 'livro1',
        element: <CatLivr1/>,
      },
      {
        path: 'livro2',
        element: <CatLivr2/>
      },
      {
        path:'popupbaixar',
        element: <PopUpBaixar/>,
      },
      {
        path:'popupcompra',
        element: <PopUpCompra/>
      },
      {
        path:'chamaabert',
        element: <ChamaAbert/>
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
