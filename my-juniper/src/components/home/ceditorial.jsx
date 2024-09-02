import React from "react";
import Button from '@mui/material/Button';
import Cedito from '../../assets/img/cedito.jpg'
import { styled } from '@mui/material/styles';
import { NoEncryption } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const StyledButton = styled(Button)(({ theme }) => ({
    // marginLeft: '10px',
    height: '48px',
    width: '180px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '22px',
    textTransform: 'none',
    backgroundColor: '#213E60',
    '&:hover': {
        backgroundColor: '#104E96',
        
  },
}));



export default function Ceditorial (){

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/corpoedito');
    };


    return (
        <>
        <div className="flex //bg-black justify-center">
            <div className="flex gap-5 justify-around items-center bg-transparent border-2 border-y-[#3F3F3F] border-l-[0] border-r-[0] w-[75%] max-w-7xl //h-[90%] h-[500px] max-h-screen">
                <div className=" flex gap-10 flex-col justify-center h-1 //w-[24rem]    w-[60%]">
                    <h1 className=" text-5xl font-robotoserif font-semibold  text-[#434343] w-[80%]">
                        Conheça nosso corpo editorial
                    </h1>

                    <p className="text-2xl font-worksans text-[#535353] w-[80%]">
                        Conheça a equipe por trás das palavras! Nosso corpo editorial é a engrenagem que impulsiona a qualidade e a precisão em cada texto.
                    </p>
                    <div className=" min-h-1">
                        <StyledButton variant="samais" onClick={handleButtonClick}>Saiba mais</StyledButton>
                    </div>
                </div>



                <div className="flex justify-end ">
                    <figure className="flex">
                        <img className=" w-50 max-w-2xl h-86 max-h-96" src={Cedito} />
                    </figure>
                </div>
            </div>
        </div>


        </>
    );
}