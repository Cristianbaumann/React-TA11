import React, { useState, useEffect } from 'react';
import './Temporizador.css';

const Temporizador = () => {
  const [contador, setContador] = useState(0);

  // useEffect para incrementar el contador automáticamente
  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente sea desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="timer-container">
      <h1 className="timer">{contador}</h1>
      <div>
        <button className="timer-button" onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
        <button className="timer-button reset" onClick={() => setContador(0)}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Temporizador
