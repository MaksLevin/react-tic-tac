import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducers';
import { rootWatcher } from './sagas';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const customSaga = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, customSaga);

sagaMiddleware.run(rootWatcher);

export default store;
