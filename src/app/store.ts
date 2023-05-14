import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import channelReducer from '../features/channelSlice';
import useReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: useReducer,
    channel: channelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
