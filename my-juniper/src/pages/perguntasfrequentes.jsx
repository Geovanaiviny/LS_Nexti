import React, { useState } from "react";
import Hcomum from "../assets/img/hcomum.png";
import Header from "../components/header";
import Footer from "../components/footer";

const FAQCard = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button 
            className="w-full text-left py-3 px-4 flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <span className={`transition-transform duration-200 ${index === openIndex ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {index === openIndex && (
            <div className="px-4 pb-3">
              <p className="text-gray-700 text-sm">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const ImagePlaceholder = ({ text }) => (
  <div className="bg-gray-300 rounded-lg flex items-center justify-center p-4 h-full">
    <p className="text-gray-600 text-center">{text}</p>
  </div>
);

export default function Perguntasfrequentes() {
  const faqsLeft = [
    { question: "Como publica nessa editora?", answer: "Resposta para a primeira pergunta..." },
    { question: "Qual é o prazo médio de publicação?", answer: "Resposta para a segunda pergunta..." },
    { question: "Vocês oferecem serviços de edição?", answer: "Resposta para a terceira pergunta..." },
  ];

  const faqsRight = [
    { question: "Quais gêneros literários vocês publicam?", answer: "Resposta para a quarta pergunta..." },
    { question: "Como funciona o processo de royalties?", answer: "Resposta para a quinta pergunta..." },
    { question: "Vocês aceitam manuscritos internacionais?", answer: "Resposta para a sexta pergunta..." },
  ];

  return(
    <>
      <div className="bg-[#F4F2EF] w-full">
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
          <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF]"
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '39%', 
                transform: 'translate(-50%, -50%)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
              }}>
            Perguntas frequentes
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <FAQCard questions={faqsLeft} />
            <ImagePlaceholder text="Imagem em moldura" />
          </div>
          <div className="space-y-8">
            <ImagePlaceholder text="Imagem superior" />
            <FAQCard questions={faqsRight} />
          </div>
        </div>
      </div>
    </>
  )
}