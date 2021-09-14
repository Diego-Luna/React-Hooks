import React, { useState, useEffect, useReducer, useMemo } from "react";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

function Characters() {
  const [characters, serCharacters] = useState([]);

  // vamos a incorporar nuestro reducer
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState("");

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

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <div className="Search">
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {/* {characters.map((character) => ( */}
      {filteredUsers.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar favoritos
          </button>
        </div>
      ))}
    </div>
  );
}

export default Characters;
