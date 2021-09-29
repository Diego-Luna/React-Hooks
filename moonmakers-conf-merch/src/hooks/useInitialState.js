import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state, // le pasamos el estado
      cart: [...state.cart, payload],
      // le pasamos lo que tenga en el cart
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state, // le pasamos el estado
      cart: state.cart.filter((items) => items.id !== payload),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
