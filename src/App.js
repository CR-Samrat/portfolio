import "./App.css";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contacts'
import { useState } from "react";

function App() {
  const[mode, setMode] = useState(false)
  //false -> light mode && true-> dark mode
  const[isHome, setIsHome] = useState(true)
  return (
    <main className={mode ? "bg-black-500":"bg-slate-300/40"}>
      <Router>
        <Navbar mode = {mode} setMode={setMode} isHome={isHome}/>
        <Routes>
          <Route path="/" element={<Home setIsHome={setIsHome}/>}/>
          <Route path="/about" element={<About mode={mode} setIsHome={setIsHome}/>}/>
          <Route path="/projects" element={<Projects mode={mode} setIsHome={setIsHome}/>}/>
          <Route path="/contact" element={<Contact mode={mode} setIsHome={setIsHome}/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
