


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
// }));

// export default function Estante() {
//     return (
//         <>
//             {/* Imagem header */}
//             <div className="relative text-center">
//                 <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
//                     style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
//                     Estante
//                 </h1>
//             </div>

//             <div className="mt-32">
//                 <Filtro />
//             </div>


//             {/* <div className="flex flex-col lg:flex-row items-center justify-center mb-12">
// //                 <div className="flex flex-col lg:flex-row justify-center items-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%]  h-[1200px] max-h-screen gap-14"> */}


//             {/* Container principal */}
//             <div className=" flex flex-col  items-center justify-center">

//             {/* Quadrado branco */}
//                 <div className="flex flex-col items-center justify-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%]  h-[1200px] //max-h-screen  mb-12 gap-10">
                  
//                     {/* Primeira fileira */}
//                     <div className=" //bg-black w-[100%] h-[35%] flex flex-wrap justify-center items-start gap-8">
//                         {/* Livro 1 - Roboestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Aspectos da engenharia robótica
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 2 - Programaestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Linguagens de programação
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 3 - Biomediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Fundamentos da biomedicina
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 4 - Mediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Identificando os tipos de ossos presentes
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Segunda fileira */}
//                     <div className=" //bg-black w-[100%] h-[35%] flex flex-wrap justify-center items-center gap-8 //mt-5">
//                         {/* Livro 1 - Roboestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Aspectos da engenharia robótica
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 2 - Programaestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Linguagens de programação
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 3 - Biomediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Fundamentos da biomedicina
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 4 - Mediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Identificando os tipos de ossos presentes
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                         {/* Terceira fileira */}
//                     <div className=" //bg-black w-[100%] h-[35%] flex flex-wrap justify-center items-center gap-8 mt-5">
//                         {/* Livro 1 - Roboestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Aspectos da engenharia robótica
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 2 - Programaestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Linguagens de programação
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 3 - Biomediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Fundamentos da biomedicina
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 4 - Mediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Identificando os tipos de ossos presentes
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                         {/* Quarta fileira */}
//                         <div className=" //bg-black w-[100%] h-[35%] flex flex-wrap justify-center items-center gap-8 mt-5">
//                         {/* Livro 1 - Roboestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Roboestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Aspectos da engenharia robótica
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 2 - Programaestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Programaestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Linguagens de programação
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 3 - Biomediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Biomestante} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Fundamentos da biomedicina
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Livro 4 - Mediestante */}
//                         <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[18%] h-[400px] max-h-screen gap-2">
//                             <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
//                                 <img className="w-[200px] h-[240px] rounded-md" src={Mediestan} alt="" />
//                                 <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
//                                     Identificando os tipos de ossos presentes
//                                 </h2>
//                             </div>
//                             {/* Button */}
//                             <div className="w-[90%] h-[14%] flex justify-center items-start">
//                                 <div className="flex items-center min-h-1">
//                                     <StyledButton variant="samais">Ver sobre</StyledButton>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }








import React, { useState } from "react";
import Filtro from './filtro.jsx';
import Hlivros from '../../assets/img/hlivros.svg';
import Roboestan from '../../assets/img/roboestante.jpg';
import Programaestan from '../../assets/img/prograestante.jpg';
import Mediestan from '../../assets/img/mediestante.jpg';
import Biomestante from '../../assets/img/biomestante.jpg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// Botão estilizado
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

// Componente de Livro
const Livro = ({ src, title, route }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[22%] max-w-[300px] h-[440px] max-h-screen gap-2">
            <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                <img className="w-[90%] h-[80%] rounded-md" src={src} alt={title} />
                <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                    {title}
                </h2>
            </div>
            <div className="w-[90%] h-[14%] flex justify-center items-start">
                <StyledButton 
                    variant="contained" 
                    onClick={() => navigate(route)}
                >
                    Ver sobre
                </StyledButton>
            </div>
        </div>
    );
};

// Paginação
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                pageNumbers.push(
                    <button
                        key={i}
                        className="px-4 py-2 border border-gray-400 bg-white text-gray-700"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            } else {
                pageNumbers.push(
                    <button
                        key={i}
                        className="px-4 py-2 border border-gray-400 text-gray-700"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        }
        return pageNumbers;
    };

    return (
        <div className="w-full h-24">
            <div className="flex justify-center items-center space-x-2 rounded-full border border-gray-400 p-1 bg-gray-50 w-[50%] max-w-[30%] mx-auto mt-8">
                <button
                    className="px-4 py-2 border border-gray-400 text-gray-700 bg-white rounded-l-full"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {renderPageNumbers().slice(0, 5)}
                <span className="px-4 py-2 text-gray-700">...</span>
                <button
                    className="px-4 py-2 border border-gray-400 text-gray-700"
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
                <button
                    className="px-4 py-2 border border-gray-400 text-gray-700 bg-white rounded-r-full"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default function Estante() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 123;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-[#F4F2EF] w-full">
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

            {/* Container principal */}
            <div className="flex flex-col items-center justify-center w-full h-auto mb-14">
                {/* Quadrado branco */}
                <div className="flex flex-col items-center justify-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%] h-auto py-12 mb-12 gap-12">
                    {/* Fileiras de livros */}
                    {[1, 2, 3, 4].map((_, index) => (
                        <div 
                            key={index} 
                            className="w-[90%] flex flex-wrap justify-center items-center gap-12"
                        >
                            <Livro src={Roboestan} title="Aspectos da engenharia robótica" route="/livro1/" />
                            <Livro src={Programaestan} title="Linguagens de programação" route={"/livro2"} />
                            <Livro src={Biomestante} title="Fundamentos da biomedicina" route="/livro3" />
                            <Livro src={Mediestan} title="Identificando os tipos de ossos presentes" route="/livro4" />
                        </div>
                    ))}
                </div>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
}


//             {/* Container principal */}
//             <div className="//bg-black flex flex-col items-center justify-center w-full mb-14">
//                 {/* Quadrado branco */}
//                 <div className="flex flex-col items-center justify-center bg-[#ffff] shadow-[0_8px_18px_-2px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[80%] min-h-full mb-12 gap-10">
//                     {/* Fileiras de livros */}
//                     <div className="w-full flex flex-wrap justify-center items-center gap-12">
//                         <Livro src={Roboestan} title="Aspectos da engenharia robótica" route="/livro1" />
//                         <Livro src={Programaestan} title="Linguagens de programação" route="/livro2" />
//                         <Livro src={Biomestante} title="Fundamentos da biomedicina" route="/livro3" />
//                         <Livro src={Mediestan} title="Identificando os tipos de ossos presentes" route="/livro4" />
//                     </div>
//                 </div>
//             </div>

//             <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
//         </div>
//     );
// }
