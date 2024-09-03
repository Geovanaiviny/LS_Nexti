import React from "react";
import Hcomum from "../assets/img/hcomum.png";



export default function Politicaprivacidade(){
  return(
    <>
      <div className="bg-[#F4F2EF] w-full"/* " mt-32" */>
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
            <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                style={{ position: 'absolute', top: '50%', left: '39%', transform: 'translate(-50%, -50%)' }}>
                Conheça nosso serviços
            </h1>
        </div>

        <div className="flex justify-center w-full mt-16 py-16 //mb-16">
          <div className="w-2/3 max-w-screen-2xl">
            <div className="flex flex-col justify-center space-y-14">
              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60]">Livros Eletrônicos (eBooks)</h1>
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Na Editora Learn Skills, oferecemos uma plataforma aberta para a publicação de livros eletrônicos (eBooks), fornecendo uma oportunidade para autores compartilharem seu conhecimento com uma audiência global. Nossa modalidade de publicação de eBooks é projetada para maximizar a acessibilidade e o alcance de suas obras.</p>


              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60]">2.1. eBooks de Acesso Aberto</h1>
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Autores têm a opção de publicar seus eBooks em acesso aberto, onde o conteúdo é disponibilizado gratuitamente para leitura online.
                 Neste modelo, o autor assume a taxa de processamento de manuscrito para a publicação. O autor também tem a opção de adquirir cópias impressas (mínimo de 5 exemplares) para distribuição entre colegas e parceiros.</p>

              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60]">2.2. eBooks Comercializados</h1>
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Oferecemos a oportunidade para autores publicarem eBooks comerciais, onde o autor financia a produção do eBook que será disponibilizado para compra em nossa livraria digital. 
                Este formato permite que autores alcancem uma audiência mais ampla e também possam lucrar com as vendas de suas obras.</p>

              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60]">2.2.1. Projeto Gráfico do eBook</h1>
              <ul className="list-disc pl-7 ">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Formato padrão: ePub (compatível com a maioria dos dispositivos)</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Layout responsivo para garantir uma experiência de leitura otimizada em diferentes dispositivos (desktop, tablet, smartphone)</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Design profissional e atraente para a capa e o layout interno, maximizando o apelo visual e a usabilidade do eBook.</span>
                </li>
              </ul>


              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60]">2.3. Processo Editorial</h1>
              <p className="font-worksans font-medium text-[22px] text-[#535353]">Na Editora Learn Skills, nos comprometemos a oferecer um processo editorial transparente e de alta qualidade para todos os eBooks publicados. Nosso processo editorial inclui:</p>

              <ul className="list-disc pl-7">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]"> Atribuição de ISBN (International Standard Book Number) para identificação única do eBook.</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Elaboração de projeto gráfico do eBook, incluindo capa e layout interno.</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Registro de DOI (Digital Object Identifier) para eBooks não comerciais, garantindo identificação permanente e acesso fácil ao conteúdo.</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Atribuição de licenças Creative Commons para promover a disseminação e reutilização do conteúdo de forma ética.</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Revisão por pares para garantir a precisão e qualidade do conteúdo.</span>
                </li>

                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Após a aprovação editorial, o autor recebe uma carta de aceitação com o projeto editorial estabelecido, incluindo prazos e informações sobre a publicação.</span>
                </li>
              </ul>

              <p className="font-worksans font-medium text-[22px] text-[#535353]">Envie seu eBook para avaliação: [Endereço de e-mail para envio] ou consulte nosso calendário de submissões e títulos com chamadas abertas em nosso site.</p>

            </div>

          </div>
        </div>

      </div>

  </>

  )
}

