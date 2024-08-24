import React from "react";
//import HomeB from '../assets/img/homeb.png.jpg'
import Bannerh from '../assets/img/bannerh.png.png'
//import Header from "./header";
import CarouselWithContent from '../components/home/carrestante'
import Ceditorial from '../components/home/ceditorial';

import Boxpublique from "../components/home/boxpublique";
import Boxestante from "../components/home/boxestante";
import Boxavaliacao from "../components/home/boxavaliacao";
import Carraval from "../components/home/carravaliacao";
import Carrpubli from "../components/home/carrpublique";

export default function Home(){
    return(
    <>
        <div className=" bg-[#F4F2EF] ">

            {/* Banner no início da Home */}
            <div className="flex justify-center mt-4 //p-64">
                <figure className="flex justify-center">
                    <img className="w-[1200px]    //w-[90%] //h-[20%]" src={Bannerh} alt="" />
                </figure>
            </div>

            {/* Imagem para autores publicarem */}
            {/* Imagem para ir a Estante */}
            {/* {lalal} */}

            <div className="flex justify-center //justify-around space-x-[3.6rem] mt-10 ">
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
                

            <div className=" mt-32">
                <CarouselWithContent />
                
            </div>
            
            <div className="mt-32">
                <Ceditorial/>
            </div>

            <div className=" mt-40">
                <Carraval/>
            </div>

            <div className="mt-32 mb-32">
                <Carrpubli/>
            </div>
        </div>



    </>

    )
}