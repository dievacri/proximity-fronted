import { createActions } from 'redux-actions';
import {GET_POSTS, GET_POSTS_DONE} from "./constans";

export const {
    getPosts,
    getPostsDone,
} = createActions(...[
    GET_POSTS,
    GET_POSTS_DONE
]);
