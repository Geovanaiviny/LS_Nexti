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
                Política de privacidade
            </h1>
        </div>

        <div className="flex justify-center w-full mt-16 mb-4">
          <div className="w-2/3 max-w-screen-2xl">
          <p className="font-worksans font-medium text-[22px] text-[#535353]">A Editora Learn Skills valoriza e respeita a privacidade de seus usuários, autores e parceiros. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você fornece quando utiliza nossos serviços ou visita nosso site.</p>
          </div>
        </div>

        <div className="flex justify-center w-full mt-16 mb-16">
          <div className="w-2/3 max-w-screen-2xl">
            <div className="flex flex-col justify-center space-y-14">
              <h1 className="font-robotoserif font-semibold text-[44px] text-[#213E60]">Editora</h1>
              <p className="font-worksans font-semibold text-[26px] text-[#535353]">Coleta de Informações</p>
              <ul className="list-disc pl-7 space-y-6">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Informações fornecidas por você: Podemos coletar informações pessoais que você nos fornece voluntariamente ao se cadastrar em nosso site, enviar um manuscrito ou entrar em contato conosco.</span>
                </li>
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">
                  Informações coletadas automaticamente: Podemos coletar determinadas informações automaticamente quando você utiliza nossos serviços, incluindo seu endereço IP, tipo de navegador, páginas visitadas e outras informações de análise</span>
                </li>
              </ul>

              <p className="font-worksans font-semibold text-[26px] text-[#535353] ">Uso de informações</p>
              <ul className="list-disc pl-7 ">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Utilizamos as informações coletadas para fornecer e melhorar nossos serviços, responder às suas solicitações, processar transações, comunicar-nos com você e personalizar sua experiência..</span>
                </li>
              </ul>

              <p className="font-worksans font-semibold text-[26px] text-[#535353]">Compartilhamento de Informações</p>
              <ul className="list-disc pl-7 ">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Podemos compartilhar suas informações pessoais com terceiros apenas conforme necessário para fornecer nossos serviços ou atender a requisitos legais</span>
                </li>
              </ul>

              <p className="font-worksans font-semibold text-[26px] text-[#535353]">Proteção de informações</p>
              <ul className="list-disc pl-7 ">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]">Implementamos medidas de segurança adequadas para proteger as informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</span>
                </li>
              </ul>

              <p className="font-worksans font-semibold text-[26px] text-[#535353]">Cookies</p>
              <ul className="list-disc pl-7">
                <li>
                  <span className="font-worksans font-medium text-[22px] text-[#535353]"> Utilizamos cookies e tecnologias similares para melhorar a experiência do usuário e analisar tendências de uso. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado.</span>
                </li>
              </ul>

            </div>

          </div>
        </div>

        <div className="flex justify-center w-full mt-32 pb-24 ">
          <div className="w-2/3 max-w-screen-2xl">
          <p className="font-worksans font-medium text-[22px] text-[#535353]">A Editora Learn Skills valoriza e respeita a privacidade de seus usuários, autores e parceiros. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você fornece quando utiliza nossos serviços ou visita nosso site.</p>
          </div>
        </div>

      </div>

  </>

  )
}

