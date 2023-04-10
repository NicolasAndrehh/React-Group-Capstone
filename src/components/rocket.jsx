import PropTypes from 'prop-types';
import './rocket.scss';

const Rocket = ({ name, type, img }) => (
  <div className="rocket-card">
    <img src={img} alt="" />
    <div className="rocket-info">
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
