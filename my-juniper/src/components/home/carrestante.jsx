import React, { useState, useEffect } from "react";
import Mediestante from '../../assets/img/mediestante.jpg';
import Biomestante from '../../assets/img/biomestante.jpg';
import Roboestante from '../../assets/img/roboestante.jpg';
import Prograestante from '../../assets/img/prograestante.jpg';
import { Height } from "@mui/icons-material";
import { borderRadius, fontFamily, fontWeight, height, padding, width } from "@mui/system";

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
            return{
                imageStyle: { height: '230px', width: '190px', marginLeft: '4px', marginTop: '6px', borderRadius: '2px'},
                boxStyle: { backgroundColor:'#F4F2EF', border: ' 2px solid #C0C0C0',  borderRadius: '4px', padding: '9px', height:'324px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', marginTop: '-8px'},
                textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '4px 0 0 10px '},
                text: "Identificando os tipos de ossos presen...",
            };

        case 'Image 2':
            return{
                imageStyle: { height: '230px', width: '190px', marginLeft: '4px', marginTop: '6px', borderRadius: '2px'},
                boxStyle: { backgroundColor:'#F4F2EF', border: ' 2px solid #C0C0C0', borderRadius: '4px', padding: '9px', height:'324px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', marginTop: '-8px'},
                textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '4px 0 0 10px '},
                text: "Fundamentos da Biomedicina...",
    
            };

        case 'Image 3':
            return{
                imageStyle: { height: '230px', width: '190px', marginLeft: '4px', marginTop: '6px', borderRadius: '2px'},
                boxStyle: { backgroundColor:'#F4F2EF', border: ' 2px solid #C0C0C0', borderRadius: '4px', padding: '9px', height:'324px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', marginTop: '-8px'},
                textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '4px 0 0 10px '},
                text: "Aspectos da engenharia robótica...",
    
            };

        case 'Image 4':
            return{
                imageStyle: { height: '230px', width: '190px', marginLeft: '4px', marginTop: '6px', borderRadius: '2px'},
                boxStyle: { backgroundColor:'#F4F2EF', border: ' 2px solid #C0C0C0', borderRadius: '4px', padding: '9px', height:'324px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', marginTop: '-8px'},
                textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '4px 0 0 10px '},
                text: "Linguagens de programação...",
        
            };

        case 'Image 5':
            return{
                imageStyle: { height: '230px', width: '190px', marginLeft: '4px', marginTop: '6px', borderRadius: '2px'},
                boxStyle: { backgroundColor:'#F4F2EF', border: ' 2px solid #C0C0C0', borderRadius: '4px', padding: '9px', height:'324px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', marginTop: '-8px'},
                textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '4px 0 0 10px '},
                text: "Identificando os tipos de ossos presen...",
            
            };

        default: 
        return{
            imageStyle: { height: '230px', width: '190px', marginLeft: '4px', marginTop: '6px', borderRadius: '2px'},
            boxStyle: { backgroundColor:'#F4F2EF', border: ' 2px solid #C0C0C0', borderRadius: '4px', padding: '9px', height:'324px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', marginTop: '-8px'},
            textStyle: { fontFamily: 'Work Sans', fontWeight: 500, color: '#5E5E5E', padding: '4px 0 0 10px '},
            text: "Identificando os tipos de ossos presen...",
        }
    }

}

export default function Carrosel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {    //É + 1
      setCurrentIndex((prevIndex) => (prevIndex + 9) % 5); // 5 slides
    }, 6000000); //tem três zeros a menos
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
    <div className="flex flex-col items-center min-h-screen //bg-gray-100">
      <div className="relative border-[4px] border-[#E68C3A] bg-[40px] p-10 rounded-lg shadow-xl w-full max-w-5xl overflow-hidden">
        <div className="flex transition-transform duration-1000 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex w-full flex-none space-x-[10px]">
              {slide.map((image, idx) => {
                const { imageStyle, boxStyle, textStyle, text} = getStyleByAlt(image.alt);
                return (
                <div key={idx} className="flex-1 p-4" style={{ ...boxStyle, marginLeft: '28px' }}>
                  <img src={image.src} alt={image.alt} style={imageStyle} className=" flex justify-start w-full h-[320px] rounded-lg" />
                  <p style={textStyle}>{text}</p>
                </div>
                );
            })}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          {slides.map((_, index) => (
            <input
              key={index}
              type="radio"
              id={`radio${index}`}
              name="image"
              checked={currentIndex === index}
              onChange={() => handleSelectImage(index)}
              className="hidden"
            />
          ))}
          {slides.map((_, index) => (
            <label
              key={index}
              htmlFor={`radio${index}`}
              className={`cursor-pointer w-4 h-4 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Veja mais
      </button>
    </div>
  );
}





// export default function CarouselWithContent() {
//   return (
//     <Carousel className="rounded-xl h-[500px]">
//       <div className="relative h-full w-full">
//         <img
//           src={Mediestante}
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex justify-center gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* slide 2 */}
//       <div className="relative h-full w-full">
//         <img
//           src={Biomestante}
//           alt="image 2"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
//           <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slide 3 */}
//       <div className="relative h-full w-full">
//         <img
//           src={Roboestante}
//           alt="image 3"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
//           <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Carousel>
//   );
// }

// export default function CarouselDefault() {
//     return (
//       <Carousel className="rounded-xl">
//         <img
//           src={Mediestante}
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <img
//           src={Biomestante}
//           alt="image 2"
//           className="h-full w-full object-cover"
//         />
//         <img
//           src={Roboestante}
//           alt="image 3"
//           className="h-full w-full object-cover"
//         />
//       </Carousel>
//     );
//   }