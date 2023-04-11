import { useSelector } from 'react-redux';
import './profile.scss';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  return (
    <section className="profile-section">
      <div className="side missions-side">
        <h2>My Missions</h2>
        {missions.some((mission) => mission.reserved === true) ? (
          <div className="my-profile-table missions">
            {missions.filter((mission) => mission.reserved === true).map((mission) => (
              <p key={mission.mission_id}>{mission.mission_name}</p>
            ))}
          </div>
        ) : (
          <p>No missions Joined</p>
        )}
      </div>
      <div className="side rockets-side">
        <h2>My Rockets</h2>
        {rockets.some((rocket) => rocket.reserved === true) ? (
          <div className="my-profile-table rockets">
            {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
              <p key={rocket.id}>{rocket.rocket_name}</p>
            ))}
          </div>
        ) : (
          <p>No rockets reserved yet.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;
