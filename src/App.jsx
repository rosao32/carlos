// App.jsx
import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import Filtrar from './components/Filtrar';
import Tarefa from './components/Tarefa';
import './App.css';

const App = () => {
  const [animais, setAnimais] = useState([]);

  const handleCadastro = (novoAnimal) => {
    setAnimais([...animais, novoAnimal]);
  };

  const handleEncontrado = (index) => {
    // Implemente a lógica de remoção do animal encontrado
    const novosAnimais = [...animais];
    novosAnimais.splice(index, 1);
    setAnimais(novosAnimais);
  };

  return (
    <div className="App">
      <div className="centralizar">
        <h1>Cadastro de Animais Perdidos</h1>
        <Cadastro onCadastro={handleCadastro} />
      </div>
      <Filtrar animais={animais} setAnimais={setAnimais} />
      <Tarefa animais={animais} onEncontrado={handleEncontrado} />
    </div>
  );
};

export default App;



