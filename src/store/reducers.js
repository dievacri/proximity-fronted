import { combineReducers } from "redux";
import postReducer from "./post/reducer";
import commentReducer from "./comment/reducer";

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
});

export default rootReducer;
