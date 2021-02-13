import { combineReducers } from 'redux';

// Since We Have Only Simple Reducer For The Whole App => Will Build it As Root Reducer
import { SUCCESS, FETCH_ERROR, CLEAR_ERROR, FETCH_ONE_ONLY, CLEAR_NEWS_ITEM } from '../actions/types';
const initialState = {
    error: {},
    data: [],
    newsItem: {}
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return state = { ...state, data: [...action.payload] };
        case FETCH_ONE_ONLY:
            return state = { ...state, newsItem: { ...action.payload } };
        case CLEAR_NEWS_ITEM:
            return state = { ...state, newsItem: {} };
        case FETCH_ERROR:
            return state = { ...state, error: { ...action.payload } };
        case CLEAR_ERROR:
            return state = { ...state, error: {} };
        default:
            return state;
    };
};

// Exporting The RootReducer
export default combineReducers({
    news: newsReducer
});
