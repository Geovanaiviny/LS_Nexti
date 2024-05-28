import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Mediestante from '../../assets/img/mediestante.jpg'
import Biomestante from '../../assets/img/biomestante.jpg'
import Roboestante from '../../assets/img/roboestante.jpg'
import Prograestante from '../../assets/img/prograestante.jpg'
import { styled } from '@mui/material/styles';
import { useState } from "react";


 

export default function Carrosel(){
    const [imageSrc, setImageSrc] = useState({Mediestante});
  
    return (
      <div>
        <img id="img-change" src={imageSrc} alt="Product" />
        <div>
          <input
            type="radio"
            id="radio1"
            name="image"
            onClick={() => setImageSrc({Mediestante})}
          />
          <label htmlFor="radio1">Image 1</label>
  
          <input
            type="radio"
            id="radio2"
            name="image"
            onClick={() => setImageSrc({Biomestante})}
          />
          <label htmlFor="radio2">Image 2</label>
  
          <input
            type="radio"
            id="radio3"
            name="image"
            onClick={() => setImageSrc({Roboestante})}
          />
          <label htmlFor="radio3">Image 3</label>
  
          <input
            type="radio"
            id="radio4"
            name="image"
            onClick={() => setImageSrc({Prograestante})}
          />
          <label htmlFor="radio4">Image 4</label>
        </div>
      </div>
    );
};




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