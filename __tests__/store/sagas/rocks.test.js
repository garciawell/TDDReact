import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { getRocks } from '~/store/modules/rocks/sagas';
import {
  getRocksSuccess,
  getRocksFailure,
} from '~/store/modules/rocks/actions';

const apiMock = new MockAdapter(api);

describe('Rocks saga', () => {
  it('Should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('rocks').reply(200, ['Node.js']);

    await runSaga({ dispatch }, getRocks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRocksSuccess(['Node.js']));
  });

  it('Should be fail when api return error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('rocks').reply(500);

    await runSaga({ dispatch }, getRocks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRocksFailure());
  });
});
