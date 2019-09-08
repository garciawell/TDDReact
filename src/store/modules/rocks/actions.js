export function addRock(rock) {
  return {
    type: 'ADD_ROCK',
    payload: { rock },
  };
}
