import createSagaMiddleware from 'redux-saga';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
   };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, composeEnhancers(applyMiddleware(sagaMiddleware)),);
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);