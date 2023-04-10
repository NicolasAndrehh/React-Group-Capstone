import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions';
import rocketsSlice from './Rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionsReducer,
});


const store = configureStore({ reducer: rootReducer });

export default store;
