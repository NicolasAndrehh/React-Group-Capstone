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

export default rocketsSlice.reducer;
