import React, { useState } from 'react';
import Hcomum from "../assets/img/hcomum.png";
import Header from "../components/header";
import Footer from "../components/footer";
import { QuestionAnswer } from "@mui/icons-material";

export default function Perguntasfrequentes() {
  const faqData = [
    {
      question: 'Como publicar nessa editora?',
      answer: 'Para publicar conosco, primeiro, fique atento às nossas chamadas abertas, onde autores têm a oportunidade de submeter seus trabalhos.Envie seu arquivo original durante o período designado e sua obra será avaliada. Posteriormente, você receberá uma resposta de acordo com o resultado da avaliação.',
    },
    {
      question: 'Como publicar nessa editora?',
      answer: 'Para publicar conosco, primeiro, fique atento às nossas chamadas abertas, onde autores têm a oportunidade de submeter seus trabalhos.Envie seu arquivo original durante o período designado e sua obra será avaliada. Posteriormente, você receberá uma resposta de acordo com o resultado da avaliação',
    },
    {
      question: 'como publicar nessa editora?',
      answer: 'Para publicar conosco, primeiro, fique atento às nossas chamadas abertas, onde autores têm a oportunidade de submeter seus trabalhos.Envie seu arquivo original durante o período designado e sua obra será avaliada. Posteriormente, você receberá uma resposta de acordo com o resultado da avaliação',
    },
    {
      question: 'como publicar nessa editora?',
      answer: 'Para publicar conosco, primeiro, fique atento às nossas chamadas abertas, onde autores têm a oportunidade de submeter seus trabalhos.Envie seu arquivo original durante o período designado e sua obra será avaliada. Posteriormente, você receberá uma resposta de acordo com o resultado da avaliação',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#F4F2EF] w-full">

        {/* Imagem de fundo com título sobreposto */}
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
          <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
            style={{ position: 'absolute', top: '50%', left: '39%', transform: 'translate(-50%, -50%)' }}>
            Perguntas e respostas
          </h1>
        </div>

        {/* Seção de perguntas e imagem lado a lado */}
        <div className="flex flex-col md:flex-row items-start max-w-5xl mx-auto my-8 space-y-8 md:space-y-0 md:space-x-8">
          {/* Caixa do FAQ à esquerda */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg shadow-blue-300 ">

            {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left p-3 font-robotoserif font-bold text-[22px]"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                </button>
                {activeIndex === index && (
                  <div className="p-4 border border-t-0 border-gray-200 font-worksans font-medium text-[18px] text-[#535353]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Caixa da imagem à direita */}
          <div className="w-full md:w-1/2 flex justify-center p-6 bg-white rounded-lg shadow-lg shadow-gray-300">
            <img
              src="https://via.placeholder.com/300"  // Substitua pela URL da sua imagem
              alt="Imagem Exemplo"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
