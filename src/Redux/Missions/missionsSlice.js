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
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const missionId = state.missions.findIndex((mission) => mission.mission_id === id);

      if (missionId !== -1) {
        const updatedMission = { ...state.missions[missionId], reserved: true };
        state.missions[missionId] = updatedMission;
      }
    },

    leaveMission: (state, action) => {
      const id = action.payload;
      const missionId = state.missions.findIndex((mission) => mission.mission_id === id);

      if (missionId !== -1) {
        const updatedMission = { ...state.missions[missionId], reserved: false };
        state.missions[missionId] = updatedMission;
      }
    },
  },
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

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
