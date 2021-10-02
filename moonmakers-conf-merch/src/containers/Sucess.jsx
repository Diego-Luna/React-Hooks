import React, { useContext } from 'react';
import AppContext from '../context/AppContex';
import Map from '../components/Map';
import '../styles/components/Success.css';

function Sucess() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Sucess;
