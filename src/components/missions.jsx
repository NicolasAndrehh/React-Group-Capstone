/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getMissions from '../Redux/Missions/missionsActions';
import MissionItem from './MissionItem';
import './missions.scss';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <>
      <div className="mission-container">
        <hr />
        <table className="mission-table">
          <tr className="mission-tr">
            <th className="mission-bold">Missions</th>
            <th className="mission-bold">Description</th>
            <th className="mission-bold">Status</th>
            <th>{' '}</th>
          </tr>
          {missions.map((mission) => (
            <MissionItem
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
              key={mission.mission_id}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default Missions;
