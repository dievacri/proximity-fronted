import {createActions} from 'redux-actions';
import {ADD_COMMENT, GET_COMMENTS, GET_COMMENTS_DONE} from "./constants";

export const {
    getComments,
    getCommentsDone,
    addComment,
} = createActions(...[
    GET_COMMENTS,
    GET_COMMENTS_DONE,
    ADD_COMMENT,
]);
