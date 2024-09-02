import React from "react";
import Linecorpo from "../assets/img_icon/linecorpoedi.png";
import Hcomum from "../assets/img/hcomum.png";
import Imagcorpo from "../assets/img/copedit.svg.png";

export default function Coreditorial() {
    return (
        <>
           <div className="bg-[#F4F2EF]">

                {/* imagem header */}
                <div className="relative text-center">
                    <img className="w-full h-auto" src={Hcomum} alt="Imagem Comum" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                            style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                            Corpo Editorial
                        </h1>
                </div>  



                {/* <div style={{ position: 'relative', textAlign: 'center' }}>
                    <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
                        <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                            style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                            Quem somos nós
                        </h1>
                </div> */}



                {/* linha azul */}
                <div className="flex justify-center w-full bg-[#F4F2EF]">
                    <figure className="mt-6 sm:mt-12 md:mt-24">
                        <img className="w-[200px] sm:w-[300px] md:w-[390px] h-[2px] sm:h-[3px] md:h-[4px]" src={Linecorpo} alt="Line" />
                    </figure>
                </div>

                {/* Seção lado a lado */}
                <div className="flex flex-col items-start justify-center gap-4 px-4">

                    {/* título */}
                    <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-20 ml-40">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-robotoserif font-semibold text-[#213E60]">
                            Corpo Editorial
                        </h1>
                    </div>

                    {/* Seção contendo o quadrado branco e a imagem */}
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-20 //px-4">

                        {/* quadrado branco */}
                        <div className="bg-white flex items-center shadow-lg rounded-md border border-[#b2b2b2] w-full sm:w-[500px] md:w-[650px] p-4 sm:p-8 md:p-14">
                            <div className="flex flex-col gap-4">
                                <p className="text-sm sm:text-base md:text-lg font-medium font-worksans text-[#535353]">
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

                        {/* imagem lateral */}
                        <div className="flex items-center justify-center w-full sm:w-[450px] md:w-[570px] h-auto mb-20">
                            <img src={Imagcorpo} alt="Imagem Corpo Editorial" className="w-full md:w-[500px] rounded-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
