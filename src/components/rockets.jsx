import { useSelector } from 'react-redux';
import Rocket from './rocket';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);

  return (
    <section className="rockets-section">

      {isLoading && <h1>Loading...</h1>}

      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          img={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}

    </section>
  );
};

export default Rockets;
