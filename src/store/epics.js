import { combineEpics } from "redux-observable";
import postEpics from './post/epic';
import commentEpics from './comment/epic';

const rootEpic = combineEpics(postEpics, commentEpics);

export default rootEpic;
