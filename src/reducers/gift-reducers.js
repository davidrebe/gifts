import { GIFT_PROFILE_CLOSE, GIFT_PROFILE_OPEN, GIFT_REQUEST, GIFT_SUCCESS } from '../actions/gift-actions';

const GIFT_INITIAL_STATE = {
    gifts: {
        loading: false,
        giftById: {},
        pagination: {}
    },
    profile : {
        giftId: undefined,
        isOpen: false
    }
}

const reduceGiftRequest = function reduceGiftRequest(giftsState) {
    return { ...giftsState, gifts: { ...giftsState.gifts, loading: true } };
};

const reduceGiftSuccess = function reduceGiftSuccess(giftsState, { pagination, data }) {
    return { 
        ...giftsState, 
        gifts: { 
            ...giftsState.gifts, 
            loading: false, 
            pagination,
            giftById: data.reduce((result, gift) => {
                return { ...result, [gift.id]: gift};
            }, {})
        } 
    };
};

const reduceGiftProfileOpen = function reduceGiftProfileOpen(giftsState, giftId) {
    return { ...giftsState, profile: { ...giftsState.profile, isOpen: true, giftId } };
};

const reduceGiftProfileClose = function reduceGiftProfileClose(giftsState) {
    return { ...giftsState, profile: { ...giftsState.profile, isOpen: false, giftId: undefined } };
};

export default function reduceGift(giftsState = GIFT_INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GIFT_REQUEST:
            return reduceGiftRequest(giftsState);
        case GIFT_SUCCESS:
            return reduceGiftSuccess(giftsState, payload);
        case GIFT_PROFILE_OPEN:
            return reduceGiftProfileOpen(giftsState, payload);
        case GIFT_PROFILE_CLOSE:
            return reduceGiftProfileClose(giftsState);
        default:
            return giftsState;
    }
}