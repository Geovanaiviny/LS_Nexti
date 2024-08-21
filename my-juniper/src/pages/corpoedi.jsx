import React from "react";
import Linecorpo from "../assets/img_icon/linecorpoedi.png";
import Hcomum from "../assets/img/hcomum.png"
import Imagcorpo from "../assets/img/copedit.svg.png" 

export default function Coreditorial (){
    return(
        <>


            <div className="bg-[#F4F2EF] w-[100%]">

                    {/* imagem header */}
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
                    <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                        style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                        Corpo Editorial
                    </h1>
                </div>

                


                        {/* line azul */}
                    <div className=" flex justify-center w-[100%] bg-[#bg-[#F4F2EF]">
                        <figure className=" mt-24 //border-t-[200px]">
                                <img className="w-[390px] h-[4px]" src={Linecorpo} alt="Line" />
                        </figure>
                    </div>

                            {/* título */}
                    <div className=" mt-[100px] h-10 w-56">
                        <h1 className=" ml-44 mt-40 w-[400px] h-14 text-5xl font-robotoserif font-semibold text-[#213E60]">
                            Corpo Editorial
                        </h1>

                    </div>
                    
                    <div className=" flex justify-center bg-yellow-400 w-[30%] ml-[850px] mg">
                        <figure className="">
                            <img src={Imagcorpo} alt="" />
                        </figure>
                    </div>

                    <div className=" flex-col justify-center">
                            {/* quadrado */}
                        <div className=" bg-black flex mb-12 justify-start w-[620px]">

                            <div className="flex justify-start items-center bg-transparent shadow-[0_8px_40px_-15px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#b2b2b2] w-[600px] h-[250px] max-h-screen">
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
            </div>
        </>
    );
}
