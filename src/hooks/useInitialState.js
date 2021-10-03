import { useState } from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import initialState from '../initialState';

// const API = 'http://localhost:1337/Products';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  // const [products, setProducts] = useState([]);

  // useEffect(async () => {
  //   const response = await axios(API);
  //   setProducts(response.data);
  // }, []);

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

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    state,
    // products,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
  };
};

export default useInitialState;
