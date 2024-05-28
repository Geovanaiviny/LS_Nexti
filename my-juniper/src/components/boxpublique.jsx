// import React from "react";
// import Hpublin from '../assets/img/hpublin.jpg'

// export default function Boxpublique(){
//     return(
//         <>
            
//             <div className="flex">
//                 <figure className="">
//                     <img className="w-[28rem] h-[25rem] rounded-md shadow-[0px_1px_4px_1px_rgba(0,0,0,0.3)] shadow-[#8d8d8d]" src={Hpublin} alt="" />
//                 </figure>
//                 <div>
//                     <h2 className="font-robotoserif text-4xl font-semibold text-[#FFFFFF] ">
//                         <span>Publique seu artigo</span>
//                     </h2>
//                 </div>
//             </div>

//         </>
//     )
// }


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hpublin from '../assets/img/hpublin.jpg';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  minWidth: 310,
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: '#fff',
  fontFamily: 'sans-serif',
  backgroundImage: `url(${Hpublin})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(2),
}));


const StyledButton = styled(Button)(({ theme }) => ({
    height: '36px',
    backgroundColor: 'transparent',
    borderColor: '#E68C3A',
    border: '2px solid #E68C3A',
    color: '#fff', 
    '&:hover': {

      backgroundColor: '#717171',
      borderColor: '#E68C3A'
    },
  }));

export default function BasicCard() {
  return (
    <StyledCard>
      <ContentWrapper>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="inherit" gutterBottom>
            Publique seu artigo conosco
          </Typography>
        </CardContent>
        <CardActions>
          <StyledButton size="small" variant="contained" color="primary">
            Saiba mais
          </StyledButton>
        </CardActions>
      </ContentWrapper>
    </StyledCard>
  );
}

