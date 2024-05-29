
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hestante from '../assets/img/hestante.jpg'
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: 360,
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: '#fff',
  backgroundImage: `url(${Hestante})`,
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

export default function Boxestante() {
  return (
    <StyledCard>
      <ContentWrapper>
        <CardContent>
          <StyledTypography sx={{ fontFamily: 'Roboto Serif', fontSize: 32, fontWeight: 700 }} color="inherit" gutterBottom>
            Conheça a nossa livraria
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

