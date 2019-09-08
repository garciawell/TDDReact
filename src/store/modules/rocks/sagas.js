import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { getRocksSuccess, getRocksFailure } from './actions';

export function* getRocks() {
  try {
    const response = yield call(api.get, 'rocks');
    yield put(getRocksSuccess(response.data));
  } catch (err) {
    yield put(getRocksFailure());
  }
}
