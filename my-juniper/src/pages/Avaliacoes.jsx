import React from "react";
import Avatar1 from "../assets/img/avatar1.png";
import Avatar2 from "../assets/img/avatar2.png";
import Avatar3 from "../assets/img/avatar3.png";
import Star from '@mui/icons-material/Star'; // Importando o ícone de estrela

const Card = ({ avatar, name, title, review }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-[380px] h-[440px] flex-grow">
      <img src={avatar} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-xl font-bold text-gray-800 text-[30px]">{name}</h3>
      <p className="text-sm text-gray-600 mb-4 text-[30px]">{title}</p>
      <p className="text-gray-700 text-center italic mb-6 text-[18px]">"{review}"</p>
      <div className="text-yellow-500 flex justify-center mt-auto mb-6">
        <Star style={{ fontSize: 30 }} /> {/* Ajustando o tamanho do ícone */}
        <Star style={{ fontSize: 30 }} />
        <Star style={{ fontSize: 30 }} />
        <Star style={{ fontSize: 30 }} />
        <Star style={{ fontSize: 30 }} />
      </div>
    </div>
  );
};


// Paginação
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                pageNumbers.push(
                    <button
                        key={i}
                        className="px-4 py-2 border border-gray-400 bg-white text-gray-700"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            } else {
                pageNumbers.push(
                    <button
                        key={i}
                        className="px-4 py-2 border border-gray-400 text-gray-700"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        }
        return pageNumbers;
    };

    return (
        <div className="  w-full h-24">
            <div className=" flex justify-center items-center space-x-2 rounded-full border border-gray-400 p-1 bg-gray-50 w-[50%] max-w-[30%] mx-auto mt-8">
                <button
                    className="px-4 py-2 border border-gray-400 text-gray-700 bg-white rounded-l-full"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {renderPageNumbers().slice(0, 5)}
                <span className="px-4 py-2 text-gray-700">...</span>
                <button
                    className="px-4 py-2 border border-gray-400 text-gray-700"
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
                <button
                    className="px-4 py-2 border border-gray-400 text-gray-700 bg-white rounded-r-full"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

const CardGrid = () => {
  return (
    <div className="bg-[#F4F2EF] flex justify-center items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          avatar={Avatar1}
          name="Mateus Matoá"
          title="Cirurgião Cardiovascular"
          review="Minha breve passagem pela editora foi como uma chama que acendeu minha paixão pela escrita. Profissionalismo e cuidado em cada palavra."
        />
        <Card
          avatar={Avatar3}
          name="Haruka Nayua"
          title="Engenheira de Software"
          review="A equipe editorial não apenas poliu meu trabalho, mas também o elevou a novos patamares de excelência!"
        />
        <Card
          avatar={Avatar2}
          name="Vinícius Cardoso"
          title="Analista de Sistemas"
          review="Em pouco tempo com a editora, descobri muito apoio e expertise. Cada interação foi como uma aula mestra em refinamento editorial!"
        />

        <Card
          avatar={Avatar1}
          name="Mateus Matoá"
          title="Cirurgião Cardiovascular"
          review="Minha breve passagem pela editora foi como uma chama que acendeu minha paixão pela escrita. Profissionalismo e cuidado em cada palavra."
        />
        <Card
          avatar={Avatar3}
          name="Haruka Nayua"
          title="Engenheira de Software"
          review="A equipe editorial não apenas poliu meu trabalho, mas também o elevou a novos patamares de excelência!"
        />
        <Card
          avatar={Avatar2}
          name="Vinícius Cardoso"
          title="Analista de Sistemas"
          review="Em pouco tempo com a editora, descobri muito apoio e expertise. Cada interação foi como uma aula mestra em refinamento editorial!"
        />

        <Card
          avatar={Avatar1}
          name="Mateus Matoá"
          title="Cirurgião Cardiovascular"
          review="Minha breve passagem pela editora foi como uma chama que acendeu minha paixão pela escrita. Profissionalismo e cuidado em cada palavra."
        />
        <Card
          avatar={Avatar3}
          name="Haruka Nayua"
          title="Engenheira de Software"
          review="A equipe editorial não apenas poliu meu trabalho, mas também o elevou a novos patamares de excelência!"
        />
        <Card
          avatar={Avatar2}
          name="Vinícius Cardoso"
          title="Analista de Sistemas"
          review="Em pouco tempo com a editora, descobri muito apoio e expertise. Cada interação foi como uma aula mestra em refinamento editorial!"
        />
      </div>

        
    </div>
  );
};

export default CardGrid;
