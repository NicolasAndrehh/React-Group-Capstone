import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from '../Redux/Rockets/actions';
import Rocket from './rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        name={rocket.rocket_name}
        type={rocket.rocket_type}
        img={rocket.flickr_images[0]}
      />
    ))
  );
};

export default Rockets;
