import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About'
import Articles from './pages/Articles/Articles';
import Tutorials from './pages/Tutorials/Tutorials';
import Projects from './pages/Projects/Projects';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Articles' element={<Articles/>}></Route>
        <Route path='/Tutorials' element={<Tutorials/>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
