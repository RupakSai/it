import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Explore from './components/Explore.jsx'
import Team from './components/Team.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from 'react';
function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
