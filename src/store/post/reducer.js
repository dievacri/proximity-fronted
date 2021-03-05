import { handleActions } from 'redux-actions';
import {postInitialState} from "./state";
import {GET_POSTS, GET_POSTS_DONE} from "./constans";
/**
 * Post Reducer - manage the state of a post
 * */
const postReducer = handleActions({
    [GET_POSTS]: state => ({
        ...state,
    }),
    [GET_POSTS_DONE]: {
        next: (state, { payload }) => ({
            ...state,
            list: payload,
        }),
        throw: (state, { payload }) => ({
            ...state,
            error: payload,
        }),
    }
}, postInitialState);

export default postReducer;
