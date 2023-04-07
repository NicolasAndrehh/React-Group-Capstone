import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header-info">
      <img src={logo} alt="Planet img" className="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>

    <nav className="navbar">
      <NavLink to="/profile">My profile</NavLink>
    </nav>
  </header>
);

export default Header;
