import React  from 'react';

import{Link }from "react-router-dom";
import'./Treinador.css';
import que from "../assets/que.webp"
import{motion}from "framer-motion";

function Treinador() {


return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
<div className= "container-background3"  >
    <div className= "treina">
    <h1>treinador</h1>
    <div className="container-treinador">
    <div className="treinador">
    <h3>H Romeu Pinto</h3>
    <h2 className="informacoes">Idade:25      nickname:Sedoe Eukuro</h2>
    <img src={que}  style={{ width: '180px' }} />
    <h3>
        quantidades de pokemons:1
        quantidades de bagdes:1
        pokebolas para acessar seu pokemons:1

    
    
    </h3>
    
   
    <Link to="/Pokebola">
    <button className="Pokebola"></button>
    </Link>
    <Link to="/Pokebola1">
    <button className="Pokebola1"></button>
    </Link> 
    <Link to="/Pokebola2">
    <button className="Pokebola2"></button>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </motion.div>
);
}


export default Treinador;
