import React from "react";
import Logoprincipal from '../../assets/img/logo_se.png';


export default function PopUpBaixar(){
    return(
        <>
            <div className="w-full">
                <div className="w-[80%] bg-white ">
                    <img src={Logoprincipal} alt="" />

                    <H1>
                    Escolha um abaixo para acessar o e-book
                    </H1>
                </div>
            </div>
        
        </>



    );
}