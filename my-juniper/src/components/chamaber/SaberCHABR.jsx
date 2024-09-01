    import React from "react";
    import { useNavigate } from 'react-router-dom';
    import Capaliv2 from '../../assets/img/capalivr2.svg';
    import Hlivros from '../../assets/img/hlivros.svg';
    import { styled } from '@mui/material/styles';
    import Button from '@mui/material/Button';
    import Setabranca from '../../assets/img_icon/setabranca.svg';
    import Roboestan from '../../assets/img/roboestante.jpg';
    import Programaestan from '../../assets/img/prograestante.jpg';
    import Mediestan from '../../assets/img/mediestante.jpg';
    import Biomestante from '../../assets/img/biomestante.jpg';
    import Linecorpo from '../../assets/img_icon/linecorpoedi.png';
    import AccordionCA from './Accordion_CA.jsx';


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

    // const navigate = useNavigate();

    // const [modal, setModal] = useState(0)


    // const handleButtonClick = () => {
    //     navigate('/popupbaixar');
        
    // };

    // onClick={handleButtonClick}
    return(
        <>
            <div className="bg-[#F4F2EF] w-full">
                    {/* Imagem header */}
                <div className="relative text-center">
                        <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                            style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                            Chamadas abertas
                        </h1>
                </div>

                {/* Container principal
                {modal === 1 && <PopUpBaixar />} */}
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
                            <StyledButton variant="contained" >
                                Saiba mais
                                <img className="ml-4 w-[20%]" src={Setabranca} alt="Seta Branca" />
                            </StyledButton>

                        </div>
                    </div>
                    <div className="flex items-end justify-center w-[50%] h-[1%] mt-8 mb-6">
                        <img className="w-[490px] h-[4px]" src={Linecorpo} alt="" />
                    </div>
                </div>



                                {/* Seção de Organizadores e Conteúdo */}
                <div className="flex flex-col justify-center items-center w-full //mb-10">
                    <div className="//bg-[#FFFFFF] flex flex-col  w-[80%] h-auto p-1  //shadow-lg">
                        {/* Organizadores */}
                        <div className="mb-8">
                            <h2 className="font-worksans text-[#213E60] text-[36px] font-semibold">
                               Tópicos de interesse
                            </h2>
                        </div>

                        {/* Conteúdo */}
                        <div>

                            {/* Capítulo 1 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    1. História e Evolução da Engenharia Robótica
                                </p>

                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    2. Componentes e Sistemas de Robôs
                                </p>

                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    3. Inteligência Artificial em Robótica
                                </p>

                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    4. Robótica Autônoma vs. Robótica Controlada
                                </p>

                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    5. Aplicações Industriais da Robótica
                                </p>

                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    6. Robótica na Medicina
                                </p>

                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    7. Desafios Éticos na Engenharia Robótica
                                </p>

                                
                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    8. Robótica Educacional
                                </p>

                                
                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    9. Desenvolvimento de Robôs Humanoides
                                </p>

                                
                                <p className="font-worksans text-[#434343] text-[22px] font-semibold">
                                    10. Tendências Futuras na Engenharia Robótica
                                </p>


                            </div>

                            {/* Capítulo 2 */}
                            <div className="mb-6 mt-14">
                                <p className="font-worksans text-[#213E60] text-[30px] font-semibold">
                                    Organização 
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    Fabrício Carneiro e Samyra Lustoza 
                                </p>
                            </div>

                            {/* Capítulo 3 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#213E60] text-[24px] font-semibold">
                                    Data de submissão
                                </p>
                                <p className="font-worksans text-[#E68C3A] text-[20px] font-medium">
                                    14/04/2024
                                </p>
                            </div>

                            {/* Capítulo 4 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#213E60] text-[24px] font-semibold">
                                    Data de publicação
                                </p>
                                <p className="font-worksans text-[#434343] text-[20px] font-medium">
                                    14/07/2024
                                </p>
                            </div>

                            {/* Capítulo 5 */}
                            <div className="mb-6">
                                <p className="font-worksans text-[#213E60] text-[24px] font-semibold">
                                    Taxa de publicação
                                </p>
                                <p className="font-worksans text-[#E68C3A] text-[20px] font-medium">
                                    R$ 500,00
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex items-end justify-center w-[50%] h-[1%] mt-16 mb-20">
                        <img className="w-[490px] h-[4px]" src={Linecorpo} alt="" />
                    </div>


                    <div className="mb-6 mt-6">
                            <AccordionCA />
                    </div>

                    <div className=" flex items-end justify-center w-[50%] h-[1%] mt-16 mb-20">
                        <img className="w-[490px] h-[4px]" src={Linecorpo} alt="" />
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
            </div>

        </>
    );
}