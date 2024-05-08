import Card from "../Card"
import estilo from "./styleExp.module.css";

export default function SecExpTrab (props) {
    return (
        <section className={props.mode === "light-mode" ? estilo.container : estilo.container_dark}>

            <div className={props.mode === "light-mode" ? estilo.box_textos : estilo.box_textos_dark}>
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.</p>
          </div>

            <div className={estilo.box_cards}>
                <Card 
                data = "JUNHO 2012 - 2016" 
                titulo = "Web Designer"
                empresa = "Pied Piper StartUp."
                descript = "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                mode={props.mode}
                />
                <Card
                data = "AGOSTO 2016 - 2019" 
                titulo = "Product Designer"
                empresa = "E Corp."
                descript = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                mode={props.mode}
                
                />
                <Card
                data = "FEVEREIRO 2019 - 2021" 
                titulo = "Digital Consulting"
                empresa = "Arasaka Inc."
                descript = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                mode={props.mode}
                
                />
            </div>
        </section>
    )
}