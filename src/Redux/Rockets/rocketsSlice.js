/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getRockets from './actions';

const initialState = {
  rockets: [],
  isLoading: false,
  errorMessage: '',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const rocketIndex = state.rockets.findIndex((rocket) => rocket.id === id);

      if (rocketIndex !== -1) {
        const updatedRocket = {
          ...state.rockets[rocketIndex],
          reserved: true,
        };
        state.rockets[rocketIndex] = updatedRocket;
      }
    },
  },
  extraReducers: (builder) => {
    builder

    // Get rockets
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })

      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
