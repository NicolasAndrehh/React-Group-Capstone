import PropTypes from 'prop-types';
import './missions.scss';
import { useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Missions/missionsSlice';

const MissionItem = (props) => {
  const {
    id, name, description, reserved = false,
  } = props;
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    console.log('dispatched with id: ');
    console.log(id);
    dispatch(joinMission(id));
  };

  return (
    <tr className="mission-item-tr">
      <th className="mission-item-bold">{name}</th>
      <th className="mission-item-description">{description}</th>
      <th><button type="button">NOT A MEMBER</button></th>
      <th>
        {
          reserved
            ? <button type="button">Leave Mission</button>
            : <button type="button" onClick={() => handleJoinMission()}>Join Mission</button>
        }
      </th>
    </tr>
  );
};

MissionItem.defaultProps = {
  reserved: false,
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default MissionItem;
