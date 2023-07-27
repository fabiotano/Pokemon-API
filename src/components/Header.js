import React from 'react';
import './header.css'

export default function Header() {
  return (
    <div>
        <div className='container'>
            <img className="pokemon-logo" src="./pokemon-logo.png" alt="POKEMON" />
        </div>
        <div className='container'>
            <input type="text" class="search" placeholder="Find Pokemons by name!" aria-label="Find Pokemons by name!" />   
        </div>
    </div>
  );
}
