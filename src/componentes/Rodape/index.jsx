import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import facebook from "../../../public/assets/facebook.png";
import twitter from "../../../public/assets/twitter.png";
import linkedin from "../../../public/assets/linkedin.png";
import dribble from "../../../public/assets/dribble.png";
import behance from "../../../public/assets/behance.png";
import google from "../../../public/assets/google-plus.png";  

import estilo from "./styleRodape.module.css";

export default function Rodape (props) {
    return (
        <footer className={props.mode === "light-mode" ? estilo.container : estilo.container_dark}>
            <Image src={Logo} alt="Logo" className={estilo.logo}/>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p>
        <div className={estilo.box_img}>
            <Image src={facebook} alt="Facebook" className={estilo.icon}/>
            <Image src={twitter} alt="Twitter" className={estilo.icon}/>
            <Image src={linkedin} alt="Linkedin" className={estilo.icon}/>
            <Image src={dribble} alt="Dribble" className={estilo.icon}/>
            <Image src={behance} alt="Behance" className={estilo.icon}/>
            <Image src={google} alt="Google" className={estilo.icon}/>
        </div>
        <div className={estilo.end}>
        <p>Copyright 2022 ©<span>Alan Dias</span></p>
        </div>
        </footer>
    )
}