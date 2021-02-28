import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
    epicMiddleware.run(rootEpic);

    return store;
}
