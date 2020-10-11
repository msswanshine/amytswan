import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/header';
import Slider from './components/slider/slider';
import Footer from './components/footer';
import projects from './data/project-data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider
        projects={projects}
      />
      <Footer />
    </div>
  );
}

export default hot(module)(App);
