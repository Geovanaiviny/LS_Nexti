
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
    color:
    '#808080',
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
    <div>
      <Button
        sx={{ 
            background: '#FFFCFC',
            height: '44px',
            width: '260px',
            border: '1px solid #C0C0C0',
            color: '#A9A9A9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'none', // Opcional: mantém o texto como está, sem transformações para maiúsculas
            padding: '0 16px',
            fontFamily: '"worksans", sans-serif',
            fontSize: '1rem',
            marginTop: '3px',
            borderRadius: '6px',
            '&:hover': {
                backgroundColor: '#FFFCFC', // Define a cor de fundo para o estado de hover
                borderColor: '#E68C3A', // Opcional: também altera a cor da borda no hover
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
        Área de conhecimento
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
        <MenuItem className="w-[260px]" onClick={handleClose} disableRipple>
          
          Tecnologia
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          
          Arquitetura
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Engenharia
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Enfermagem
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

