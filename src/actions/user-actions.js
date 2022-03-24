export const USER_CHANGE_PAGE_LIMIT = 'USER_CHANGE_PAGE_LIMIT';
export const USER_ADD_FAVORITE = 'USER_ADD_FAVORITE';
export const USER_DELETE_FAVORITE = 'USER_DELETE_FAVORITE';

export const doUserChangePageLimit = function doUserChangePageLimit(newLimit) {
  return { type: USER_CHANGE_PAGE_LIMIT, payload: newLimit };
};

export const doUserAddFavorite = function doUserAddFavorite(giftId) {
  return { type: USER_ADD_FAVORITE, payload: giftId };
};

export const doUserDeleteFavorite = function doUserDeleteFavorite(giftId) {
  return { type: USER_DELETE_FAVORITE, payload: giftId };
};
