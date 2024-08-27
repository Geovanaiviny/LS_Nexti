import React from "react";
import { useNavigate } from 'react-router-dom';
import Capaliv2 from '../assets/img/capalivr2.svg';
import Hlivros from '../assets/img/hlivros.svg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Setabranca from '../assets/img_icon/setabranca.svg';
import Programaestan from '../assets/img/prograestante.jpg';


// Estilização do botão
const StyledButton = styled(Button)(({ theme }) => ({
height: '58px',
width: '240px',
color: '#FFFFFF',
fontFamily: 'E17F26',
fontWeight: '800',
fontSize: '24px',
borderRadius: '70px',
textTransform: 'none',
backgroundColor: '#E68C3A',
'&:hover': {
    backgroundColor: '#E17F26',
},
}));

export default function ChamAbert(){
    const navigate = useNavigate();

        const handleButtonClick = () => {
        navigate('/popupbaixar');
        
    };
return(
    <>
        <div className=" bg-[#F4F2EF] w-full">
            {/* Imagem header */}
            <div className="relative text-center">
                    <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                        style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                        Chamadas Abertas
                    </h1>
            </div>


            <div className="flex flex-col justify-center items-center w-full h-auto py-10">
                    <div className="//bg-[#FFFFFF] flex flex-row justify-center w-[90%] h-auto p-10 //shadow-lg">
                        {/* Imagem do livro */}
                        <img className="w-[30%] h-auto rounded-md" src={Capaliv2} alt="Capa do Livro" />

                        {/* Informações do livro */}
                        <div className="ml-10 flex flex-col justify-start w-[60%]">
                            <h1 className="font-robotoserif text-[#131313] text-4xl font-semibold mb-4">
                                Aspectos da engenharia robótica
                            </h1>

                            <p className="font-worksans text-[#131313] text-2xl font-semibold mb-6">
                                DOI: 10.11536/ABM.0.1.1124
                            </p>

                            <p className="font-worksans text-[#213E60] text-2xl font-semibold mb-2">
                                Descrição
                            </p>

                            <p className="font-worksans text-[#434343] text-xl font-medium mb-6">
                                A engenharia robótica é uma disciplina multidisciplinar que integra conhecimentos de engenharia mecânica, elétrica, ciência da computação e controle, entre outros. 
                            </p>

                            <p className="font-worksans text-[#434343] text-xl font-medium mb-8">
                                Ela se dedica ao desenvolvimento, projeto, construção, operação e aplicação de robôs, que são sistemas automatizados capazes de realizar tarefas específicas, muitas vezes substituindo ou auxiliando o trabalho humano.
                            </p>

                            {/* Button */}
                            <StyledButton variant="contained" onClick={handleButtonClick}>
                                Saiba mais
                                <img className="ml-4 w-[20%]" src={Setabranca} alt="Seta Branca" />
                            </StyledButton>
                        </div>
                    </div>
                </div>
        </div>
    </>
);
}

