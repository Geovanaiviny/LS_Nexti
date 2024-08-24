import React from "react";
import Filtro from './filtro.jsx';
import Hlivros from '../../assets/img/hlivros.svg';
import Roboestan from '../../assets/img/roboestante.jpg';
import Programaestan from '../../assets/img/prograestante.jpg';
import Mediestan from '../../assets/img/mediestante.jpg';
import Biomestante from '../../assets/img/biomestante.jpg';



export default function Estante (){
    return(
        <>

            {/* imagem header */}
            <div className="relative text-center">
                <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                        style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                        Estante
                    </h1>
            </div>  

            <div className="mt-32">
                <Filtro/>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center mb-12">
                <div className="flex flex-col lg:flex-row justify-center items-center bg-[#ffff] shadow-[0_8px_16px_-7px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#b2b2b2] w-[90%]  h-[1200px] max-h-screen">

                    <div className=" bg-[#F4F2EF] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_16px_-7px_rgba(94,94, 4,0.87)] border-[0.1px] rounded-md border-[#b2b2b2] w-[18%]  h-[380px] max-h-screen //gap-6">
                        <div className=" flex flex-col justify-center items-center w-[80%] h-[200px] gap-6">
                            <img className=" mb-2 w-[260px] h-[260px]" src={Roboestan} alt="" />
                            <h2>
                            Identificando os tipos de ossos presen...
                            </h2> 
                        </div>
                        
                    </div>

                </div>
            </div>


        
        </>

    );
} 
