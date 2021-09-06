import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, serCharacters] = useState([]);

  // le pasamos dos valores,
  // - El primer valor una funcion, adonde estara la logica
  // - Una variable que va estar escuchando si tiene un cambio
  useEffect(
    () => {
      fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((data) => serCharacters(data.results));
    },
    // al poner le el array basio, solo lo hace una ves, en el render
    []
  );

  return (
    <div className="Characters">
      {characters.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
}

export default Characters;
