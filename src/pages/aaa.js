import React, { useState, useEffect } from 'react';
import axios from 'axios';
import'./Pokemon.css';
import{motion}from "framer-motion";
import { Link } from 'react-router';
import useFetchPokeapi from '../hooks/useFetchPokeapi.js';
import { useParams } from "react-router-dom";


function Aaa(){
  const { id } = useParams();
  const {pokemons,loading,error}=useFetchPokeapi(id);

  if (loading) return <div className="loader">Carregando Pokemons. . . ></div>;
  if (error) return <div className="error">ocorreu um erro inesperado></div>;
  const pokemonType = pokemons.types[0].type.name;
  const backgroundClass = 
    pokemonType === "fire" ? "container-background2"
  : pokemonType === "dragon" ? "container-background4" 
  : pokemonType === "electric" ? "container-background5"   
  : "container-background";
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className= {backgroundClass}  >
    <header>
    <Link to="/" ><button className="voltar" ></button></Link>
    </header>
    <div className= "App">
    <h1>poke card</h1>
   
    <div className="container-carta">
    <div className={`pokemon-card ${
      pokemonType === "fire"  ? "pokemon-card2" 
    : pokemonType === "dragon" ? "pokemon-card3"
    : pokemonType === "electric" ? "pokemon-card4"
    :"" }`}>
    <h3>{pokemons.name}</h3>
    <h2 className='tipo-pokemon1'>{pokemons.types[0].type.name}</h2>
    <img src={pokemons.sprites.front_default} alt={pokemons.name} style={{ width: '180px' }} />
    <h3>{pokemons.stats[0].stat.name + ' ' + 

    pokemons.stats[0].base_stat + ' ' + pokemons.stats[1].stat.name + ' ' + 
    
    pokemons.stats[1].base_stat }</h3>
    </div>
    </div>
    
    </div>
    </div>
    </motion.div>
  );
  }


export default Aaa;
