import axios from 'axios';

const missionsApi = 'https://api.spacexdata.com/v3/missions';

// An empty array to the initial state
const initialMissions = [];

// Reducer: takes the current state and action as parameters. Returns new state based on action type
const missionsReducer = (state = initialMissions, action) => {
  switch (action.type) {
    case 'spaceApp/missions/GET_CURRENT_MISSIONS_SUCCESS':
      return [...state, action.missions];

    default:
      return state;
  }
};

export default missionsReducer;

// Action creator: returns an action object, and the missions data as payload
export const fetchMission = (missions) => ({
  type: 'spaceApp/missions/GET_CURRENT_MISSIONS_SUCCESS',
  missions,
});

// Async Thunk action creator: dispatches the fetchMisison action after fetching API data
export const getMissionsFromAPI = () => async (dispatch) => {
  const missions = await axios.get(missionsApi);
  const { data } = missions;
  dispatch(fetchMission(data));
};
