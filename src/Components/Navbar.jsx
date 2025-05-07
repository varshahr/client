import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/" className="logo">Sangit 🎵</Link></h1>
      <input type="text" placeholder="Search songs, artists..." className="search-bar" />

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/chordify">chordify</Link></li>
        <li><Link to="/library">Library</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
