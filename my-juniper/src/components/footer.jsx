import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import Logofoot from "../assets/img/logo_footer.png";
import Linefoot from "../assets/img_icon/linefoot.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#213E60] text-white py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0 ml-20 mt-4">
          <h6 className="font-semibold text-[22px] mb-2">Navegação</h6>
          <ul className="font-worksans font-medium text-lg flex flex-col mt-10">
            <li className="mb-3 text-[#F4F2EF] hover:text-[#D8D1BD]"><a href="#">Home</a></li>
            <li className="mb-3 text-[#F4F2EF] hover:text-[#D8D1BD]"><a href="#">Institucional</a></li>
            <li className="mb-3 text-[#F4F2EF] hover:text-[#D8D1BD]"><a href="#">Estante</a></li>
            <li className="mb-3 text-[#F4F2EF] hover:text-[#D8D1BD]"><a href="#">Serviços</a></li>
            <li className="mb-3 text-[#F4F2EF] hover:text-[#D8D1BD]"><a href="#">Chamadas abertas</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 mt-4">
          <h6 className="font-semibold text-[22px] mb-2">Contatos</h6>
          <ul className="mt-10">
            <li className="mb-3 flex items-center font-worksans font-medium text-lg">
              <FaWhatsapp className="mr-3" /> (88) 97433-7571
            </li>
            <li className="mb-3 flex items-center font-worksans font-medium text-lg">
              <FaEnvelope className="mr-3" /> learnskillscursos@gmail.com
            </li>
            <li className="mb-3 flex items-center font-worksans font-medium text-lg">
              <FaInstagram className="mr-3" /> learnskillscursos
            </li>
            <li className="mb-3 flex items-center font-worksans font-medium text-lg">
              <FaPhone className="mr-3" /> (88) 97433-7571
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 mt-4 mr-[90px]">
          <h6 className="font-semibold text-[22px] mb-2">Endereço</h6>
          <p className="mb-3 flex items-center font-worksans font-medium text-lg">
            Juazeiro do Norte - <br />
            CE, CEP: 63000-001
          </p>
        </div>
      </div>

      <div className="flex items-end justify-end h-12 w-100vw //ml-[1250px]">
        <figure className="flex justify-end">
          <img className="flex h-[130px] w-[150px]" src={Logofoot} />
        </figure>
      </div>
      
      <div className="flex justify-center">
        <figure>
          <img className="w-[86rem]" src={Linefoot} />
        </figure>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p>© 2020-2024 Created by Editora Learn Skills</p>
      </div>
    </footer>
  );
}

export default Footer;
