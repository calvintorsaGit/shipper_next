import {combineReducers, configureStore} from '@reduxjs/toolkit';
import driverListReducer from './driverListReducer'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const rootReducer = combineReducers({
    driverList: driverListReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch