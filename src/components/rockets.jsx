import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from '../Redux/Rockets/actions';
import Rocket from './rocket';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <section className="rockets-section">

      {isLoading && <h1>Loading...</h1>}

      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          type={rocket.rocket_type}
          img={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}

    </section>
  );
};

export default Rockets;
