import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

import './app.css';

function App() {
  return (
    <>
      <div className="app">
      <CharacterEditor />
      <Footer />
      </div>
      <div className="grayBackground"></div>
    </>
  );
}

export default App;
