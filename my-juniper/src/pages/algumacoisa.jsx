import React, { useState } from "react";
import Hcomum from "../assets/img/hcomum.png";
import Header from "../components/header";
import Footer from "../components/footer";
import { QuestionAnswer } from "@mui/icons-material";


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
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg shadow-blue-400 font-robotoserif font-bold text-[20px]">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 font-worksans font-medium text-[17px]">
          <button
            className="w-full text-left p-4"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 border border-t-0 border-gray-200 text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>

  );
};

export default FAQ;
