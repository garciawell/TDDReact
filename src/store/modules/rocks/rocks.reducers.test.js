import reducer, { INITIAL_STATE } from '~/store/modules/rocks/reducer';
import * as ActionsRock from '~/store/modules/rocks/actions';

describe('Techs reducer', () => {
  it('ADD_ROCK', () => {
    const state = reducer(INITIAL_STATE, ActionsRock.addRock('Node.js'));

    expect(state).toStrictEqual(['Node.js']);
  });
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
