
import React from 'react';
import ElementoLista from './ElementoLista';

const Ejercicio3 = () => {
  return (
    <div>
      <h2>Elementos de la lista:</h2>
      <ul>
        <ElementoLista mensaje="Informática Aplicada II" />
        <ElementoLista mensaje="Programación II" />
        <ElementoLista mensaje="Robótica" />
        <ElementoLista mensaje="Matemática" />
        <ElementoLista mensaje="Física" />
      </ul>
    </div>
  );
};

export default Ejercicio3;
