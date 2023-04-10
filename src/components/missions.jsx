import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getMissions from '../Redux/Missions/missionsActions';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  console.log(missions);

  return (
    <h1>Missions</h1>
  );
};

export default Missions;
