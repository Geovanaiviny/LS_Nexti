import React from 'react'
import Logo from "../assets/img/logoh.png"

import Buscar from '../assets/img_icon/buscar.png'
import User from '../assets/img_icon/user.png'
// import Select from '../components_options/Select'
import Select from '../componentes_options/Select';



function Header() {
    
    return(
        <>

        {/* Header home principal */}
        <header
            className="bg-[#F4F2EF] h-32 w-[100%] flex items-center  //justify-between  ">

            {/* Logo do header home principal */}
            <figure name="logoh" className="flex items-center">
                <img className="h-28" src={Logo }/>
            </figure>
            
            {/* Div do select, input e login */}
            <div name="area" className="flex justify-center  items-center space-x-16">

                
                <form action method="get">
                    <Select />
                    {/* <select className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[280px] px-4 h-11 text-[#757575] custom-select">
                        <option className="text-gray-300" selected="selh_p">Áreas de busca</option>
                        <option value="selh_1">Enfermagem</option>
                        <option value="selh_2">Arquitetura</option>
                        <option value="selh_3">Sistemas</option>
                    </select> */}
                </form>
                
                {/* Div específica do input pesquisar e button */}
                <div name="pesquisah" className="flex space-x-2 items-center">
                    <input type="text" className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[280px] px-4 h-11 text-[#757575]" placeholder="Pesquisar.."/>
                    <button className="bg-[#E68C3A] w-[74px] h-[41px] rounded-md" type="pheader">
                        <figure> <img className="h-[22px] px-[24px]" src={Buscar }/></figure>
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

    )
}

export default Header