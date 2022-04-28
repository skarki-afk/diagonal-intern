import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex justify-center mx-5">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
