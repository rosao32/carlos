import React, { useState } from 'react';

const Filtrar = ({ animais, setAnimais }) => {
  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const filtrarAnimais = () => {
    const animaisFiltrados = animais.filter((animal) =>
      animal.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setAnimais(animaisFiltrados);
  };

  const limparFiltro = () => {
    setFiltro('');
    setAnimais([]);
  };

  return (
    <div className="Filtrar">
      <h2>Filtrar Animais</h2>
      <div className="filtrarForm">
        <input
          type="text"
          placeholder="Digite o nome do animal"
          value={filtro}
          onChange={handleFiltroChange}
        />
        <button className="botaoFiltrar" onClick={filtrarAnimais}>
          Filtrar
        </button>
        <button className="botaoLimpar" onClick={limparFiltro}>
          Limpar Filtro
        </button>
      </div>
    </div>
  );
};

export default Filtrar;
