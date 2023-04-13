
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Top from './Top';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './nav';



function App() {
  return (
    <div className="App">


      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/top-10' element={<Top />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
