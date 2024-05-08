import styles from "@/styles/Home.module.css";
import Topo from "@/componentes/Topo";
import SecBanner from "@/componentes/SecaoBanner";
import SecExpTrab from "@/componentes/SecaoExperienciaTrabalho";
import Rodape from "@/componentes/Rodape";
import { useState } from "react";

export default function Home() {

  const [modo, mudaModo] = useState("light-mode");

  const alternaModo = () => { modo === "light-mode" ? mudaModo("dark-mode") : mudaModo("light-mode")};



  return (
    <>
      <Topo funcao={alternaModo} mode={modo}/>
      <SecBanner mode={modo}/>
      <SecExpTrab mode={modo}/>
      <Rodape mode={modo}/>
    </>
  );
}
