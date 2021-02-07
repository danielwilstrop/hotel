import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Room from './Pages/Room'
import Error from './Pages/Error'
import SingleRoom from './Pages/SingleRoom'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
  <>
    <NavBar />
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/room/' component = {Room} />
        <Route exact path = '/room/:slug' component = {SingleRoom} />
        <Route component = {Error} />
      </Switch>    
  </>
  );
}
 
export default App;
