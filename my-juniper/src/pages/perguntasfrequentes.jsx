import React, { useState } from "react";
import Hcomum from "../assets/img/hcomum.png";
import Header from "../components/header";
import Footer from "../components/footer";


const FAQBox = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Perguntas Frequentes</h2>
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold">O que é React?</h3>
        <p>React é uma biblioteca JavaScript para criar interfaces de usuário.</p>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold">O que é Tailwind CSS?</h3>
        <p>Tailwind CSS é um framework CSS utilitário para criar layouts rapidamente.</p>
      </div>
    </div>
  );
};

export default FAQBox;
