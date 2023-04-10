import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from '../Redux/Rockets/actions';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  console.log(rockets);

  return (
    <h1>Rockets OwO</h1>
  );
};

export default Rockets;
