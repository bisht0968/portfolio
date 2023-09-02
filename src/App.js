import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import ProjectArchive from './components/ProjectArchive/ProjectArchive';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<ProjectArchive />} />
      </Routes>
    </>
  );
}

export default App;
