import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Imacarrpubli from '../../assets/img/imacarrpubli.jpg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Ajustado para 4 slides
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      img: Imacarrpubli,
      title: "Publique seu livro conosco",
      description: "Faça parte de uma comunidade apaixonada pela palavra escrita. Nossa equipe editorial está pronta para elevar seu trabalho a novos horizontes."
    },
    {
      img: Imacarrpubli,
      title: "Slide 2 Title",
      description: "Slide 2 Description goes here."
    },
    {
      img: Imacarrpubli,
      title: "Slide 3 Title",
      description: "Slide 3 Description goes here."
    },
    {
      img: Imacarrpubli,
      title: "Slide 4 Title",
      description: "Slide 4 Description goes here."
    }
  ];

  const StyledButton = styled(Button)(({ theme }) => ({
    height: '62px',
    width: '220px',
    color: '#213E60',
    fontFamily: 'Poppins',
    fontWeight: '1000',
    fontSize: '26px',
    borderRadius: '7px',
    textTransform: 'none',
    border: '4px solid #E68C3A',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#C8C8C8',
    },
  }));

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/chamaabert');
  };

  return (
    <div className="container mx-auto py-10 flex flex-col items-center">
      <div className="w-[90%]">
        <Carousel
          selectedItem={currentIndex}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop
          autoPlay={false}
        >
          {slides.map((slide, index) => (
            <div className="relative" key={index}>
              <img className="h-[36rem] w-full object-cover" src={slide.img} alt={`Carousel Slide ${index + 1}`} />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-10">
                <h2 className="text-white font-robotoserif text-5xl font-bold text-left">{slide.title}</h2>
                <p className="text-white font-worksans text-[24px] font-medium text-left max-w-[50%] sm:max-w-full">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="min-h-1 mt-14 flex justify-start w-[90%]">
        <StyledButton variant="samais" onClick={handleButtonClick}>Saiba mais</StyledButton>
      </div>
    </div>
  );
};

export default CarouselComponent;
