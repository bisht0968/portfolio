import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
