import React, { useState, useEffect } from "react";
import Mediestante from '../../assets/img/mediestante.jpg';
import Biomestante from '../../assets/img/biomestante.jpg';
import Roboestante from '../../assets/img/roboestante.jpg';
import Prograestante from '../../assets/img/prograestante.jpg';

const images = [
  { src: Mediestante, alt: 'Image 1'},
  { src: Biomestante, alt: 'Image 2'},
  { src: Roboestante, alt: 'Image 3'},
  { src: Prograestante, alt: 'Image 4'},
  { src: Mediestante, alt: 'Image 5'},
  { src: Biomestante, alt: 'Image 6'},
  { src: Roboestante, alt: 'Image 7'},
  { src: Prograestante, alt: 'Image 8'},
  { src: Mediestante, alt: 'Image 9'},
  { src: Biomestante, alt: 'Image 10'},
  { src: Roboestante, alt: 'Image 11'},
  { src: Prograestante, alt: 'Image 12'},
  { src: Mediestante, alt: 'Image 13'},
  { src: Biomestante, alt: 'Image 14'},
  { src: Roboestante, alt: 'Image 15'},
  { src: Prograestante, alt: 'Image 16'},
  { src: Mediestante, alt: 'Image 17'},
  { src: Biomestante, alt: 'Image 18'},
  { src: Roboestante, alt: 'Image 19'},
  { src: Prograestante, alt: 'Image 20'}
];

const getStyleByAlt = (alt) => {
  switch (alt) {
      case 'Image 1':
          return {
              imageStyle: { height: '230px', width: '190px', marginLeft: '16px', marginTop: '6px', borderRadius: '2px' },
              boxStyle: { backgroundColor: '#F4F2EF', border: '1px solid #C0C0C0', borderRadius: '4px', padding: '4px', height: '324px', width: '220px', boxShadow: '3px 3px 10px -3px rgba(0, 0, 0, 0.25)', marginTop: '-8px' },
              textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '14px 0 0 10px ' },
              text: "Identificando os tipos de ossos presen...",
          };

      case 'Image 2':
          return {
              imageStyle: { height: '230px', width: '190px', marginLeft: '16px', marginTop: '6px', borderRadius: '2px' },
              boxStyle: { backgroundColor: '#F4F2EF', border: '1px solid #C0C0C0', borderRadius: '4px', padding: '4px', height: '324px', width: '220px', boxShadow: '3px 3px 10px -3px rgba(0, 0, 0, 0.25)', marginTop: '-8px' },
              textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '14px 0 0 10px ' },
              text: "Fundamentos da Biomedicina...",
          };

      case 'Image 3':
          return {
              imageStyle: { height: '230px', width: '190px', marginLeft: '16px', marginTop: '6px', borderRadius: '2px' },
              boxStyle: { backgroundColor: '#F4F2EF', border: '1px solid #C0C0C0', borderRadius: '4px', padding: '4px', height: '324px', width: '220px', boxShadow: '3px 3px 10px -3px rgba(0, 0, 0, 0.25)', marginTop: '-8px' },
              textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '14px 0 0 10px ' },
              text: "Aspectos da engenharia robótica...",
          };

      case 'Image 4':
          return {
              imageStyle: { height: '230px', width: '190px', marginLeft: '16px', marginTop: '6px', borderRadius: '2px' },
              boxStyle: { backgroundColor: '#F4F2EF', border: '1px solid #C0C0C0', borderRadius: '4px', padding: '4px', height: '324px', width: '220px', boxShadow: '3px 3px 10px -3px rgba(0, 0, 0, 0.25)', marginTop: '-8px' },
              textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '14px 0 0 10px ' },
              text: "Linguagens de programação...",
          };

      default: 
          return {
              imageStyle: { height: '230px', width: '190px', marginLeft: '16px', marginTop: '6px', borderRadius: '2px' },
              boxStyle: { backgroundColor: '#F4F2EF', border: '1px solid #C0C0C0', borderRadius: '4px', padding: '4px', height: '324px', width: '220px', boxShadow: '3px 3px 10px -3px rgba(0, 0, 0, 0.25)', marginTop: '-8px' },
              textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '14px 0 0 10px ' },
              text: "Identificando os tipos de ossos presen...",
          };
  }
};


export default function Carrosel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Ajustado para 5 slides
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectImage = (index) => {
    setCurrentIndex(index);
  };

  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  return (
    <>
      <div>
        <h1 className="text-[#434343] font-robotoserif text-6xl font-semibold text-center mb-10">
          Livraria
        </h1>
      </div>
      
      <div className="flex flex-col items-center min-h-screen w-full">
        <div className="relative border-[4px] border-[#E68C3A] bg-[40px] py-10 px-2 //p-10 w-[70%] //w-[1100px] rounded-lg shadow-xl max-w-7xl overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out w-[1160px]"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="flex w-full flex-none gap-8">
                {slide.map((image, idx) => {
                  const { imageStyle, boxStyle, textStyle, text } = getStyleByAlt(image.alt);
                  return (
                    <div key={idx} className="flex-1 p-4" style={{ ...boxStyle, marginLeft: '18px' }}>
                      <img src={image.src} alt={image.alt} style={imageStyle} className="flex justify-start w-full h-[320px] rounded-lg" />
                      <p style={textStyle}>{text}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 space-x-4">
            {slides.map((_, index) => (
              <input
                key={index}
                type="radio"
                id={`radio${index}`}

              name="image"
              checked={currentIndex === index}
              onChange={() => handleSelectImage(index)}
              className="hidden peer"
            />
          ))}
          {slides.map((_, index) => (
            <label
              key={index}
              htmlFor={`radio${index}`}
              className={`cursor-pointer w-4 h-4 rounded-full transition-colors duration-300 
              ${currentIndex === index ? 'bg-[#213E60]' : 'bg-transparent border-2 border-[#213E60]'}
              peer-checked: bg-[#213E60]`}
            />
          ))}
        </div>
      </div>

      <button className="mt-14 px-10 font-poppins py-4 bg-[#213E60] text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Veja mais
      </button>
    </div>

    </>
  );
}

