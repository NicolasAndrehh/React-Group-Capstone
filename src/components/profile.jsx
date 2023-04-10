import { useSelector } from 'react-redux';
import './profile.scss';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <section className="profile-section">
      <div className="missions-side">
        <h2>My Missions</h2>
        <div className="missions" />
      </div>
      <div className="rockets-side">
        <h2>My Rockets</h2>
        <div className="rockets">
          {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <p key={rocket.id}>{rocket.rocket_name}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
