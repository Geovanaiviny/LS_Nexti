import React from "react";
import Button from '@mui/material/Button';
import Cedito from '../../assets/img/cedito.jpg'

export default function Ceditorial (){
    return (
        <>
        <div className="flex //bg-black justify-center //items-center //max-w-7xl">
            <div className="flex justify-center bg-transparent border-4 border-y-[#3F3F3F] w-[1200px] max-w-7xl h-[480px] max-h-screen">
                <div className="flex ">
                    <h1 className=" text-4xl font-robotoserif font-semibold text-[#434343]">
                        <span>Conheça nosso corpo editorial</span>
                    </h1>

                    <p>
                        <span>Conheça a equipe por trás das palavras! Nosso corpo editorial é a engrenagem que impulsiona a qualidade e a precisão em cada texto.</span>
                    </p>
                </div>
                
                <Button variant="samais">Saiba mais</Button>

                <div className="flex justify-end">
                    <figure className="flex">
                        <img className=" w-44 max-w-2xl h-64 max-h-96" src={Cedito} />
                    </figure>
                </div>
            </div>
        </div>


        </>
    );
}