// import React from "react";
// import Filtro from './filtro.jsx';
// import Hlivros from '../../assets/img/hlivros.svg';
// import Roboestan from '../../assets/img/roboestante.jpg';
// import Programaestan from '../../assets/img/prograestante.jpg';
// import Mediestan from '../../assets/img/mediestante.jpg';
// import Biomestante from '../../assets/img/biomestante.jpg';

// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';

// const StyledButton = styled(Button)(({ theme }) => ({
//     height: '48px',
//     width: '180px',
//     color: '#FFFFFF',
//     fontFamily: 'Poppins',
//     fontWeight: '600',
//     fontSize: '20px',
//     borderRadius: '7px',
//     textTransform: 'none',
//     backgroundColor: '#213E60',
//     '&:hover': {
//       backgroundColor: '#104E96',
//     },
//   }));
  



// export default function Estante (){
//     return(
//         <>

//             {/* imagem header */}
//             <div className="relative text-center">
//                 <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
//                         style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
//                         Estante
//                     </h1>
//             </div>  

//             <div className="mt-32">
//                 <Filtro/>
//             </div>

//             <div className="flex flex-col lg:flex-row items-center justify-center mb-12">
//                 <div className="flex flex-col lg:flex-row justify-center items-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%]  h-[1200px] max-h-screen gap-14">

//                         {/* PRIMEIRA FILEIRA */}

//                         {/* Livro 1 - Roboestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Aspectos da engenharia robotica
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>

//                         {/* Livro 2 - Programaestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Linguagens de programação
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>

//                         {/* Livro 3 - Biomediestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Fundamentos da biomedicina
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>

//                         {/* Livro 4 -Mediciestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Identificando os tipos de ossos presentes
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>



//                     {/* SEGUNDA FILEIRA */}


//                         {/* Livro 1 - Roboestante */}
//                         <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Aspectos da engenharia robotica
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>

//                         {/* Livro 2 - Programaestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Linguagens de programação
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>

//                         {/* Livro 3 - Biomediestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Fundamentos da biomedicina
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>

//                         {/* Livro 4 -Mediciestante */}
//                     <div className=" bg-[#fafaf9] flex flex-col //lg:flex-row justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%]  h-[400px] max-h-screen gap-2">
//                         <div className=" flex flex-col justify-center items-center w-[90%] h-[80%] gap-4 ">
//                             <img className="  w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
//                             <h2 className="  w-full //ml-2 font-worksans text-[18px] font-medium text-[#828282] ">
//                             Identificando os tipos de ossos presentes
//                             </h2> 
//                         </div>
//                             {/* Button */}
//                         <div className="  w-[90%] h-[14%] flex justify-center items-start //gap-[400px] //mb-2 //mt-8">
//                             <div className="flex items-center min-h-1 //mt-6">
//                                 <StyledButton variant="samais">Ver sobre</StyledButton>
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>


        
//         </>

//     );
// } 



import React from "react";
import Filtro from './filtro.jsx';
import Hlivros from '../../assets/img/hlivros.svg';
import Roboestan from '../../assets/img/roboestante.jpg';
import Programaestan from '../../assets/img/prograestante.jpg';
import Mediestan from '../../assets/img/mediestante.jpg';
import Biomestante from '../../assets/img/biomestante.jpg';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
    height: '48px',
    width: '180px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '20px',
    borderRadius: '7px',
    textTransform: 'none',
    backgroundColor: '#213E60',
    '&:hover': {
      backgroundColor: '#104E96',
    },
}));

export default function Estante() {
    return (
        <>
            {/* Imagem header */}
            <div className="relative text-center">
                <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                    style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                    Estante
                </h1>
            </div>

            <div className="mt-32">
                <Filtro />
            </div>


            {/* <div className="flex flex-col lg:flex-row items-center justify-center mb-12">
//                 <div className="flex flex-col lg:flex-row justify-center items-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%]  h-[1200px] max-h-screen gap-14"> */}


            {/* Container principal */}
            
            <div className="flex flex-col items-center justify-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%]  h-[1200px] //max-h-screen  mb-12 gap-5">
                {/* Primeira fileira */}
                <div className="flex flex-wrap justify-center   gap-5">
                    {/* Livro 1 - Roboestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Aspectos da engenharia robótica
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>

                    {/* Livro 2 - Programaestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Linguagens de programação
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>

                    {/* Livro 3 - Biomediestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Fundamentos da biomedicina
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>

                    {/* Livro 4 - Mediestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Identificando os tipos de ossos presentes
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segunda fileira */}
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    {/* Livro 1 - Roboestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Aspectos da engenharia robótica
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>

                    {/* Livro 2 - Programaestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Linguagens de programação
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>

                    {/* Livro 3 - Biomediestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Fundamentos da biomedicina
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>

                    {/* Livro 4 - Mediestante */}
                    <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
                        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                            <img className="w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
                            <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Identificando os tipos de ossos presentes
                            </h2>
                        </div>
                        {/* Button */}
                        <div className="w-[90%] h-[14%] flex justify-center items-start">
                            <div className="flex items-center min-h-1">
                                <StyledButton variant="samais">Ver sobre</StyledButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
