import React, { useContext } from 'react';
import AppContext from '../context/AppContex';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAdress';
import '../styles/components/Success.css';

function Sucess() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  console.log(buyer);

  const location = useGoogleAddress(
    `${buyer[0].address} ${buyer[0].city} ${buyer[0].state} ${buyer[0].country} `
  );

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          {location.lat ? <Map data={location} /> : ''}
        </div>
      </div>
    </div>
  );
}

export default Sucess;
