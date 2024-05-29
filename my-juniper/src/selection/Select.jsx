import React, { useEffect } from "react";
import Setad from '../assets/img_icon/setad.png'


useEffect( ()=>{
    fetch("https://canaltech.com.br/")
    .then(res=> res.json())
    .then((data) => {
        console.log(data);
    })
},[])
const Select = () => {
    return(
        <>
        <div className="w-72 font-medium h-80">
            <div className="bg-[#FFFCFC] border border-[#C0C0C0] rounded-md flex items-center h-11 w-[280px] px-4 justify-between  text-[#757575]">
                Área de conhecimento
                <figure> <img className="h-5" src={Setad} alt="" /></figure>
            </div>
            <ul className="bg-[#c11e1e] mt-2">
                 <li className="p-2 text-sm hover:bg-sky-600 hover:text-white ">Tecnologia</li>
                 <li className="p-2 text-sm hover:bg-sky-600 hover:text-white ">Tecnologia</li>
             </ul>
        </div>
        </>
    );

}


// export default Select;

// function Select (){
//     return(
//         <>
//         <div className="w-72 font-medium h-80">
//             <div className=" bg-[#FFFCFC] border border-[#C0C0C0] rounded-md flex items-center h-11 w-[280px] px-4 justify-between  text-[#757575]">
//                 Área de conhecimento
//                 <figure> <img className="h-5" src={Setad} alt="" /></figure>
//             </div>
//             <ul className="b">
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//                 <li>Tecnologia</li>
//             </ul>
//         </div>
//         </>
//     );
// }

export default Select