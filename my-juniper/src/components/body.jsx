import React from "react";
//import HomeB from '../assets/img/homeb.png.jpg'
import Bannerh from '../assets/img/bannerh.png.png'
//import Header from "./header";
import Hpublin from '../assets/img/hpublin.jpg'
import Hestante from '../assets/img/hestante.jpg'

export default function Body(){
    return(
    <>
        <div className="flex justify-center mt-4 //p-64">
            <figure className="flex justify-center">
                <img className="w-[1200px]    //w-[90%] //h-[20%]" src={Bannerh} alt="" />
            </figure>
        </div>

        <div className="flex justify-center //justify-around space-x-[14.8rem] mt-10">
            <div className="flex">
                <figure className="">
                    <img className="w-[30.2rem] h-[25rem] rounded-md" src={Hpublin} alt="" />
                </figure>
            </div>

            <div className="flex">
                <figure className="">
                    <img className="w-[30.2rem] h-[25rem] rounded-md" src={Hestante} alt="" />
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