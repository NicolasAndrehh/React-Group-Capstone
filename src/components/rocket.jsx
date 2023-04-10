import PropTypes from 'prop-types';

const Rocket = ({ name, type, img }) => (
  <div>
    <img src={img} alt="" />
    <div>
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
