import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissionsFromAPI } from '../Redux/missions';

const Missions = () => {
  useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsFromAPI());
  }, [dispatch]);

  return (
    <div />
  );
};

export default Missions;
