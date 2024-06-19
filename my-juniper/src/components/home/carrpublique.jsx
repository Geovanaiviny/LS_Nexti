import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Imacarrpubli from '../../assets/img/imacarrpubli.jpg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Adjusted for 4 slides
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
    height: '56px',
    width: '160px',
    color: '#213E60',
    fontFamily: 'Poppins',
    fontWeight: '1000',
    fontSize: '23px',
    borderRadius: '7px',
    textTransform: 'none',
    border: '4px solid #E68C3A',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#C8C8C8',
    },
  }));

  return (
    <div className="container mx-auto my-10">
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
            <img className='h-[36rem] w-[400px]' src={slide.img} alt={`Carousel Slide ${index + 1}`} />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-10">
              <h2 className="text-white font-robotoserif text-5xl font-bold">{slide.title}</h2>
              <p className="text-white font-worksans text-[24px] font-medium max-w-[50%] whitespace-normal break-words">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="min-h-1 mt-6 ml-14">
            <StyledButton variant="samais">Saiba mais</StyledButton>
            </div>
    </div>
  );
};

export default CarouselComponent;
