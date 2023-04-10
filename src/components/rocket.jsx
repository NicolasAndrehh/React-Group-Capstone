import PropTypes from 'prop-types';
import './rocket.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../Redux/Rockets/rocketsSlice';

const Rocket = ({
  id, name, type, img,
}) => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
    console.log(rockets);
  };

  return (
    <div className="rocket-card">
      <img src={img} alt="" />
      <div className="rocket-info">
        <h3>{name}</h3>
        <p>{type}</p>
        <button type="button" onClick={() => handleReserveRocket()}>Reserve rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
