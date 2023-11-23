import React, { useState } from 'react';

const Cadastro = ({ onCadastro }) => {
  const [animal, setAnimal] = useState({
    name: '',
    breed: '',
    location: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({ ...prevAnimal, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastro(animal);
    setAnimal({
      name: '',
      breed: '',
      location: '',
      image: '',
    });
  };

  return (
    <div className="Cadastro">
      <h2>Cadastre um Animal Perdido</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={animal.name} onChange={handleChange} />
        </label>
        <label>
          Raça:
          <input type="text" name="breed" value={animal.breed} onChange={handleChange} />
        </label>
        <label>
          Local:
          <input type="text" name="location" value={animal.location} onChange={handleChange} />
        </label>
        <label>
          Foto (URL):
          <input type="text" name="image" value={animal.image} onChange={handleChange} />
        </label>
        <button type="submit" id="botaocadastrar">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;






