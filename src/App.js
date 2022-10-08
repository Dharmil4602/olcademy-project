import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
