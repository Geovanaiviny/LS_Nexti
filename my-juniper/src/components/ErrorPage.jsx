import { useRouteError } from "react-router-dom";
// import styles from "../assets/css/ErrorPage.module.css";
import Error from '../assets/img/error.svg'


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className={ styles.root}>
        {/* <img src="./airplane-crash.svg" /> */}
        <img src={Error} alt="" />
        <h1 className=" text-6xl font-robotoserif font-semibold text-[#434343]   ">Ops!</h1>
        <p className=" text-[20px] font-medium font-worksans text-[#535353] ">Desculpe, ocorreu um erro inesperado.</p>
      </div>
    );
  }