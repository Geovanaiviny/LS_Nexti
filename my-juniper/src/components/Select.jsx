import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Setad from '../assets/img_icon/setad.png'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md h-11 w-[280px] flex items-center space-x-4">
      <Button
        sx={{ 
          // color: '#898989',
          color: '#AAAAAA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%', // Faz com que o botão ocupe toda a largura do div pai
          textTransform: 'none', // Opcional: mantém o texto como está, sem transformações para maiúsculas
          padding: '0 16px',
          fontFamily: '"worksans", sans-serif',
          fontSize: '1rem',
          marginTop: '3px',
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       >
        Área de conhecimento
        <figure><img className=" h-[22px]" src={Setad} alt="" /></figure>
      </Button>
      <Menu 
        sx={{
          width: '280px',
          display: 'flex',
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{
          width: '300px',
          display: 'flex',
          alignItems: 'Center',
        }} onClick={handleClose}>Tecnologia</MenuItem>
        <MenuItem onClick={handleClose}>Arquitetura</MenuItem>
        <MenuItem onClick={handleClose}>Engenharia</MenuItem>
      </Menu>
    </div>
  );
}
