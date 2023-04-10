/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getMissions from './missionsActions';

const initialState = {
  missions: [],
  isLoading: false,
  errorMessage: '',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })

      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default missionsSlice.reducer;
