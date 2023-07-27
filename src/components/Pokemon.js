import React from "react";

export default function Pokemon(props) {
  return (
    <div>
      {props.data.map((pokemon, i) => {
        return (
          <div>
            <h2>{pokemon.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
