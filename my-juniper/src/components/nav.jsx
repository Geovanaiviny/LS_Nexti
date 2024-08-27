// import React from "react";

// export default function Nav(){
//     return(

// <nav className="bg-[#213E60] flex justify-center items-center h-16">
//         <div className="flex font-worksans text-[1.2rem] font-medium items-center space-x-[12rem]">
//             <a href="" className="text-white">Home</a>
//             <div className="text-white">Institucional</div>
//             <div className="text-white">Estante</div>
//             <div className="text-white">Serviços</div>
//             <div className="text-white">Chamadas abertas</div>
//         </div>
//     </nav>

//     )
// }




import React from "react";
import { Select, MenuItem, FormControl, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para navegação

export default function Nav() {
  const navigate = useNavigate(); // Hook para navegar programaticamente

  const handleChange = (event) => {
    navigate(`/${event.target.value}`); // Navega para a rota selecionada
  };

  return (
    <nav className="bg-[#213E60] flex justify-center items-center h-16">
      <div className="flex font-worksans text-[1.2rem] font-medium items-center space-x-[12rem]">
  
        <a onClick={() => navigate('/')} className="text-white cursor-pointer">Home</a>

        
        <FormControl sx={{ m: 1, minWidth: 120 }}>
         
          <Select
            value="" 
            displayEmpty
            onChange={handleChange} 
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (!selected) {
                return <span className="text-white font-worksans text-[1.2rem] font-medium">Institucional</span>; // Placeholder
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
            {/* MenuItems com valores de rota */}
            <MenuItem value={"quemsomos"}>Quem somos nós</MenuItem>
            <MenuItem value={"corpoedito"}>Corpo Editorial</MenuItem>
            <MenuItem value={"perguntasfrequentes"}>Perguntas Frequentes</MenuItem>
            <MenuItem value={"codigodeetica"}>Código de Ética</MenuItem>
            <MenuItem value={"politicadeprivacidade"}>Política de Privacidade</MenuItem>
            <MenuItem value={"politicaeditorial"}>Política Editorial</MenuItem>
          </Select>
        </FormControl>

        <a onClick={() => navigate('/estante')} className="text-white cursor-pointer">Estante</a>
        <div className="text-white">Serviços</div>
        <a onClick={() => navigate('/chamaabert')} className="text-white cursor-pointer">Chamadas Abertas</a>
      </div>
    </nav>
  );
}
