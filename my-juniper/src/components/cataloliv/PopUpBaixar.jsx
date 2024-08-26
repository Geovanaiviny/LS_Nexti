import React from "react";
import Logoprincipal from '../../assets/img/logo_se.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import DownlIcon from '../../assets/img_icon/downl_icon.svg';
import BookIcon from '../../assets/img_icon/book_icon.svg';

const StyledButton = styled(Button)(({ theme }) => ({
    height: '58px',
    width: '200px',
    color: '#FFFFFF',
    fontFamily: 'E17F26',
    fontWeight: '800',
    fontSize: '22px',
    borderRadius: '10px',
    textTransform: 'none',
    backgroundColor: '#E68C3A',
    '&:hover': {
        backgroundColor: '#E17F26',
    },
}));


export default function PopUpBaixar() {
    return (
        <>
            <div className="bg-transparent top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 fixed z-50 w-[90vw]">
                <div className="bg-transparent flex flex-col justify-center items-center  py-10 relative">
                    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center w-[80%] //h-[60%] p-14 shadow-lg rounded-[20px] gap-6">
                        <div className=" flex flex-col justify-center items-center //bg-slate-500 w-[100%] //h-[20%] gap-8">
                            <img className=" //bg-black w-[25%] " src={Logoprincipal} alt="Logo" />
                            <p className=" font-robotoserif text-[#1f1f1f] text-4xl font-semibold mb-6" >
                                Escolha um abaixo para acessar o e-book
                            </p>

                            <div className="flex justify-center //items-center //py-10 gap-10 ">

                                    {/* Button baixar */}
                                <StyledButton variant="contained" >
                                    <img className="mr-4 w-[20%]" src={DownlIcon} alt="DownlIcon" />
                                        Download
                                </StyledButton>

                                    {/* Button Ler online */}
                                <StyledButton variant="contained" >
                                    <img className="mr-4 w-[20%]" src={BookIcon} alt="DownlIcon" />
                                        Ler online
                                </StyledButton>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
