import { useState } from 'react'
import React from 'react'
// import User from '../src/assets/img_icon/user.png'
import Header from './components/header.jsx';
import Body from './pages/body.jsx';
import Quemsomos from './pages/quemsomos.jsx';
import Footer from './components/footer.jsx';
import Coreditorial from './pages/corpoedi.jsx';
import Codigodeetica from './pages/codigodeetica.jsx';
import Politicaeditorial from './pages/politicaeditorial.jsx';
import Politicaprivacidade from './pages/politicaprivada.jsx';
import Perguntasfrequentes from './pages/perguntasfrequentes.jsx';


// import Select from './componentes_options/Select.jsx';





function App() {
  return (
  <>
  <div className="bg-[#F4F2EF] min-h-screen">
    <Header />
    <Perguntasfrequentes/>
    {/* <Codigodeetica/> */}
    {/* <Body /> */}
    {/* <Coreditorial/> */}
    {/* <Quemsomos/> */}
    {/* <Coreditorial /> */}
    {/* <Codigoetic/> */}
    <Footer />
  </div>
  </>
    
  )
}

export default App
