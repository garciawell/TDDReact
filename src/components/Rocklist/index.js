import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Rocklist() {
  const [newRock, setNewRock] = useState('');
  const dispatch = useDispatch();
  const rocks = useSelector(state => state.rocks);

  function handleAddRock() {
    dispatch({ type: 'ADD_ROCK', payload: { rock: newRock } });
    setNewRock('');
  }

  return (
    <form data-testid="rock-form" onSubmit={handleAddRock}>
      <ul data-testid="rock-list">
        {rocks.map(rock => (
          <li key={rock}>{rock}</li>
        ))}
      </ul>

      <label htmlFor="rock">
        Rock
        <input
          id="rock"
          type="text"
          value={newRock}
          onChange={e => setNewRock(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddRock}>
        Adicionar
      </button>
    </form>
  );
}
