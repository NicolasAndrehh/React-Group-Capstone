import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsSlice from './Missions/missionsSlice';
import rocketsSlice from './Rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
