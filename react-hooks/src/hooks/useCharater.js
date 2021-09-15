import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, serCharacters] = useState([]);

  // le pasamos dos valores,
  // - El primer valor una funcion, adonde estara la logica
  // - Una variable que va estar escuchando si tiene un cambio
  useEffect(
    () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => serCharacters(data.results));
    },
    // al poner le el array basio, solo lo hace una ves, en el render
    [url]
  );

  return characters;
};

export default useCharacters;
