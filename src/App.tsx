import React from 'react';
import Header from './components/header/Header';
import Canvas from './components/canvas/Canvas';
import Landing from './pages/landing/Landing';
import './setupStyles.scss';

function App() {
  return <>
    <Header />
    <Canvas>
      <Landing />
    </Canvas>
  </>;
}

export default App;
