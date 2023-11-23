import React from 'react';

const Tarefa = ({ animais, onEncontrado }) => {
  return (
    <div className="Tarefa">
      <h2>Lista de Animais</h2>
      <ul>
        {animais.map((animal, index) => (
          <li key={index} className="animalItem">
            <div className="imagem">
              {animal.image && <img src={animal.image} alt={`Foto de ${animal.name}`} />}
            </div>
            <div className="informacoes">
              <strong>Nome:</strong> {animal.name}, <strong>Raça:</strong> {animal.breed}, <strong>Local:</strong> {animal.location}
            </div>
            <div className="acoes">
              <button className="botaoConcluir" onClick={() => onEncontrado(index)}>Encontrado</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefa;


