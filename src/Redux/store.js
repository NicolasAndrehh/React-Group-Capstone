import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './Missions/missionsSlice';
import rocketsSlice from './Rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionsSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
