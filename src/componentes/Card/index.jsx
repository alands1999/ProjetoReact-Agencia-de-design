import estilo from "./styleCard.module.css";

export default function Card (props) {
    return (
        <div className={props.mode === "light-mode" ? estilo.card : estilo.card_dark}>
            <div className={estilo.textos_top}>
            <p>{props.data}</p>
            <h2>{props.titulo}</h2>
            <p>{props.empresa}</p>
            </div>
            <p>{props.descript}</p>
        </div>
    )
}