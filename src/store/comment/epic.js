import {combineEpics, ofType} from "redux-observable";
import {GET_COMMENTS} from "./constants";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {PostApi} from "../../api/post-api";
import {getCommentsDone} from "./actions";
import {of} from "rxjs";

const getCommentsEpic = action$ =>
    action$.pipe(
        ofType(GET_COMMENTS),
        exhaustMap(({ payload }) => PostApi.getComments(payload).pipe(
            map(({ response }) => getCommentsDone(response)),
            catchError(err => of(getCommentsDone(err))),
        ))
    );

export default combineEpics(getCommentsEpic);
