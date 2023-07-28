import "./App.css";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import React, { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        let data = await res.json();

      // Obtener los detalles de cada Pokémon y el atributo 'name'
      const pokemonDetails = await Promise.all(data.results.map(async (pokemon, i) => {
        let res = await fetch(pokemon.url);
        let pokemonData = await res.json();
        const types = pokemonData.types.map((type) => type.type.name);
        return { id: pokemonData.id, name: pokemon.name, type: types, image: pokemonData.sprites.other['official-artwork'].front_default };
      }));

      setPokemon(pokemonDetails);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchPokemon();
  }, []);

  console.log(pokemon);

  return (
    <div>
      <Header />
      <Pokemon data={pokemon} />
    </div>
  );
}

export default App;
