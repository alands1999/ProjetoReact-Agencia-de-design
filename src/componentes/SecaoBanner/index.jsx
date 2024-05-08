import estilo from "./style/banner.module.css";

export default function SecBanner (props) {

    return (
        <section className={estilo.container}>

            <div className={props.mode === "light-mode" ? estilo.container_div : estilo.container_div_dark }> </div>

            <div className={estilo.container_div_dir}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span className={estilo.texto}>e design digital</span>
            </div>
        </section>
    )
}