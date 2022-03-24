export const GIFT_REQUEST = 'GIFT_REQUEST';
export const GIFT_SUCCESS = 'GIFT_SUCCESS';
export const GIFT_PROFILE_OPEN = 'GIFT_PROFILE_OPEN';
export const GIFT_PROFILE_CLOSE = 'GIFT_PROFILE_CLOSE';

export const doGiftRequest = function doGiftRequest(pageLimit, offset) {
  return { type: GIFT_REQUEST, payload: { pageLimit, offset } };
};

export const doGiftSuccess = function doGiftSuccess(gifts) {
  return { type: GIFT_SUCCESS, payload: gifts };
};

export const doGiftProfileOpen = function doGiftProfileOpen(giftId) {
  return { type: GIFT_PROFILE_OPEN, payload: giftId };
};

export const doGiftProfileClose = function doGiftProfileClose() {
  return { type: GIFT_PROFILE_CLOSE };
};