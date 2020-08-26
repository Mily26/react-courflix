import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/detail/:type/:serieId'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
