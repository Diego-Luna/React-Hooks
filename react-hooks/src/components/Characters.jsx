import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";

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

  const searchInput = useRef(null);

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

  // const handleSearch = () => {
  //   // setSearch(event.target.value);
  //   // la mejor forma de manegar formularios en react es: useRef
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(
    () => {
      setSearch(searchInput.current.value);
    },
    // le pasamos la referencia al elemento que va a escuchar
    []
  );

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

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

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
