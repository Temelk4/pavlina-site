import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react';

import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';

//Film Components
import Redux from './components/projects/films/redux';
import Orphan from './components/projects/films/orphan';
import Gustela from './components/projects/films/gustela';
import Perfume from './components/projects/films/perfume';
import Pilgrimage from './components/projects/films/pilgrimage';
import Macedonia from './components/projects/films/macedonia';
import Gotse from './components/projects/films/gotse';
import Future from './components/projects/films/future';
import MagicSnowman from './components/projects/films/snowman';
import Hell from './components/projects/films/hell';
import Between from './components/projects/films/between';



function App() {

  const [mobile, setMobile] = useState(false)

  const showMobileMenu = () => {
      if (window.innerWidth <= 960) {
          setMobile(true)
      } else {
          setMobile(false)
      }
  }

  useEffect(() => {
      showMobileMenu()
      window.addEventListener('resize', showMobileMenu);
      // return window.removeEventListener('resize', showMobileMenu)     
  }, [])


  return (
    <div className="app-outer-div">
        <NavBar mobile={mobile} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pavlinaltd/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/the-magic-snowman" element={<MagicSnowman mobile={mobile} />} />
          <Route path="/happy-hell-night" element={<Hell mobile={mobile} />} />
          <Route path="/magic-snowman-redux" element={<Redux mobile={mobile} />} />
          <Route path="/my-heart-is-no-longer-an-orphan" element={<Orphan mobile={mobile}/>} />
          <Route path="/gustela-dances" element={<Gustela mobile={mobile}/>} />
          <Route path="/promise-of-perfume" element={<Perfume mobile={mobile}/>} />
          <Route path="/my-american-pilgrimage" element={<Pilgrimage mobile={mobile}/>} />
          <Route path="/colors-of-macedonia" element={<Macedonia mobile={mobile}/>} />
          <Route path="/gotse" element={<Gotse mobile={mobile}/>} />
          <Route path="/between-two-worlds" element={<Between mobile={mobile}/>} />
          <Route path="/in-development" element={<Future mobile={mobile}/>} />
        </Routes>
        <Footer mobile={mobile} />
    </div>
  );
}

export default App;
