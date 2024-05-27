import React from "react";

export default function Nav(){
    return(

<nav className="bg-[#213E60] flex justify-center items-center h-16">
        <div className="flex font-worksans text-[1.2rem] font-medium items-center space-x-[12rem]">
            <a href="" className="text-white">Home</a>
            <div className="text-white">Institucional</div>
            <div className="text-white">Estante</div>
            <div className="text-white">Serviços</div>
            <div className="text-white">Chamadas abertas</div>
        </div>
    </nav>

    )
}