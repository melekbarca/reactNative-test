import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger'
import settingReducer from '../Reducers/settingReducer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import modalReducer from '../Reducers/modalReducer';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['auth', 'setting'],
};

const reducers = combineReducers({

  setting: settingReducer,
  modal: modalReducer
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }).concat(logger),
});
const persistor = persistStore(store)
export {
  store, persistor
}
