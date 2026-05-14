
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function useFetchPokeapi() {
    const [pokemons,setPokemons] = useState ({});
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (false);
    
    useEffect (() => {
      const getData = async () => {
        try {
          const res = await 
          axios.get('https://Pokeapi.co/api/v2/pokemon/rowlet');
          setPokemons(res.data);
          console.log('Success:', res.data);
          setLoading(false); 
    
        }
        catch (err) {
          console.error("Erro ao carregar API", err);
          
          setLoading(false)
    
          setError(true)
        }
      };
      getData(),[pokemons]}
  
    );
return{pokemons,loading,error}}

export default useFetchPokeapi;