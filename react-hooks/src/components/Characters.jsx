import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharater";

const API = "https://rickandmortyapi.com/api/character/";

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
  // vamos a incorporar nuestro reducer
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState("");

  const searchInput = useRef(null);

  const characters = useCharacters(API);

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
