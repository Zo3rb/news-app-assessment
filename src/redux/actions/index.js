// Declaring All Actions Here
import axios from 'axios';

import { SUCCESS, FETCH_ERROR, CLEAR_ERROR, FETCH_ONE_ONLY, CLEAR_NEWS_ITEM } from './types';

export const fetchNews = () => async dispatch => {
    const API_URL = 'https://my-json-server.typicode.com/Zo3rb/news-fake-api/articles?_sort=publishedAt&_order=desc';
    try {
        const response = await axios.get(API_URL);
        dispatch({
            type: SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_ERROR,
            payload: { message: error.message }
        });

        setTimeout(() => {
            dispatch({ type: CLEAR_ERROR });
        }, 3000);
    };
};

export const fetchOneOnly = id => async dispatch => {
    const API_URL = `https://my-json-server.typicode.com/Zo3rb/news-fake-api/articles/${id}`;
    try {
        const response = await axios.get(API_URL);
        dispatch({
            type: FETCH_ONE_ONLY,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_ERROR,
            payload: { message: error.message }
        });

        setTimeout(() => {
            dispatch({ type: CLEAR_ERROR });
        }, 10000);
    };
};

export const clearNewsItem = () => async dispatch => {
    await dispatch({
        type: CLEAR_NEWS_ITEM
    });
    return;
};
