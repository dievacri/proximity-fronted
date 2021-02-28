import {combineEpics, ofType} from "redux-observable";
import {GET_POSTS} from "./constans";
import {catchError, map, switchMap} from "rxjs/operators";
import {PostApi} from "../../api/post-api";
import {getPostsDone} from "./actions";
import {of} from "rxjs";

const getPostEpic = action$ =>
    action$.pipe(
        ofType(GET_POSTS),
        switchMap(() => PostApi.getPosts().pipe(
            map(({response}) => getPostsDone(response)),
            catchError(err => of(getPostsDone(err))),
        ))
    );

export default combineEpics(getPostEpic);
