import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Projects } from './components/Project';
import { Footer } from './components/Footer';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Projects />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
