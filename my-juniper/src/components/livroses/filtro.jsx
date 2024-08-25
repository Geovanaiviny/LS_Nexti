
// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Buscar from '../../assets/img_icon/buscar.png'

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(0.2),
//     minWidth: 260,
//     color:
//     '#808080',
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:hover': {
//         backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
//         color: '#E68C3A',
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));

// export default function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//           {/* Enunciado filtro */}
//           <div className='flex justify-center items-end  w-[40%] h-[70px] '>
//             <div className='flex justify-center items-center bg-transparent shadow-[0_-1px_12px_-6px_rgba(104,154,212,0.85)] border-[0.1px] border-[#b2b2b2] mr-6 w-[30%] h-[60px] max-h-screen'>
//               <h2 className='flex justify-center mt-4 items-center font-robotoserif text-[1.4rem] font-semibold mb-4 text-[#535353]'>
//                 Filtro
//               </h2>
//             </div>
//           </div>

//           {/* container completo filtro */}
//         <div className='flex //flex-col items-center justify-center mb-24' >
//             {/* Quadrado Filtro */}
//             <div className=' flex justify-center items-center bg-transparent shadow-[0_8px_16px_-7px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#b2b2b2] w-[80%] h-[180px] max-h-screen gap-60'>
//                 {/* Select */}
//                 <div>
//                     <h4 className=' font-robotoserif text-[1.4rem] font-semibold mb-4 text-[#535353]' >
//                         Categoria
//                     </h4>
//                 <Button
//                     sx={{ 
//                         background: '#FFFCFC',
//                         height: '54px',
//                         width: '390px',
//                         border: '1px solid #C0C0C0',
//                         color: '#A9A9A9',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         textTransform: 'none', // Opcional: mantém o texto como está, sem transformações para maiúsculas
//                         padding: '0 16px',
//                         fontFamily: '"worksans", sans-serif',
//                         fontSize: '1.1rem',
//                         marginTop: '3px',
//                         borderRadius: '6px',
//                         '&:hover': {
//                             backgroundColor: '#FFFCFC', // Define a cor de fundo para o estado de hover
//                             borderColor: '#E68C3A', // Opcional: também altera a cor da borda no hover
//                         },
//                         ...(open && {
//                             backgroundColor: '#FFFCFC',
//                             borderColor: '#E68C3A',
//                         }),
                        
//                         }}
//                     id="demo-customized-button"
//                     aria-controls={open ? 'demo-customized-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? 'true' : undefined}
//                     variant="contained"
//                     disableElevation
//                     onClick={handleClick}
//                     endIcon={<KeyboardArrowDownIcon />}
//                 >
//                     Área de conhecimento
//                 </Button>
//                 <StyledMenu
//                     id="demo-customized-menu"
//                     MenuListProps={{
//                     'aria-labelledby': 'demo-customized-button',
//                     }}
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                 >
//                     <MenuItem className="w-[390px]" onClick={handleClose} disableRipple>
                    
//                     Tecnologia
//                     </MenuItem>
//                     <MenuItem onClick={handleClose} disableRipple>
                    
//                     Arquitetura
//                     </MenuItem>
//                     <MenuItem onClick={handleClose} disableRipple>
//                     Engenharia
//                     </MenuItem>
//                     <MenuItem onClick={handleClose} disableRipple>
//                     Enfermagem
//                     </MenuItem>
//                 </StyledMenu>
//                 </div>


//                 {/* Div específica do input pesquisar e button */}
//                 <div>
//                     <h4 className='font-robotoserif text-[1.4rem] font-semibold mb-4 text-[#535353]'>
//                         Título da Obra
//                     </h4>
//                     <div name="pesquisah" className="flex space-x-2 items-center">
//                         <input type="text" className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md text-[1.1rem] w-[390px] px-4 h-[54px] text-[#757575] hover:border-[#E68C3A] focus:border-[#E68C3A] focus:outline-none font-worksans"
//                         placeholder="Pesquisar.."/>

//                             <button className="bg-[#E68C3A] flex justify-center items-center w-[84px] h-12 rounded-md" type="pheader">
//                                 <figure> <img className=" h-6 //px-[24px]" src={Buscar }/></figure>
//                             </button>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     </>



//   );
// }



import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Buscar from '../../assets/img_icon/buscar.png';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(0.2),
    minWidth: 260,
    color: '#808080',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        color: '#E68C3A',
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Enunciado filtro */}
      <div className='flex justify-center items-end w-full sm:w-[60%] lg:w-[40%] h-[70px]'>
        <div className='flex justify-center items-center bg-[#ffff] shadow-[0_-1px_12px_-6px_rgba(104,154,212,0.85)] border-[0.1px] border-[#dadada] mr-2 sm:mr-6 w-[80%] sm:w-[60%] lg:w-[30%] h-[60px]'>
          <h2 className='flex justify-center items-center font-robotoserif text-[1rem] sm:text-[1.4rem] font-semibold text-[#535353]'>
            Filtro
          </h2>
        </div>
      </div>

      {/* Container completo filtro */}
      <div className='flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-24 gap-6'>
        {/* Quadrado Filtro */}
        <div className='flex flex-col lg:flex-row justify-center items-center bg-[#ffff] shadow-[0_8px_16px_-7px_rgba(104,154,212,0.85)] border-[0.1px] rounded-md border-[#dadada] w-[90%] sm:w-[80%] lg:w-[80%] h-auto lg:h-[180px] max-h-screen gap-6 lg:gap-60'>
          {/* Select */}
          <div className='w-full lg:w-auto'>
            <h4 className='font-robotoserif text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] font-semibold mb-2 sm:mb-4 text-[#535353]'>
              Categoria
            </h4>
            <Button
              sx={{
                background: '#FFFCFC',
                height: '54px',
                width: '390px',
                maxWidth: '390px',
                border: '1px solid #C0C0C0',
                color: '#A9A9A9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textTransform: 'none',
                padding: '0 16px',
                fontFamily: '"worksans", sans-serif',
                fontSize: '1.1rem',
                marginTop: '3px',
                borderRadius: '6px',
                '&:hover': {
                  backgroundColor: '#FFFCFC',
                  borderColor: '#E68C3A',
                },
                ...(open && {
                  backgroundColor: '#FFFCFC',
                  borderColor: '#E68C3A',
                }),
              }}
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Todos
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem className="w-full lg:w-[390px]" onClick={handleClose} disableRipple>
                Tecnologia
              </MenuItem>
              <MenuItem className="w-full lg:w-[390px]" onClick={handleClose} disableRipple>
                Arquitetura
              </MenuItem>
              <MenuItem className="w-full lg:w-[390px]" onClick={handleClose} disableRipple>
                Engenharia
              </MenuItem>
              <MenuItem className="w-full lg:w-[390px]" onClick={handleClose} disableRipple>
                Enfermagem
              </MenuItem>
            </StyledMenu>
          </div>

          {/* Div específica do input pesquisar e button */}
          <div className='w-full lg:w-auto'>
            <h4 className='font-robotoserif text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] font-semibold mb-2 sm:mb-4 text-[#535353]'>
              Título da Obra
            </h4>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="text"
                className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md text-[1rem] sm:text-[1.1rem] w-[360px] //sm:w-auto max-w-[390px] px-4 h-[54px] text-[#757575] hover:border-[#E68C3A] focus:border-[#E68C3A] focus:outline-none font-worksans"
                placeholder="Pesquisar..."
              />
              <button className="bg-[#E68C3A] flex justify-center items-center w-[84px] h-12 rounded-md" type="button">
                <figure>
                  <img className="h-6" src={Buscar} alt="Buscar" />
                </figure>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


