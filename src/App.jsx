import './App.css';
import minilogo from './image/minilogo.svg'
import logo from './image/logo.svg'

function App() {
  return (

    <div className="main">
      <div className="head">
        <div className="minilogo">
          <img src={minilogo} alt="nologo" />
        </div>
        <div className="headname">
          <p>Войти в систему</p>
        </div>
      </div>
      <div className="menu">

        <img className="logo" src={logo} alt="nologo" />


        <div className="registration">


          <div className="headreg">
            <p>Войти в систему</p>
          </div>
          <div className="log">
            <p>Login:</p>
            <input type="text" />
          </div>
          <div className="pass">
            <p>Password:</p>
            < input type="password" />
          </div>
          <div className="foot">
            <button>Войти</button>
            <p>Зарегистрироваться</p>
          </div>


        </div>
      </div>
    </div>

  );
}

export default App;
