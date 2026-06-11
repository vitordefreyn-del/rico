
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function useFetchPokeapi(pokemon) {
    const [pokemons,setPokemons] = useState ({});
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (false);
    const [specie, setSpecie] = useState ({});
    const [evolution, setEvolution] = useState({});
    const [myPokemons, setmypokemon] = useState({});
    const [myType, setmyType] = useState({});
    useEffect (() => {
      const getData = async () => {
        try {
          const res = await 
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,{},)
          setPokemons(res.data);
          console.log('Success:', res.data);
          setLoading(false); 
          
    
        }
        catch (err) {
          console.error("Erro ao carregar API", err);
          setLoading(false);
          setError(true);
        }
      };
      getData();
    },[pokemon]);

    useEffect (() => {

    //  if (!pokemons?.species?.url) return;

      const getSpecies = async () => {
        try {
          const res = await 
          axios.get(pokemons.species.url, {});
          setSpecie(res.data);
          console.log("Success:", res.data);
         
        }
        catch (err) {
          console.error("Erro ao carregar API", err);
          
        }
      };
      getSpecies();
    },[pokemons]);
    
    useEffect (() => {
   //   if(!specie?.evolution_chain?.url)
     // return;
      const getEvolutions = async () => {
        try {
          const res = await axios.get(specie.evolution_chain.url, {});
          setEvolution(res.data);
          console.log("Success:", res.data);
         
    
        }
        catch (err) {
          console.error("Erro ao carregar API", err);
         
        }
      };
      getEvolutions();
    },[specie]);

    useEffect(() => {

      
      const setPoke = async () => {
        try{

        
      setmypokemon({

        nome:pokemons.name,
        vida:pokemons.stats[0].base_stat,
        ataque:pokemons.stats[1].base_stat,
        tipo:myType,
        evolucao:[evolution.chain.evolves_to[0].species.name],
        imagem: pokemons.sprites.front_default,
     
      
      });
        } catch (err) {
          console.error(err);
        }
      };
      setPoke();

    }, [evolution, pokemons]);

    useEffect(() => {
      const getmytype = async () => {
        try{
          if(pokemons.types[0].type.name == "normal" || pokemons.types[0].type.name == "fighting"){
            setmyType('corpo');
          } else if (pokemon.types[0].type.name == "psychic" || pokemons.types[0].type.name == "fairy"){
            setmyType('mente');
          } else if (pokemon.types[0].type.name == "ghost" || pokemons.types[0].type.name == "dark"){
            setmyType('sombra');
          } else if (pokemon.types[0].type.name == "grass" || pokemons.types[0].type.name == "bug"){
            setmyType('natureza');
          } else if (pokemon.types[0].type.name == "rock" || pokemons.types[0].type.name == "stell"){
            setmyType('terra');
          } else if (pokemon.types[0].type.name == "ice" || pokemons.types[0].type.name == "water"){
            setmyType('agua');
          } else if (pokemon.types[0].type.name == "fire"){
            setmyType('fire');
          }else if (pokemon.types[0].type.name == "flying" || pokemons.types[0].type.name == "electric"){
            setmyType('tempestade');
            
        }} catch (err) {
          console.error(err);
        }
      
    
      };
    
      getmytype();
    }, [pokemons]);

    return { myPokemons, loading, error };
}
    export default useFetchPokeapi;