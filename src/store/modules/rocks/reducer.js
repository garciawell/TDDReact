import produce from 'immer';

export const INITIAL_STATE = [];

export default function rocks(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_ROCK':
        draft.push(action.payload.rock);
        break;
      default:
        return state;
    }
  });
}
