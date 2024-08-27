import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Hlivros from '../../assets/img/hlivros.svg';
import Capaliv1 from '../../assets/img/capaliv1.svg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Setabranca from '../../assets/img_icon/setabranca.svg';
import { Box } from "@mui/material";
import Linecorpo from '../../assets/img_icon/linecorpoedi.png';
import Roboestan from '../../assets/img/roboestante.jpg';
import Programaestan from '../../assets/img/prograestante.jpg';
import Mediestan from '../../assets/img/mediestante.jpg';
import Biomestante from '../../assets/img/biomestante.jpg';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import Popover from '@mui/material/Popover';
import PopUpCompra from "./PopUpCompra";

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

export default function LivroDetalhes() {

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    
    const handleButtonClick = () => {
        // navigate('/popupbaixar')
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <div className="bg-[#F4F2EF] w-full">
                {/* Imagem header */}
                <div className="relative text-center">
                    <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                        style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                        Estante
                    </h1>
                </div>

                {/* Container principal */}
                <div className="flex flex-col justify-center items-center w-full h-auto py-10">
                    <div className="//bg-[#FFFFFF] flex flex-row justify-center w-[90%] h-auto p-10 //shadow-lg">
                        {/* Imagem do livro */}
                        <img className="w-[30%] h-auto rounded-md" src={Capaliv1} alt="Capa do Livro" />

                        {/* Informações do livro */}
                        <div className="ml-10 flex flex-col justify-start w-[60%]">
                            <h1 className="font-robotoserif text-[#131313] text-4xl font-semibold mb-4">
                                Explorando o Universo Java: Novas Fronteiras e Tendências
                            </h1>

                            <p className="font-worksans text-[#131313] text-2xl font-semibold mb-6">
                                DOI: 10.11536/ABM.0.1.1124
                            </p>

                            <p className="font-worksans text-[#213E60] text-2xl font-semibold mb-2">
                                Descrição
                            </p>

                            <p className="font-worksans text-[#434343] text-xl font-medium mb-6">
                                Este livro é uma chamada aberta para os profissionais e entusiastas da linguagem Java que buscam expandir seus horizontes e explorar as últimas tendências e desenvolvimentos no mundo da programação Java.
                            </p>

                            <p className="font-worksans text-[#434343] text-xl font-medium mb-8">
                                Estamos à procura de contribuições que abordem temas avançados, inovadores e desafiadores relacionados ao ecossistema Java.
                            </p>

                            {/* Button */}
                            <StyledButton variant="contained" onClick={handleButtonClick}>
                                Saiba mais
                                <img className="ml-4 w-[20%]" src={Setabranca} alt="Seta Branca" />
                            </StyledButton>

                        </div>
                    </div>

                    <div className="flex items-end justify-center w-[50%] h-[1%] mt-6 mb-6">
                        <img className="w-[490px]" src={Linecorpo} alt="" />
                    </div>
                </div>

                {/* Seção de Organizadores e Conteúdo */}
                <div className="flex flex-col justify-center items-center w-full //mb-10">
                    <div className="//bg-[#FFFFFF] flex flex-col  w-[80%] h-auto p-1  //shadow-lg">
                        {/* Organizadores */}
                        <div className="mb-8">
                            <h2 className="font-worksans text-[#213E60] text-[36px] font-semibold">
                                Organizadores
                            </h2>
                            <p className="font-worksans text-[#434343] text-lg mt-3 font-medium">
                                Fabrício Carneiro e Samira Lustoza
                            </p>
                        </div>

                        {/* Conteúdo */}
                        <div>
                            <h2 className="font-worksans text-[#213E60] text-[30px] font-semibold mb-4">
                                Conteúdo
                            </h2>

                            {/* Capítulo 1 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#E68C3A] text-[24px] font-semibold">
                                    Capítulo 1: Introdução à Programação Orientada a Objetos com Java
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Lucas Oliveira, Rafaela Santos, Pedro Almeida, Ana Silva
                                </p>
                                <p className="font-worksans text-[#434343] text-lg">
                                    DOI: 10.36229/978-65-5866-371-3.CAP.01
                                </p>
                            </div>

                            {/* Capítulo 2 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#E68C3A] text-[24px] font-semibold">
                                    Capítulo 2: Desenvolvimento de Aplicações Web com Spring Boot e Hibernate
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Bruno Pereira, Carolina Lima, Daniel Oliveira, Mariana Rodrigues
                                </p>
                                <p className="font-worksans text-[#434343] text-lg">
                                    DOI: 10.36229/978-65-5866-371-3.CAP.02
                                </p>
                            </div>

                            {/* Capítulo 3 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#E68C3A] text-[24px] font-semibold">
                                    Capítulo 3: Implementação de APIs RESTful com Spring MVC
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Fernanda Costa, João Santos, Renata Oliveira, Thiago Almeida
                                </p>
                                <p className="font-worksans text-[#434343] text-lg">
                                    DOI: 10.36229/978-65-5866-371-3.CAP.03
                                </p>
                            </div>

                            {/* Capítulo 4 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#E68C3A] text-[24px] font-semibold">
                                    Capítulo 4: Segurança em Aplicações Java: Boas Práticas e Ferramentas de Proteção
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Camila Rodrigues, Guilherme Silva, Juliana Martins, Marcos Oliveira
                                </p>
                                <p className="font-worksans text-[#434343] text-lg">
                                    DOI: 10.36229/978-65-5866-371-3.CAP.04
                                </p>
                            </div>

                            {/* Capítulo 5 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#E68C3A] text-[24px] font-semibold">
                                    Capítulo 5: Microserviços e Arquitetura de Microserviços com Spring Cloud
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Rafaela Costa, Luiz Oliveira, Amanda Santos, Diego Almeida
                                </p>
                                <p className="font-worksans text-[#434343] text-lg">
                                    DOI: 10.36229/978-65-5866-371-3.CAP.05
                                </p>
                            </div>

                            {/* Capítulo 6 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#E68C3A] text-[24px] font-semibold">
                                    Capítulo 6: Integração Contínua e Entrega Contínua (CI/CD) com Jenkins e Maven
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Pedro Lima, Carla Almeida, Gustavo Oliveira, Isabela Santos
                                </p>
                                <p className="font-worksans text-[#434343] text-lg">
                                    DOI: 10.36229/978-65-5866-371-3.CAP.06
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex items-end justify-center w-[50%] h-[1%] mt-16 mb-20">
                        <img className="w-[490px]" src={Linecorpo} alt="" />
                    </div>

                     {/* Primeira fileira */}
                     <div className=" //bg-black w-[100%] h-[80%] flex //flex-wrap justify-center items-start gap-8 mb-12">
                         {/* Livro 1 - Roboestante */}
                        <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[16%] h-[360px] max-h-screen gap-2">
                            <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                                <img className="w-[220px] h-[240px] rounded-md" src={Roboestan} alt="" />
                                <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                    Aspectos da engenharia robótica
                                </h2>
                            </div>
                       </div>

                        {/* Livro 2 - Programaestan */}
                        <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[16%] h-[360px] max-h-screen gap-2">
                            <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                                <img className="w-[220px] h-[240px] rounded-md" src={Programaestan} alt="" />
                                <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                    Linguagens de programação
                                </h2>
                            </div>
                       </div>

                       {/* Livro 3 - Biomestante */}
                       <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[16%] h-[360px] max-h-screen gap-2">
                            <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                                <img className="w-[220px] h-[240px] rounded-md" src={Biomestante} alt="" />
                                <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Fundamentos da biomedicina
                                </h2>
                            </div>
                       </div>

                       {/* Livro 4 - Mediestan */}
                       <div className="bg-[#fafaf9] flex flex-col justify-center items-center shadow-[0_8px_10px_-7px_rgba(94,94,94,0.87)] border-[0.1px] rounded-md border-[#dfdfdf] w-[16%] h-[360px] max-h-screen gap-2">
                            <div className="flex flex-col justify-center items-center w-[90%] h-[80%] gap-4">
                                <img className="w-[220px] h-[240px] rounded-md" src={Mediestan} alt="" />
                                <h2 className="w-full font-worksans text-[18px] font-medium text-[#828282]">
                                Identificando os tipos de ossos presentes
                                </h2>
                            </div>
                       </div>
                    </div>
                </div>

                    {/* Exibir o modal se `modal` for 1 */}
                {modal && <PopUpCompra closeModal={closeModal}/>}

            </div>
        </>
    );
}
