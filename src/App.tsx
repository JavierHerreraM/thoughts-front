import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Canvas from './components/canvas/Canvas';
import Landing from './pages/landing/Landing';
import './setupStyles.scss';

function App() {
  return <>
    <Header />
    <Canvas>
      <Switch>
        {/* <Route path='/thoughts' component={Landing} /> */}
        <Route exact path='/' component={Landing} />
        {/* <Route path="*" component={Page404} /> */}
      </Switch>
    </Canvas>
  </>;
}

export default App;
