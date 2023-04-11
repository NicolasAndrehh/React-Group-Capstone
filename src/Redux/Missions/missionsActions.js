import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useSelector } from 'react-redux';

const URL = 'https://api.spacexdata.com/v3/missions';

const transformData = (data) => {
  const transformedData = [];

  data.forEach((obj) => {
    const newObj = {
      mission_id: obj.mission_id,
      mission_name: obj.mission_name,
      description: obj.description,
      reserved: false,
    };

    transformedData.push(newObj);
  });

  return transformedData;
};

const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get(URL);
    const data = transformData(response.data);
    return data;
  } catch (error) {
    return error;
  }
});

export default getMissions;
