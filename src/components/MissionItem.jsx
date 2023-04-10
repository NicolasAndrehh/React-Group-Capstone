import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { name, description } = props;
  return (
    <tr className="mission-item-tr">
      <th className="mission-item-bold">{name}</th>
      <th className="mission-item-description">{description}</th>
      <th><button type="button">NOT A MEMBER</button></th>
      <th><button type="button">Join Mission</button></th>
    </tr>
  );
};

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
