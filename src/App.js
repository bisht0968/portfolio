import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"

function App() {

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  </style>

  document.body.style = 'font-family: "Roboto", sans-serif;'

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
