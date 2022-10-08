import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
       <Route exact path='/' element={ <Home/>}></Route>
       <Route path='/login' element={ <Login/>}></Route>
       <Route path='/signup' element={ <Signup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
