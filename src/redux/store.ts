import { configureStore } from '@reduxjs/toolkit'
import mongoReducer from "./userSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger';
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, mongoReducer)

export const store = configureStore({
  //reducer: {mongo: mongoReducer},
  reducer: {
    mongo: persistedReducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        
      },
    }).concat(logger),
});
export let persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch