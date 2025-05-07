import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Explore from './Components/Explore';
import Library from './Components/Library';
import Navbar from './Components/Navbar';
import Chordify from './Components/Chordify';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/chordify" element={<Chordify />} />
      </Routes>
    </>
  );
}

export default App;
