import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
