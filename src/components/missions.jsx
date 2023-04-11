/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionItem from './MissionItem';
import './missions.scss';
import getMissions from '../Redux/Missions/missionsActions';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
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
