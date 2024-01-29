//import logo from './logo.svg';
//import './App.css';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Skills from './routes/Skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
