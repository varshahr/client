import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Explore from './Components/Explore';
import Library from './Components/Library';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SearchResults from './Components/SearchResults';
import Chordify from './Components/Chordify';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/chordify" element={<Chordify/>}/>
      </Routes>
      
    </>
  );
}

export default App;
