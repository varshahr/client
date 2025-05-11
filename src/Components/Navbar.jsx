import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ FIXED
import './Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="navbar">
      <h1><Link to="/" className="logo">Sangit 🎵</Link></h1>

      <input
        type="text"
        placeholder="Search songs, artists..."
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to ="/chordify">chordify</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
