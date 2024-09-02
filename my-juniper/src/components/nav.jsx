

// import React from "react";
// import { Select, MenuItem, FormControl, OutlinedInput } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // Importa useNavigate para navegação

// export default function Nav() {
//   const navigate = useNavigate(); // Hook para navegar programaticamente

//   const handleChange = (event) => {
//     navigate(`/${event.target.value}`); // Navega para a rota selecionada
//   };

//   return (
//     <nav className="bg-[#213E60] flex justify-center items-center h-16">
//       <div className="flex font-worksans text-[1.2rem] font-medium items-center space-x-[12rem]">
  
//         <a onClick={() => navigate('/')} className="text-white cursor-pointer">Home</a>

        
//         <FormControl sx={{ m: 1, minWidth: 120 }}>
         
//           <Select
//             value="" 
//             displayEmpty
//             onChange={handleChange} 
//             input={<OutlinedInput />}
//             renderValue={(selected) => {
//               if (!selected) {
//                 return <span className="text-white font-worksans text-[1.2rem] font-medium">Institucional</span>; // Placeholder
//               }
//               return selected;
//             }}
//             MenuProps={{
//               PaperProps: {
//                 sx: {
//                   backgroundColor: "#213E60", 
//                   "& .MuiMenuItem-root": {
//                     color: "white", 
//                   },
//                   "& .MuiMenuItem-root:hover": {
//                     backgroundColor: "#2c4b7f", 
//                     color: "#E68C3A", 
//                   },
//                 }
//               }
//             }}
//             sx={{
//               ".MuiSelect-select": {
//                 padding: "10px",
//                 backgroundColor: "#213E60", 
//                 color: "white", 
//                 border: "none",
//               },
//               ".MuiOutlinedInput-notchedOutline": {
//                 border: "none", 
//               },
//               ".MuiSelect-icon": {
//                 display: "none", 
//               },
//             }}
//           >
//             {/* MenuItems com valores de rota */}
//             <MenuItem value={"quemsomos"}>Quem somos nós</MenuItem>
//             <MenuItem value={"corpoedito"}>Corpo Editorial</MenuItem>
//             <MenuItem value={"perguntasfrequentes"}>Perguntas Frequentes</MenuItem>
//             <MenuItem value={"codigodeetica"}>Código de Ética</MenuItem>
//             <MenuItem value={"politicadeprivacidade"}>Política de Privacidade</MenuItem>
//             <MenuItem value={"politicaeditorial"}>Política Editorial</MenuItem>
//           </Select>
//         </FormControl>

//         <a onClick={() => navigate('/estante')} className="text-white cursor-pointer">Estante</a>
//         <div className="text-white">Serviços</div>
//         <a onClick={() => navigate('/chamaabert')} className="text-white cursor-pointer">Chamadas Abertas</a>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Select, MenuItem, FormControl, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa'; // Ícone do menu hambúrguer

export default function Nav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event) => {
    navigate(`/${event.target.value}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#213E60] flex justify-center items-center h-16 px-4 md:px-16">
      {/* Menu completo visível em telas maiores que 1024px */}
      <div className="hidden lg:flex font-worksans text-[1.3rem] font-medium items-center space-x-40">
        <a onClick={() => navigate('/')} className="text-white cursor-pointer">Home</a>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value="" 
            displayEmpty
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (!selected) {
                return <span className="text-white font-worksans text-[1.2rem] font-medium">Institucional</span>;
              }
              return selected;
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#213E60",
                  "& .MuiMenuItem-root": {
                    color: "white",
                  },
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "#2c4b7f",
                    color: "#E68C3A",
                  },
                }
              }
            }}
            sx={{
              ".MuiSelect-select": {
                padding: "10px",
                backgroundColor: "#213E60",
                color: "white",
                border: "none",
              },
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              ".MuiSelect-icon": {
                display: "none",
              },
            }}
          >
            <MenuItem value={"quemsomos"}>Quem somos nós</MenuItem>
            <MenuItem value={"corpoedito"}>Corpo Editorial</MenuItem>
            <MenuItem value={"perguntasfrequentes"}>Perguntas Frequentes</MenuItem>
            <MenuItem value={"codigodeetica"}>Código de Ética</MenuItem>
            <MenuItem value={"politicadeprivacidade"}>Política de Privacidade</MenuItem>
            <MenuItem value={"politicaeditorial"}>Política Editorial</MenuItem>
          </Select>
        </FormControl>

        <a onClick={() => navigate('/estante')} className="text-white cursor-pointer">Estante</a>
        <a onClick={() => navigate('/servicos')} className="text-white cursor-pointer">Serviços</a>
        <a onClick={() => navigate('/chamaabert')} className="text-white cursor-pointer">Chamadas Abertas</a>
      </div>

      {/* Ícone do menu hambúrguer para dispositivos menores que 1024px */}
      <div className="lg:hidden flex">
        <button onClick={toggleMenu}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>

      {/* Menu dropdown para dispositivos móveis */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#213E60] text-white flex flex-col items-center space-y-4 p-4 lg:hidden">
          <a onClick={() => { navigate('/'); toggleMenu(); }} className="text-white cursor-pointer">Home</a>
          <a onClick={() => { navigate('/quemsomos'); toggleMenu(); }} className="text-white cursor-pointer">Quem somos nós</a>
          <a onClick={() => { navigate('/estante'); toggleMenu(); }} className="text-white cursor-pointer">Estante</a>
          <a onClick={() => { navigate('/servicos'); toggleMenu(); }} className="text-white cursor-pointer">Serviços</a>
          <a onClick={() => { navigate('/chamaabert'); toggleMenu(); }} className="text-white cursor-pointer">Chamadas Abertas</a>
        </div>
      )}
    </nav>
  );
}
