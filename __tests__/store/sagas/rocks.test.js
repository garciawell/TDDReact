import { runSaga } from 'redux-saga';
import { getRocks } from '~/store/modules/rocks/sagas';
import { getRocksSuccess } from '~/store/modules/rocks/actions';

describe('Rocks saga', () => {
  it('Should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getRocks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRocksSuccess(['Node.js']));
  });
});
