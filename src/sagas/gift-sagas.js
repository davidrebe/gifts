import { call, put, takeLatest } from 'redux-saga/effects';
import { doGiftSuccess, GIFT_REQUEST } from '../actions/gift-actions';
import { getGifts } from '../gateways/gift-gateway';

function* fetchGifts(action) {
   try {
      const gifts = yield call(getGifts, action.payload);
      yield put(doGiftSuccess(gifts));
   } catch (e) {}
}

function* giftSaga() {
  yield takeLatest(GIFT_REQUEST, fetchGifts);
}

export default giftSaga;