import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import * as history from 'history';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import * as Constants from '../constants';

// declare let __DEVELOPMENT__: boolean;
const __DEVELOPMENT__: boolean = true;

export const configureStore = (browserHistory: any): any => {
    const sagaMiddleware = createSagaMiddleware();
    const syncRouterMiddleware = routerMiddleware(browserHistory);
    const appliedMiddleware: any = applyMiddleware(
        syncRouterMiddleware,
        sagaMiddleware,
    );
    const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const composeEnhancers = __DEVELOPMENT__ ? devTools(appliedMiddleware) : appliedMiddleware;
    const store = createStore(
        rootReducer,
        Constants.INITIAL_STATE,
        composeEnhancers,
    );
    sagaMiddleware.run(rootSaga);

    return store;
};
