import {Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Todolist from './Todolist';
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Todolist' element={<Todolist/>} />
        
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
