// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import PaperIcon from '@mui/icons-material/Description'; // Ícone de documento
// import Typography from '@mui/material/Typography'; // Tipografia para estilização

// export default function AccordionUsage() {
//   return (
//     <div className="flex flex-col gap-8">
//       {/* Acordeão 1 */}
//       <Accordion sx={{ width: '1200px' }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: '#FBF9F6', // Cor de fundo do título
//             padding: '10px 30px', // Aumentando o padding para aumentar o tamanho do acordeão
//             borderRadius: '10px', // Bordas arredondadas
//             transition: 'background-color 0.3s, border-color 0.3s', // Transição suave para o hover
//             '&:hover': {
//               backgroundColor: '#FBF9F6', // Define a cor de fundo para o estado de hover
//               border: '2px solid #E68C3A' // Opcional: também altera a cor da borda no hover
//             },
//             '&.Mui-expanded': {
//               backgroundColor: '#FBF9F6', // Cor de fundo do título quando expandido
//               border: '2px solid #E68C3A'
//             },
//           }}
//         >
//           <PaperIcon sx={{ fontSize: '1.5rem', marginRight: 2 }} /> {/* Ícone de documento */}
//           <Typography sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 'bold', color: '#213E60' }}>
//             Características do Livro
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails
//           sx={{
//             backgroundColor: '#EAEAEA', // Cor de fundo do conteúdo aberto
//             padding: '20px 30px', // Aumentando o padding
//             borderRadius: '0 0 10px 10px', // Bordas arredondadas na parte inferior
//           }}
//         >
//           <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial' }}>
//             • ISBN
//           </Typography>

//           <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>

//           <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       {/* Acordeão 2 */}
//       <Accordion sx={{ width: '1200px' }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: '#FBF9F6',
//             padding: '10px 30px',
//             borderRadius: '10px',
//             transition: 'background-color 0.3s, border-color 0.3s',
//             '&:hover': {
//               backgroundColor: '#FFFCFC',
//               borderColor: '#E68C3A',
//             },
//             '&.Mui-expanded': {
//               backgroundColor: '#EAEAEA',
//             },
//           }}
//         >
//           <PaperIcon sx={{ fontSize: '1.5rem', marginRight: 2 }} />
//           <Typography sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Accordion 2
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails
//           sx={{
//             backgroundColor: '#EAEAEA',
//             padding: '20px 30px',
//             borderRadius: '0 0 10px 10px',
//           }}
//         >
//           <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }



import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaperIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';

export default function AccordionUsage() {
  return (
      <>
    
        <div className="flex flex-col gap-8 p-4 //rounded-[20px]" >
          {/* Acordeão 1 */}
          <Accordion sx={{ width: '100%', border: '1px solid #B8B8B8', borderRadius: '20px', boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem', color: '#A1A1A1' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fffff',
                padding: '10px 30px',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: '#ffff',
                  border: '2px solid #E68C3A',
                },
                '&.Mui-expanded': {
                  backgroundColor: '#ffff',
                  border: '2px solid #E68C3A',
                },
              }}
            >
              <PaperIcon sx={{ fontSize: '2.1rem', marginRight: 2, color: '#1D3557' }} /> {/* Ícone de documento */}
              <Typography sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 'bold', color: '#1D3557' }}>
                Características do livro
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: '#FFFFFF',
                padding: '20px 30px',
                borderRadius: '0 0 20px 20px',
              }}
            >
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • ISBN
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • DOI do livro e DOI para cada capítulo
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Corpo Editorial
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Licença de Atribuição Creative Commons 4.0
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Disponibilização no site da Editora Learn Skills
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Indexação progressiva em plataformas como: eduCAPES, Academia.edu, Smashwords, dentre outras
              </Typography>
            </AccordionDetails>
          </Accordion>


          
        </div>

        <div className="flex flex-col gap-8 p-4 //rounded-[20px]" style={{ backgroundColor: '#f4f4f4' }}>
          {/* Acordeão 1 */}
          <Accordion sx={{ width: '100%', border: '1px solid #B8B8B8', borderRadius: '20px', boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem', color: '#A1A1A1' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffff',
                padding: '10px 30px',
                borderRadius: '4px', // Certifique-se de que o Accordion tenha bordas arredondadas
                '&:hover': {
                  backgroundColor: '#ffffff',
                  border: '2px solid #E68C3A',
                },
                '&.Mui-expanded': {
                  backgroundColor: '#ffff',
                  border: '2px solid #E68C3A',
                },
              }}
            >
              <PaperIcon sx={{ fontSize: '2.1rem', marginRight: 2, color: '#1D3557' }} /> {/* Ícone de documento */}
              <Typography sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 'bold', color: '#1D3557' }}>
                Formato do artigo
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: '#FFFFFF',
                padding: '20px 30px',
                borderRadius: '0 0 20px 20px',
              }}
            >
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Os arquivos deverão ser enviados em Word 97-2003 ou superior.
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Apresentar o título centralizado no topo da página em letra maiúscula e negrito
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Incluir nome completo do (s) autor (es)
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Incluir os autores na ordem que deseja que conste na publicação
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Resumo do trabalho em português
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Arial', color: '#333333' }}>
                • Palavras-chave: deverá ser apresentada em português
              </Typography>
            </AccordionDetails>
          </Accordion>


          
        </div>

      </>
  );
}
