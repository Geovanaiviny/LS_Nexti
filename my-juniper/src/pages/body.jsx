import React from "react";
//import HomeB from '../assets/img/homeb.png.jpg'
import Bannerh from '../assets/img/bannerh.png.png'
//import Header from "./header";
import CarouselWithContent from '../components/home/carrestante'

import Boxpublique from "../components/home/boxpublique";
import Boxestante from "../components/home/boxestante";
import Boxavaliacao from "../components/home/boxavaliacao";

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
            

        <div className="mt-20">
            <CarouselWithContent />
            
        </div>

        <div>
            <p>
                <span>
                    bkdfmbzkdm
                </span>
            </p>
        </div>

        <div>
            <p>
                <span>
                    bkdfmbzkdm
                </span>
            </p>
        </div>

        <div>
            <p>
                <span>
                    bkdfmbzkdm
                </span>
            </p>
        </div>

        <div>
            <p>
                <span>
                    bkdfmbzkdm
                </span>
            </p>
        </div>

    </>

    )
}