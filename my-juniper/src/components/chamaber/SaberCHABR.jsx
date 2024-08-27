    import React from "react";
    import { useNavigate } from 'react-router-dom';
    import Capaliv2 from '../../assets/img/capalivr2.svg';
    import Hlivros from '../../assets/img/hlivros.svg';
    import { styled } from '@mui/material/styles';
    import Button from '@mui/material/Button';
    import Setabranca from '../../assets/img_icon/setabranca.svg';
    import Programaestan from '../../assets/img/prograestante.jpg';


    // Estilização do botão
const StyledButton = styled(Button)(({ theme }) => ({
    height: '58px',
    width: '240px',
    color: '#FFFFFF',
    fontFamily: 'E17F26',
    fontWeight: '800',
    fontSize: '24px',
    borderRadius: '70px',
    textTransform: 'none',
    backgroundColor: '#E68C3A',
    '&:hover': {
        backgroundColor: '#E17F26',
    },
}));

export default function ChamAbert(){
    return(
        <>
            {/* Imagem header */}
            <div className="relative text-center">
                    <img className="w-full h-auto" src={Hlivros} alt="Imagem Comum" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-robotoserif font-semibold text-[#F4F2EF] absolute"
                        style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                        Estante
                    </h1>
                </div>
        </>
    );
}