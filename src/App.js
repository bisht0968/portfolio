import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { useState, useEffect } from 'react';
import Skills from './components/Skills/Skills';

function App() {

  const [getInTouchBackGroundColor, setGetInTouchBackGroundColor] = useState(false);

  useEffect(() => {
    const homeBackgorundColor = document.getElementById('app');
    if (getInTouchBackGroundColor) {
      homeBackgorundColor.classList.add("blackBackgroundColor");
    } else {
      homeBackgorundColor.classList.remove("blackBackgroundColor");
    }
  }, [getInTouchBackGroundColor]);

  return (
    <>
      <div id='app' className="appSection">
        <Routes>
          <Route path='/' element={<Home setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />} />
          <Route path='/projects' element={<Projects setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />} />
          <Route path='/about' element={<About setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />} />
          <Route path='/skills' element={<Skills setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
