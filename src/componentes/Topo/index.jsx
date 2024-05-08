import estilo from "./styleTopo.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import Sun from "../../../public/assets/sun.png";
import Moon from "../../../public/assets/moon.png";

export default function Topo (props) {


    return (
        <header class={props.mode === "light-mode" ? estilo.topo : estilo.topo_Dark}>
                <Image src={Logo} alt="Logo" className={estilo.logo}/>
                <button onClick={props.funcao} className={estilo.botao}>
                <Image src={props.mode === "light-mode" ? Moon : Sun} alt="lua" className={props.mode === "light-mode" ? estilo.botao_light : estilo.botao_dark}/>
                </button>
        </header>
    )
}