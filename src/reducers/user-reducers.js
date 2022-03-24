import { USER_ADD_FAVORITE, USER_CHANGE_PAGE_LIMIT, USER_DELETE_FAVORITE } from '../actions/user-actions';

const USER_INITIAL_STATE = {
    favoritesById: {},
    pagination: { pageLimit: 6 }
}

const reduceUserAddFavorite = function reduceUserAddFavorite(userState, gift) {
    return { ...userState, favoritesById: {...userState.favoritesById, [gift.id]: gift} };
};

const reduceUserDeleteFavorite = function reduceUserDeleteFavorite(userState, giftId) {
    return { 
        ...userState, 
        favoritesById: Object.keys(userState.favoritesById).reduce((newState, key) => {
            if (key !== giftId) {
                newState[key] = userState.favoritesById[key]
            }
            return newState
        }, {})
    };
};

const reduceUserChangePageLimit = function reduceUserChangePageLimit(userState, pageLimit) {
    return { ...userState, pagination: { pageLimit } };
};

export default function reduceUser(userState = USER_INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_ADD_FAVORITE:
            return reduceUserAddFavorite(userState, payload);
        case USER_DELETE_FAVORITE:
            return reduceUserDeleteFavorite(userState, payload);
        case USER_CHANGE_PAGE_LIMIT:
            return reduceUserChangePageLimit(userState, payload);
        default:
            return userState;
    }
}