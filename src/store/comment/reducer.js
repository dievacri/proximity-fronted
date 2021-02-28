import {handleActions} from "redux-actions";
import {commentInitialState} from "./state";
import {ADD_COMMENT, GET_COMMENTS, GET_COMMENTS_DONE} from "./constants";

const commentReducer = handleActions({
    [GET_COMMENTS]: state => ({
        ...state,
    }),
    [GET_COMMENTS_DONE]: {
        next: (state, { payload }) => ({
            ...state,
            list: payload,
        }),
        throw: (state, { payload }) => ({
            ...state,
            error: payload,
        }),
    },
    [ADD_COMMENT]: (state, { payload }) => ({
       ...state,
       list: [...state.list, ...[payload]],
    }),
}, commentInitialState);

export default commentReducer;
