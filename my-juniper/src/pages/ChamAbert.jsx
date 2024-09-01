import React from "react";
import { useNavigate } from 'react-router-dom';
import Capaliv2 from '../assets/img/capalivr2.svg';
import Capaliv1 from '../assets/img/capaliv1.svg';
import Hlivros from '../assets/img/hlivros.svg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Setabranca from '../assets/img_icon/setabranca.svg';


const StyledButton = styled(Button)(({ theme }) => ({
    height: '38px',
    width: '140px',
    color: '#FFFFFF',
    fontFamily: 'E17F26',
    fontWeight: '800',
    fontSize: '14px',
    borderRadius: '70px',
    textTransform: 'none',
    backgroundColor: '#E68C3A',
    '&:hover': {
        backgroundColor: '#E17F26',
    },
}));

// Componente de Paginação
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-4">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 mx-1 border rounded ${page === currentPage ? 'bg-[#E68C3A] text-white' : 'bg-white text-[#E68C3A]'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default function ChamAbert(){
    const navigate = useNavigate();
    const totalPages = 4; // Defina o número total de páginas
    const [currentPage, setCurrentPage] = React.useState(1);

    const handleNavigate = (route) => {
        navigate(route);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Redirecionar para a rota correspondente com base na página
        switch(page) {
            case 1:
                navigate('/pchamaber1');
                break;
            case 2:
                navigate('/pchamaber2');
                break;
            case 3:
                navigate('/pchamaber3');
                break;
            case 4:
                navigate('/pchamaber4');
                break;
            default:
                navigate('/pchamaber1');
        }
    };

    return(
        <div className="bg-[#F4F2EF] w-full">
            {/* Imagem header */}
            <div className="relative text-center">
                <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                    style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                    Chamadas Abertas
                </h1>
            </div>

            {/* CA Programação */}
            <div className="flex flex-col justify-center items-center w-full h-auto py-4 mt-8">
                <div className="//bg-[#FFFFFF] flex flex-row justify-center w-[90%] h-auto p-2 //shadow-lg">
                    {/* Imagem do livro */}
                    <img className="w-[18%] h-auto rounded-md" src={Capaliv2} alt="Capa do Livro" />
                    {/* Informações do livro */}
                    <div className="ml-10 flex flex-col justify-start w-[60%]">
                        <h1 className="font-robotoserif text-[#131313] text-3xl font-semibold mb-4">
                            Aspectos da engenharia robótica
                        </h1>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-4">
                            A engenharia robótica é uma disciplina multidisciplinar que integra conhecimentos de engenharia mecânica, elétrica, ciência da computação e controle, entre outros.
                        </p>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-6">
                            Ela se dedica ao desenvolvimento, projeto, construção, operação e aplicação de robôs, que são sistemas automatizados capazes de realizar tarefas específicas, muitas vezes substituindo ou auxiliando o trabalho humano.
                        </p>
                        {/* Button */}
                        <StyledButton variant="contained" onClick={() => handleNavigate('/pchamaber1')}>
                            Saiba mais
                            <img className="ml-4 w-[18%]" src={Setabranca} alt="Seta Branca" />
                        </StyledButton>
                    </div>
                </div>
            </div>

            {/* CA Livro 2 */}
            <div className="flex flex-col justify-center items-center w-full h-auto py-4">
                <div className="//bg-[#FFFFFF] flex flex-row justify-center w-[90%] h-auto p-2 //shadow-lg">
                    {/* Imagem do livro */}
                    <img className="w-[18%] h-auto rounded-md" src={Capaliv1} alt="Capa do Livro" />
                    {/* Informações do livro */}
                    <div className="ml-10 flex flex-col justify-start w-[60%]">
                        <h1 className="font-robotoserif text-[#131313] text-3xl font-semibold mb-4">
                            Explorando o Universo Java: Novas Fronteiras e Tendências
                        </h1>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-4">
                            Este livro é uma chamada aberta para os profissionais e entusiastas da linguagem Java que buscam expandir seus horizontes e explorar as últimas tendências e desenvolvimentos no mundo da programação Java.
                        </p>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-6">
                            Estamos à procura de contribuições que abordem temas avançados, inovadores e desafiadores relacionados ao ecossistema Java.
                        </p>
                        {/* Button */}
                        <StyledButton variant="contained" onClick={() => handleNavigate('/pchamaber2')}>
                            Saiba mais
                            <img className="ml-4 w-[18%]" src={Setabranca} alt="Seta Branca" />
                        </StyledButton>
                    </div>
                </div>
            </div>

            {/* CA Livro 3 */}
            <div className="flex flex-col justify-center items-center w-full h-auto py-4">
                <div className="//bg-[#FFFFFF] flex flex-row justify-center w-[90%] h-auto p-2 //shadow-lg">
                    {/* Imagem do livro */}
                    <img className="w-[18%] h-auto rounded-md" src={Capaliv2} alt="Capa do Livro" />
                    {/* Informações do livro */}
                    <div className="ml-10 flex flex-col justify-start w-[60%]">
                        <h1 className="font-robotoserif text-[#131313] text-3xl font-semibold mb-4">
                            Aspectos da engenharia robótica
                        </h1>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-4">
                            A engenharia robótica é uma disciplina multidisciplinar que integra conhecimentos de engenharia mecânica, elétrica, ciência da computação e controle, entre outros.
                        </p>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-6">
                            Ela se dedica ao desenvolvimento, projeto, construção, operação e aplicação de robôs, que são sistemas automatizados capazes de realizar tarefas específicas, muitas vezes substituindo ou auxiliando o trabalho humano.
                        </p>
                        {/* Button */}
                        <StyledButton variant="contained" onClick={() => handleNavigate('/pchamaber3')}>
                            Saiba mais
                            <img className="ml-4 w-[18%]" src={Setabranca} alt="Seta Branca" />
                        </StyledButton>
                    </div>
                </div>
            </div>

            {/* CA Livro 4 */}
            <div className="flex flex-col justify-center items-center w-full h-auto py-4 pb-8">
                <div className="//bg-[#FFFFFF] flex flex-row justify-center w-[90%] h-auto p-2 //shadow-lg">
                    {/* Imagem do livro */}
                    <img className="w-[18%] h-auto rounded-md" src={Capaliv1} alt="Capa do Livro" />
                    {/* Informações do livro */}
                    <div className="ml-10 flex flex-col justify-start w-[60%]">
                        <h1 className="font-robotoserif text-[#131313] text-3xl font-semibold mb-4">
                            Explorando o Universo Java: Novas Fronteiras e Tendências
                        </h1>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-4">
                            Este livro é uma chamada aberta para os profissionais e entusiastas da linguagem Java que buscam expandir seus horizontes e explorar as últimas tendências e desenvolvimentos no mundo da programação Java.
                        </p>
                        <p className="font-worksans text-[#434343] text-[14px] font-medium mb-6">
                            Estamos à procura de contribuições que abordem temas avançados, inovadores e desafiadores relacionados ao ecossistema Java.
                        </p>
                        {/* Button */}
                        <StyledButton variant="contained" onClick={() => handleNavigate('/pchamaber4')}>
                            Saiba mais
                            <img className="ml-4 w-[18%]" src={Setabranca} alt="Seta Branca" />
                        </StyledButton>
                    </div>
                </div>
                {/* Componente de Paginação */}
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}
