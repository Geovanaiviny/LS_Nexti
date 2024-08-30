import React from "react";
import Hcomum from "../assets/img/hcomum.png";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Politicaeditorial(){
  return(

    <>

      <div className="bg-[#F4F2EF] w-full"/* " mt-32" */>
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
            <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                style={{ position: 'absolute', top: '50%', left: '39%', transform: 'translate(-50%, -50%)' }}>
                Política de privacidade
            </h1>
        </div>

        <div className="flex justify-center w-full mt-16 mb-16">
          <div className="w-2/3 max-w-screen-2xl space-y-10">
          <p className="font-worksans font-medium text-[22px] text-[#535353]">A Editora Learn Skills está comprometida em oferecer materiais educacionais de alta qualidade e relevância para os nossos leitores. Nossa política editorial é baseada em princípios fundamentais que orientam todas as nossas atividades editoriais.</p>
          <p className="font-worksans font-medium text-[22px] text-[#535353]">Nosso compromisso principal é com a excelência acadêmica. Todos os materiais publicados pela Editora Learn Skills são cuidadosamente revisados e desenvolvidos por especialistas em suas respectivas áreas, garantindo que atendam aos mais altos padrões de qualidade.</p>
          <p className="font-worksans font-medium text-[22px] text-[#535353]">Além disso, valorizamos a precisão e o rigor em todas as nossas publicações. Antes da publicação, realizamos uma revisão minuciosa para verificar a veracidade das informações e corrigir quaisquer erros ou imprecisões.</p>
          <p className="font-worksans font-medium text-[22px] text-[#535353]">Nossa abordagem editorial também prioriza a relevância e a atualidade. Estamos comprometidos em fornecer materiais que atendam às necessidades educacionais de nossos leitores, mantendo-os alinhados com os desenvolvimentos mais recentes em cada campo de estudo.</p>
          <p className="font-worksans font-medium text-[22px] text-[#535353]">Reconhecemos a importância da diversidade de perspectivas e experiências na educação. Por isso, procuramos incluir uma variedade de vozes em nossos materiais, garantindo que representem a diversidade de nossa sociedade.</p>
          <p className="font-worksans font-medium text-[22px] text-[#535353]">Operamos com transparência e ética em todas as nossas atividades editoriais. Divulgamos claramente nossos processos de revisão e edição, e estamos comprometidos em respeitar os direitos autorais e as normas éticas aplicáveis.</p>
          <p className="font-worksans font-medium text-[22px] text-[#535353]">Valorizamos o feedback de nossos leitores e estamos sempre abertos a sugestões para melhorar nossos materiais. Estamos comprometidos em ouvir atentamente nossos leitores e responder de maneira proativa às suas necessidades.</p>
          </div>
        </div>
      </div>

    
    </>

  )
}