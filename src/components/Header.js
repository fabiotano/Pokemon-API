import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="container">
        <img className="pokemon-logo" src="./pokemon-logo.png" alt="POKEMON" />
      </div>
      <div class="container">
        <input type="text" class="search" placeholder="Find Pokemons by name!"/>
        <div class="input-group-append">
          <button class="btn-search btn" type="button"> <font-awesome-icon class="icon" icon="search" /><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  );
}
