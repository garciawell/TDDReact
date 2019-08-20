import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Techlist() {
  const [newTech, setNewTech] = useState('');

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  function handleAddTech() {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } });
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
