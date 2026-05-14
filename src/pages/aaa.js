import React, { useState, useEffect } from 'react';
import axios from 'axios';
import'./Pokemon.css';
import{motion}from "framer-motion";
import { Link } from 'react-router';
import useFetchPokeapi from '../hooks/useFetchPokeapi.js';


function Aaa(){
  const {pokemons,loading,error}=useFetchPokeapi();

  if (loading) return <div className="loader">Carregando Pokemons. . . ></div>;
  if (error) return <div className="error">ocorreu um erro inesperado></div>;
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className= "container-background"  >
    <header>
    <Link to="/" ><button className="voltar" ></button></Link>
    </header>
    <div className= "App">
    <h1>poke card</h1>
   
    <div className="container-carta">
    <div className="pokemon-card">
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
