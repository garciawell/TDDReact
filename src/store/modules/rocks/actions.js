export function addRock(rock) {
  return {
    type: 'ADD_ROCK',
    payload: { rock },
  };
}

export function getRocksSuccess(data) {
  return {
    type: 'GET_ROCKS_SUCCESS',
    payload: { data },
  };
}

export function getRocksFailure() {
  return {
    type: 'GET_ROCKS_FAILURE',
  };
}
