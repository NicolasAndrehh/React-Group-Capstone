import PropTypes from 'prop-types';
import './rocket.scss';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../Redux/Rockets/rocketsSlice';

const Rocket = ({
  id, name, description, img, reserved = false,
}) => {
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="rocket-card">
      <img src={img} alt="" />
      <div className="rocket-info">
        <h3>{name}</h3>
        <p>
          {reserved && <span className="reserved-badge">Reserved</span>}
          {description}
        </p>
        {
          reserved
            ? <button type="button" className="button cancel-button" onClick={() => dispatch(cancelReservation(id))}>Cancel reservation</button>
            : <button type="button" className="button" onClick={() => handleReserveRocket()}>Reserve rocket</button>
        }
      </div>
    </div>
  );
};

Rocket.defaultProps = {
  reserved: false,
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Rocket;
