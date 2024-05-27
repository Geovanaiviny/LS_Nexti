import React from "react";
//import HomeB from '../assets/img/homeb.png.jpg'
import Bannerh from '../assets/img/bannerh.png.png'
//import Header from "./header";

import Hestante from '../assets/img/hestante.jpg'
import Boxpublique from "./boxpublique";

export default function Body(){
    return(
    <>
        {/* Banner no início da Home */}
        <div className="flex justify-center mt-4 //p-64">
            <figure className="flex justify-center">
                <img className="w-[1200px]    //w-[90%] //h-[20%]" src={Bannerh} alt="" />
            </figure>
        </div>

        

        <div className="flex justify-center //justify-around space-x-[18rem] mt-10 ">
            {/* Imagem para autores publicarem */}
            <div>
                <Boxpublique />
            </div>
            {/* Imagem para ir a Estante */}
            <div className="flex">
                <figure className="">
                    <img className="w-[28rem] h-[25rem] rounded-md shadow-[0px_1px_4px_1px_rgba(0,0,0,0.3)] shadow-[#8d8d8d]" src={Hestante} alt="" />
                </figure>
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