import React from "react";
import "./pokemon.css";

export default function Pokemon(props) {
  return (
    <div className="container-cards">

      {props.data.map((pokemon, i) => {

        return (
          <div className="pokemon-card" key={i}>
            
            <div className="card-text">
              <h2>#{pokemon.id}</h2>
              <h2>{pokemon.name.toUpperCase()}</h2>
              <div className="type">
              {pokemon.type.map((type, index) => (
                <p key={index}>{type}</p>
              ))}
              </div>

            </div>

            <div className="card-image">
            <img src={pokemon.image} alt={pokemon.name} />
            </div>
        </div>
             );

      })}
    </div>
  )
}
