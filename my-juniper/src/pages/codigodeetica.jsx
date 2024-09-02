import React from "react";
import Hcomum from "../assets/img/hcomum.png"

import Header from "../components/header";
import Footer from "../components/footer";

export default function Codigodeetica(){
  return(
    <>
        <div className="bg-[#F4F2EF] w-full"/* " mt-32" */>
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
                <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                    style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                    Código de ética
                </h1>
            </div>

          <div className=" flex justify-center w-full mt-8 mb-6">

            <div className="w-2/3 max-w-screen-xl">
              <p className=" font-worksans font-medium text-[22px] text-[#535353]">A Editora Learn Skills e seus autores estão comprometidos com os princípios
              éticos fundamentais, visando promover a excelência, integridade e responsabilidade em todas as atividades editoriais.</p>
          
            </div>

          </div>

        <div className="flex justify-center w-full mt-16 mb-16 ">
          <div className="w-2/3 max-w-screen-xl">
            <div className="flex flex-col justify-center space-y-4 ">
              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60] mb-6">Editora</h1>
            
              <p className="font-worksans font-medium text-[22px] text-[#535353] ">Comprometemo-nos a conduzir todas as o  perações com integridade e transparência, mantendo altos padrões éticos em todas as interações. Buscamos manter os mais altos padrões de qualidade em todas as publicações, assegurando a precisão, originalidade e relevância de cada obra.Assumimos a responsabilidade social e ambiental, buscando minimizar nosso impacto no meio ambiente e contribuir positivamente para as comunidades em que operamos. Respeitamos a confidencialidade das informações dos autores, assegurando a segurança de seus dados e tratando todos com respeito e dignidade. Evitamos conflitos de interesses e agimos de forma imparcial em todas as nossas decisões e atividades.</p>
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Assumimos a responsabilidade social e ambiental, buscando minimizar nosso impacto no meio ambiente e contribuir positivamente para as comunidades em que operamos. Respeitamos a confidencialidade das informações dos autores, assegurando a segurança de seus dados e tratando todos com respeito e dignidade. Evitamos conflitos de interesses e agimos de forma imparcial em todas as nossas decisões e atividades.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-16 pb-16 //mb-16 ">
          <div className="w-2/3 max-w-screen-xl">
            <div className="flex flex-col justify-center space-y-4 ">
              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60] mb-6">Autores</h1>
            
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Comprometem-se a fornecer trabalhos originais e autênticos, garantindo que todo o conteúdo submetido seja de sua autoria e não viole os direitos autorais de terceiros. Respeitam os padrões éticos e legais na condução da pesquisa, garantindo a veracidade e integridade dos dados apresentados. Garantem a atribuição adequada de crédito a todas as fontes utilizadas e colaboradores envolvidos na criação da obra. Colaboram de forma construtiva com a editora, respondendo prontamente às solicitações e oferecendo feedback para melhorar o processo editorial.</p>
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Ao aderir a este Código de Ética, tanto a Editora Learn Skills quanto seus autores comprometem-se a promover e respeitar esses princípios em todas as suas interações e atividades editoriais..</p>
            </div>
          </div>
        </div>

        </div>

    </>
  )
};