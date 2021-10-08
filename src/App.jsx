import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Main from './components/Main';

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
        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
        <Route path="/main" component={Main}/>
        <Redirect from="/" to="/login"/>
      </Switch>
      <Link to="/main">to main</Link>
    </div>

  );
}

export default App;
