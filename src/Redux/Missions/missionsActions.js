import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const axios = require('axios');

const URL = 'https://api.spacexdata.com/v3/missions';

const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export default getMissions;
