import React from 'react';
import Logo from "../assets/img/logoh.png"
import Buscar from '../assets/img_icon/buscar.png'
import User from '../assets/img_icon/user.png'
// import Select from '../components_options/Select'
import StyledMenu from './Select';


function Header() {
    
    return (
        <>

        {/* Header home principal */}
        <header className="bg-[#F4F2EF] h-32 w-[100%] flex items-center //justify-center space-x-10">

            {/* Logo do header home principal */}
            <figure name="logoh" className="flex items-center">
                <img className="h-28" src={Logo }/>
            </figure>
            
                <div className="flex">
                {/* <BasicMenu /> */}
                <StyledMenu />
                </div>
                    
            {/* Div do select, input e login */}
            <div name="area" className="flex //justify-center justify-between items-center  //space-x-16">
                
                {/* Div específica do input pesquisar e button */}
                <div name="pesquisah" className="flex space-x-2 items-center">
                    <input type="text" className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[260px] px-4 h-10 text-[#757575] hover:bg-sky-700" placeholder="Pesquisar.."/>
                    <button className="bg-[#E68C3A] w-[74px] h-[38px] rounded-md" type="pheader">
                        <figure> <img className="h-[20px] px-[24px]" src={Buscar }/></figure>
                    </button>
                </div>
                
                {/* ícone de login */}
                <a className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md h-[44px] w-[180px]  flex justify-center items-center space-x-4 "
                    href>
                    <span className="text-[#535353] font-medium">Área de Login</span>
                   <figure> <img className="h-[38px]" src={User}/> </figure> 
                </a>
            </div>

        </header>
        </>

    );
}

export default Header