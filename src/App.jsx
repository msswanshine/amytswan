import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/header';
import ProjectList from './components/project-list';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default hot(module)(App);
