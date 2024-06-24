import React, { useState } from 'react';

const Ejercicio1 = () => {
  const [frutaSeleccionada, setFrutaSeleccionada] = useState('');

  const handleChange = (event) => {
    setFrutaSeleccionada(event.target.value);
  };

  return (
    <div>
      
      <select value={frutaSeleccionada} onChange={handleChange}>
        <option value="Manzana">Manzana</option>
        <option value="Pera">Pera</option>
        <option value="Naranja">Naranja</option>
        <option value="Mandarina">Mandarina</option>
      </select>

    
      {frutaSeleccionada && (
        <p>La fruta seleccionada actualmente es: {frutaSeleccionada}</p>
      )}
    </div>
  );
};

export default Ejercicio1;
