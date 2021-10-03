import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContex';

import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product.id);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Lista de pedidos - MoonMakers Conf Merch</title>
      </Helmet>

      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lusta de Pedidos</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}

          {cart.map((item) => (
            <div key={item.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>

              <button onClick={handleRemove(item)} type="button">
                <i className="fas fa-trash-alt" title="Eliminar" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="Checkout-sidebar">
            <h3>Precio Total: ${handleSumTotal()} </h3>
            <Link to="/checkout/informatio">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Checkout;
