import { configureStore } from '@reduxjs/toolkit';
import Promise from 'redux-promise-middleware';
import loggerMiddleware from './logger';
import rootReducer from './reducers';
import monitorReducersEnhancer from './monitor';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, Promise],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  })

  return store;
}