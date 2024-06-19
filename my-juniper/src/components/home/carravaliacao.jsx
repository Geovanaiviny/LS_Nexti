import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar1 from "../../assets/img/avatar1.png";
import Avatar2 from "../../assets/img/avatar2.png";
import Avatar3 from "../../assets/img/avatar3.png";

const testimonialStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'transparent',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '40px',
  },
  carouselContainer: {
    position: 'relative',
    width: '90%',
    height: '64%',
    maxWidth: '1000px',
    overflow: 'hidden',
    backgroundColor: '#F4F2EF', // Added background color
    borderColor: '#E68C3A',
    border: '4px solid #E68C3A',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  carousel: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  card: {
    flex: '0 0 30%',
    margin: '0 10px',
    marginBottom: '10px',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatar: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginRight: '15px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333',
  },
  role: {
    fontSize: '14px',
    color: '#666666',
  },
  quote: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#333333',
    margin: '20px 0',
  },
  stars: {
    display: 'flex',
  },
  star: {
    color: '#FFD700',
    marginRight: '9px',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#CCCCCC',
    margin: '0 5px',
    cursor: 'pointer',
  },
  activeDot: {
    backgroundColor: '#213E60',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#213E60',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#1A2E50',
  }
};

const testimonials = [
  {
    name: 'Haruka Nayua',
    role: 'Engenheira de Software',
    quote: 'A equipe editorial não apenas poliu meu trabalho, mas também o elevou a novos patamares de excelência!',
    avatar: Avatar3,
    rating: 5,
  },
  {
    name: 'Vinícius Cardoso',
    role: 'Analista de Sistemas',
    quote: 'Em pouco tempo com a editora, descobri muito apoio e expertise. Cada interação foi como uma aula mestra em refinamento editorial!',
    avatar: Avatar1,
    rating: 5,
  },
  {
    name: 'Mateus Matoá',
    role: 'Cirurgião Cardiovascular',
    quote: 'Minha breve passagem pela editora foi como uma chama que acendeu minha paixão pela escrita. Profissionalismo e cuidado em cada palavra.',
    avatar: Avatar2,
    rating: 5,
  }
];

const StyledButton = styled(Button)(({ theme }) => ({
  height: '56px',
  width: '300px',
  color: '#FFFFFF',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '21px',
  borderRadius: '7px',
  textTransform: 'none',
  backgroundColor: '#213E60',
  '&:hover': {
    backgroundColor: '#104E96',
  },
}));

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectDot = (index) => {
    setCurrentIndex(index);
  };

  const slides = Array(3).fill(testimonials);

  return (
    <>
      <div className="bg-black" style={testimonialStyle.container}>
        <h1 className="" style={testimonialStyle.header}>Nossas avaliações</h1>
        <div style={testimonialStyle.carouselContainer}>
          <div
            style={{
              ...testimonialStyle.carousel,
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} style={{ display: 'flex', width: `${100 / slides.length}%`, justifyContent: 'space-between' }}>
                {slide.map((testimonial, idx) => (
                  <div key={idx} style={testimonialStyle.card}>
                    <div style={testimonialStyle.cardHeader}>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        style={testimonialStyle.avatar}
                      />
                      <div>
                        <div style={testimonialStyle.name}>{testimonial.name}</div>
                        <div style={testimonialStyle.role}>{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="p-8" style={testimonialStyle.quote}>"{testimonial.quote}"</div>
                    <div style={testimonialStyle.stars}>
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} style={testimonialStyle.star}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={testimonialStyle.dotsContainer}>
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleSelectDot(index)}
                style={{
                  ...testimonialStyle.dot,
                  ...(currentIndex === index && testimonialStyle.activeDot),
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-[400px] justify-between mt-6">
          <div className="min-h-1 mt-6">
            <StyledButton variant="samais">Envie seu depoimento</StyledButton>
          </div>

          <div className="min-h-1 mt-6">
            <StyledButton variant="samais">Confira outros depoimentos</StyledButton>
          </div>
        </div>
      </div>
    </>
  );
}
