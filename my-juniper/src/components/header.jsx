// import React from 'react';
// import Logo from "../assets/img/logoh.png"
// import Buscar from '../assets/img_icon/buscar.png'
// import User from '../assets/img_icon/user.png'
// // import Select from '../components_options/Select'
// import StyledMenu from './Select';
// import Nav from './nav';




// function Header() {
    
//     return (
//         <>

//         {/* Header home principal */}
//         <header className="bg-[#F4F2EF] h-32 w-full flex items-center justify-center //justify-evenly //justify-around //space-x-20">

//             {/* Logo do header home principal */}
//             <figure name="logoh" className="flex items-center">
//                 <img className="h-32" src={Logo }/>
//             </figure>
            
                
                    
//             {/* Div do select, input e login */}
//             <div name="area" className="flex //justify-center //justify-between items-center //w-full  space-x-10">
//             <div className="flex">
//                 {/* <BasicMenu /> */}
//                 <StyledMenu />

//                 </div>
//                 {/* Div específica do input pesquisar e button */}
//                 <div name="pesquisah" className="flex space-x-2 items-center">
//                     <input type="text" className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[260px] px-4 h-11 text-[#757575] hover:border-[#E68C3A] focus:border-[#E68C3A] focus:outline-none font-worksans" placeholder="Pesquisar.."/>

//                     <button className="bg-[#E68C3A] w-[74px] h-10 rounded-md" type="pheader">
//                         <figure> <img className="h-[20px] px-[24px]" src={Buscar }/></figure>
//                     </button>
//                 </div>
                
//                 {/* ícone de login */}
//                 <div className="flex //space-x-4">
//                     <a className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md h-11 w-[180px]  flex justify-center items-center space-x-4 "
//                         href>
//                             <span className="text-[#808080] font-worksans font-medium">Área de Login</span>
//                         <figure> <img className="h-[38px]" src={User}/> </figure> 
//                     </a>
//                 </div>
//             </div>


//         </header>
//         <div>
//             <Nav />
//         </div>
//         </>

//     );
// }

// export default Header

import React from 'react';
import Logo from "../assets/img/logoh.png";
import Buscar from '../assets/img_icon/buscar.png';
import User from '../assets/img_icon/user.png';
import StyledMenu from './Select';
import Nav from './nav';

function Header() {
  return (
    <>
      <header className="bg-[#F4F2EF] h-32 w-full flex items-center justify-between px-4 md:px-16">
        <figure name="logoh" className="flex items-center">
          <img className="h-24 md:h-32" src={Logo} alt="Logo"/>
        </figure>

        <div name="area" className="flex items-center space-x-4 md:space-x-10">
          <StyledMenu />

          <div name="pesquisah" className="flex space-x-2 items-center">
            <input 
              type="text" 
              className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[160px] md:w-[260px] px-4 h-11 text-[#757575] hover:border-[#E68C3A] focus:border-[#E68C3A] focus:outline-none font-worksans" 
              placeholder="Pesquisar.." 
            />
            <button className="bg-[#E68C3A] w-[50px] h-10 md:w-[74px] rounded-md" type="pheader">
              <img className="h-[20px] px-[12px] md:px-[24px]" src={Buscar} alt="Buscar"/>
            </button>
          </div>

          <a className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md h-11 w-[120px] md:w-[180px] flex justify-center items-center space-x-2 md:space-x-4"
            href="#">
            <span className="text-[#808080] font-worksans font-medium">Área de Login</span>
            <img className="h-[24px] md:h-[38px]" src={User} alt="User"/>
          </a>
        </div>
      </header>
      
      <Nav />
    </>
  );
}

export default Header;
