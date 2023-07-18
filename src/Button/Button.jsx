import React from 'react';

export const ButtonApp = ({ text, click }) => {
  const botonStyles = {
    backgroundColor: '#bc9667', // Color de fondo azul
    color: '#fff', // Color del texto blanco
    padding: '10px 20px', // Ajustar el relleno según sea necesario
    borderRadius: '5px', // Agregar bordes redondeados
    // Puedes agregar más propiedades de estilo según tus necesidades
  };

  return (
    <button
      style={botonStyles}
      onClick={click}
      className=".btn-outline-info" // Agregamos la clase de Bootstrap que deseamos anular
    >
      {text}
    </button>
  );
};
