import React from "react";
import Imacorpo from "../assets/img/imacorpoedi.png";
import Linecorpo from "../assets/img_icon/linecorpoedi.png";

export default function Coreditorial (){
    return(
        <>

<div style={{ position: 'relative', textAlign: 'center' }}>
                    <h1 className="text-6xl font-robotoserif font-semibold text-[#434343]" 
                        style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -10%)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                        Nossas avaliações
                    </h1>
                </div>

                <div>
                <figure className="mb-[100px]">
                        <img className="w-[80px] h-[4px]" src={Linecorpo} alt="Line" />
                </figure>

                </div>

                <div className=" mt-[100px] h-10 w-56">
                    <h1 className=" ml-44 mt-40 w-[400px] h-14 text-5xl font-robotoserif font-semibold text-[#213E60]">
                        Corpo Editorial
                    </h1>

                </div>
            <div className="mt-32 mb-24 flex h-60 w-[50px] items-center">

                <div className=" flex justify-center items-end relative h-[580px] w-[40px]">
                    <figure>
                        <img className="h-full" src={Imacorpo} alt="Editorial Image" />
                    </figure>
                </div>
  

                <div className="flex justify-start ml-[180px] w-[150px] h-[350px]">

                    <div className="flex justify-start items-center bg-transparent shadow-[0_8px_40px_-15px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#b2b2b2] w-[800px] h-[250px] max-h-screen">
                        <div className="flex flex-col w-[760px] gap-10 justify-center items-start p-10 rounded-md">


                            <p className=" text-[20px] w-[510px] font-medium font-worksans text-[#535353]">
                            Fabricio Carneiro - Coordenador de ADS e SI na UNIFAP 
                            <br />
                            Centro Universitário Paraíso
                            <br /> 
                            <br />
                            Samyra Lustoza - Professora de Enfermagem 
                            Centro Universitário Paraíso 
 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
