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
import Hpublin from '../../assets/img/hpublin.jpg';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  maxWidth:320,
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: '#fff',
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
  [theme.breakpoints.up('sm')]: { // Telas pequenas e maiores
    width: '80%',
    maxWidth: '320px',
  },
  [theme.breakpoints.up('md')]: { // Tablets e telas maiores
    width: '320px',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginLeft: '10px',
    height: '40px',
    width: '120px',
    color: '#FFFFFF',
    borderColor: '#E68C3A',
    border: '3px solid #E68C3A',
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#757575',
        borderColor: '#c06f24',
  },

}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    
    flexWrap: ' wrap',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
}));

export default function BasicCard() {
  return (
    <StyledCard>
      <ContentWrapper>
        <CardContent>
          <StyledTypography sx={{ fontFamily: 'Roboto Serif', fontSize: 32, fontWeight: 700 }} color="inherit" gutterBottom>
            Publique seu artigo conosco
          </StyledTypography>
        </CardContent>
        <CardActions>
          <StyledButton size="small" sx={{ fontFamily: 'Work Sans', fontSize: 14 }}>
            Saiba mais
          </StyledButton>
        </CardActions>
      </ContentWrapper>
    </StyledCard>
  );
}

