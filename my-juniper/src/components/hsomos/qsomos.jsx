import React from "react";
import Hcomum from "../../assets/img/hcomum.png"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Lineicon from "../../assets/img_icon/compoline.jpg"
import Iquemnos from "../../assets/img/quemsomonos.jpg"

const StyledButton = styled(Button)(({ theme }) => ({
    height: '46px',
    width: '180px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '22px',
    textTransform: 'none',
    backgroundColor: '#213E60',
    '&:hover': {
      backgroundColor: '#104E96',
    },
  }));



export default function Qsomos(){
    return(
        <>
        <div className=" mt-32">
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
                <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                    style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                    Quem somos nós
                </h1>
            </div>

            <div className="mt-32 flex justify-center">
                <div className="flex gap-8 //justify-around items-center bg-transparent shadow-[0_8px_40px_-15px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#b2b2b2] w-[1200px] max-w-7xl h-[580px] max-h-screen">
                    <figure className=" mb-[460px] ml-16">
                        <img src={Lineicon}/>
                    </figure>
                    <div className=" flex gap-10 flex-col justify-center h-1 w-[32rem] ">
                    <h1 className=" text-5xl font-robotoserif font-semibold  text-[#213E60]">
                        Quem somos nós
                    </h1>

                    <p className="text-[20px] font-medium font-worksans text-[#535353]">
                    Somos a Learn Skills, uma editora acadêmica comprometida com a excelência no desenvolvimento e disseminação do conhecimento em diversas áreas. <br />
                    <br />
                    Nosso objetivo é oferecer materiais de alta qualidade que inspirem o aprendizado e contribuam para o avanço do conhecimento. <br />
                    <br />
                    Trabalhamos com autores renomados e instituições de ensino para fornecer uma ampla gama de recursos educacionais, desde livros impressos até eBooks, abrangendo várias disciplinas. 
                    </p>

                    </div>
                    <div className="h-[620px] mt-[38px] relative">
                        <figure className="">
                            <img className="h-[580px] " src={Iquemnos} />
                        </figure>
                    </div>

                 </div>
            </div>
    </div>


        </>
    )
}



