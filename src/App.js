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

        setPokemon(data.results);
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
