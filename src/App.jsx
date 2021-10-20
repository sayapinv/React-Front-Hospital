import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Main from './components/Main';
import axios from 'axios';
import React, { useState } from 'react';



import { 
  Switch, 
  Route, 
  Redirect
} from 'react-router-dom';


const App = () => {

  const [ token, setToken ] = useState(false);

  const tokenVerification = async (token) => {
    
    await axios.post('http://localhost:8000/tokenverification',{

      token
  
    }).then(res => {
      if(res.data){

        setToken(true)
        

      }
    })

  }

  


  if( localStorage.token ){
    tokenVerification(localStorage.token);
  }
  


  

  

  return (
    
    <div className="sample">
 
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
        {token?<Route path="/main" component={Main}/>:<Route path="/main" component={Login}/>}
        <Redirect from="/" to="/login"/>
      </Switch>
    </div>

  );
}

export default App;
