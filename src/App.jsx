import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';

import { useState } from 'react';

import { 
  Switch, 
  Route, 
  Redirect,
  Link
} from 'react-router-dom';


const App = () => {





  return (
    
    <div className="sample">

      <Switch>
        <Route path="/login">
          <Login/>
          <Link to="/registration">to Registration</Link>
        </Route>
        <Route path="/registration">
          <Registration/>
          <Link to="/login">to Login</Link>
        </Route>
        <Redirect from="/" to="/login"/>
      </Switch>

    </div>

  );
}

export default App;
