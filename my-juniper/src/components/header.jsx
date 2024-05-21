import React from 'react'
import Logo from "../assets/img/logoh.png"

import Buscar from '../assets/img_icon/buscar.png'
import User from '../assets/img_icon/user.png'


function Header() {
    
    return(
        <>

        {/* Header home principal */}
        <header
            class="bg-[#F4F2EF] h-32 w-[100%] flex items-center  //justify-between  ">

            {/* Logo do header home principal */}
            <figure name="logoh" class="flex items-center">
                <img class="h-[113px]" src={Logo }/>
            </figure>
            
            {/* Div do select, input e login */}
            <div name="area" class="flex justify-center  items-center space-x-16">

               

                {/* <style>
                    select {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        background-image: url(/plsn/iconimg/setahe.png);
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-size: 26px;
                        padding-left: 20px;}
                </style> */}
                
                <form action method="get">
                    <select class="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[280px] px-4 h-11 text-[#757575] custom-select">
                        <option class="text-gray-300" selected="selh_p">Áreas de busca</option>
                        <option value="selh_1">Enfermagem</option>
                        <option value="selh_2">Arquitetura</option>
                        <option value="selh_3">Sistemas</option>
                    </select>
                </form>
                
                {/* Div específica do input pesquisar e button */}
                <div name="pesquisah" class="flex space-x-4 items-center">
                    <input type="text" class="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md w-[280px] px-4 h-11 text-[#757575]" placeholder="Pesquisar.."/>
                    <button class="bg-[#E68C3A] w-[74px] h-[41px] rounded-md" type="pheader">
                        <figure> <img class="h-[22px] px-[24px]" src={Buscar }/></figure>
                    </button>
                </div>
                
                {/* ícone de login */}
                <a
                    class="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md h-[44px] w-[180px]  flex justify-center items-center space-x-4 "
                    href>
                    <span class="text-[#535353] font-medium">Área de
                        Login</span>

                   <figure> <img class="h-[38px]" src={User}/>
                    </figure> 
                </a>
            </div>

        </header>
        </>

    )
}

export default Header