import React from "react";
import Hpublin from '../assets/img/hpublin.jpg'

export default function Boxpublique(){
    return(
        <>
            
            <div className="flex">
                <figure className="">
                    <img className="w-[28rem] h-[25rem] rounded-md shadow-[0px_1px_4px_1px_rgba(0,0,0,0.3)] shadow-[#8d8d8d]" src={Hpublin} alt="" />
                </figure>
                <div>
                    <h2 className="font-robotoserif text-4xl font-semibold text-[#FFFFFF] ">
                        <span>Publique seu artigo</span>
                    </h2>
                </div>
            </div>

        </>
    )
}