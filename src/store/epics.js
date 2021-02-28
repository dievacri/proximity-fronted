import { combineEpics } from "redux-observable";
import postEpics from './post/epic';

const rootEpic = combineEpics(postEpics);

export default rootEpic;
