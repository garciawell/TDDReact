import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function Techlist() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const techsStorage = localStorage.getItem('techs');

    if (techsStorage) {
      setTechs(JSON.parse(techsStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  function handleAddTech() {
    setTechs([...techs, 'Node.js']);
    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">
        Tech
        <input
          id="tech"
          type="text"
          value={newTech}
          onChange={e => setNewTech(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </form>
  );
}
