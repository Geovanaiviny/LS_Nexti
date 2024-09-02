import React from "react";
import Hcomum from "../assets/img/hcomum.png"


export default function Codigetica(){
    return(
        <>

        
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <img className="w-screen" src={Hcomum} alt="Imagem Comum" style={{ width: '100%', height: 'auto' }} />
                <h1 className="text-6xl font-robotoserif font-semibold text-[#F4F2EF] textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)"
                    style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                    Quem somos nós
                </h1>
            </div>

        
        
        
        </>



    );
}
