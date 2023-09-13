import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducers';
import fetchUserAvatarWatcher from './login/saga/users-login.saga';
import { StoreData } from '../models/store-model';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(fetchUserAvatarWatcher);

export default store;
