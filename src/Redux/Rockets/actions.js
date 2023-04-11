import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const transformData = (data) => {
  const transformedData = [];

  data.forEach((obj) => {
    const newObj = {
      id: obj.id,
      rocket_name: obj.rocket_name,
      description: obj.description,
      flickr_images: obj.flickr_images[0],
      reserved: false,
    };

    transformedData.push(newObj);
  });

  return transformedData;
};

const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const response = await axios.get(URL);
    const data = transformData(response.data);
    return data;
  } catch (error) {
    return error;
  }
});

export default getRockets;
