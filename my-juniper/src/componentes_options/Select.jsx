import React from 'react';
import Setad from '../assets/img_icon/setad.png'



const Select = () => {
    return(
        <div className="w-72 font-medium h-80">
            <div className="bg-white w-full p-2 flex items-center justify-center rounded text-black">
                Área de conhecimento
                <img className="" src={Setad}/>
            </div>
        </div>
    );

}


export default Select;