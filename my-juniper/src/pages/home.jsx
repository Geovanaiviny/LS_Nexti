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
            {/* <div className=" //bg-black flex justify-center w-full //mt-4 //p-64">
                <figure className="flex justify-center w-[90%]">
                    <img className="//w-[1200px] w-[90%] //h-[20%]" src={Bannerh} alt="" />
                </figure>
            </div> */}

                <div className="flex justify-center w-full">
                    <figure className="flex justify-center w-[90%]">
                        <img 
                            className="w-[100%] md:w-[90%] lg:w-[90%] h-auto" 
                            src={Bannerh} 
                            alt="" 
                        />
                    </figure>
                </div>


            {/* Imagem para autores publicarem */}
            {/* Imagem para ir a Estante */}
            {/* {lalal} */}

            <div className="flex justify-center //justify-around space-x-[4rem] mt-10 ">
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

            <div className="mt-32 //mb-32">
                <Carrpubli/>
            </div>
        </div>



    </>

    )
}