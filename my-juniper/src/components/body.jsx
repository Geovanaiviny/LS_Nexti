import React from "react";
//import HomeB from '../assets/img/homeb.png.jpg'
import Bannerh from '../assets/img/bannerh.png.png'
//import Header from "./header";

import Boxpublique from "./boxpublique";
import Boxestante from "./boxestante";
import Boxavaliacao from "./boxavaliacao";

export default function Body(){
    return(
    <>
        {/* Banner no início da Home */}
        <div className="flex justify-center mt-4 //p-64">
            <figure className="flex justify-center">
                <img className="w-[1200px]    //w-[90%] //h-[20%]" src={Bannerh} alt="" />
            </figure>
        </div>

        {/* Imagem para autores publicarem */}
        {/* Imagem para ir a Estante */}

        <div className="flex justify-center //justify-around space-x-[3.2rem] mt-10 ">
            <div>
                <Boxpublique />
            </div>

            <div>
                <Boxavaliacao />
            </div>

            <div className="flex">
                <Boxestante />
            </div>
            

        </div>
            

        <div>
            <h1>
                TESTANDO
            </h1>
        </div>

    </>

    )
}