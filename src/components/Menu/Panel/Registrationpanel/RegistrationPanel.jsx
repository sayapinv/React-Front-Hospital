import React, {useState} from 'react';
// import axios from 'axios';
import './RegistrationPanel.css'
import { Link } from 'react-router-dom';






const RegistrationPanel = () => {

    const [ username, setUsername ] = useState('');
    const [ userpass, setUserpass ] = useState('');
    const [ userpassrep, setUserpassrep ] = useState('');

    
    const createAccount = ( e, login , pass , rep) => {
        
        e.preventDefault()
        const arr = userpass.split('')//проверка на наличие числа в строке
        let count = false;
        arr.forEach(element => {
            if(isFinite(element)){
                count = true;
            }
        });

        if ( pass === rep && pass.length >= 6 && count && login.length >= 6){
            console.log('yes')
        }else{
            console.log('no')
        }
    }

    
    return(

        <div className="registration">
                <div className="headreg">
                    <p>Регистрация</p>
                </div>
                <form>
                    <div className="log">
                        <p>Login:</p>
                        <input type="text" value={ username } placeholder = "Login" onChange={(e) => setUsername(e.target.value)} pattern="[A-Za-z]"/>
                    </div>
                    <div className="pass">
                        <p>Password:</p>
                        < input type="password" value={ userpass } placeholder = "Password" onChange={(e) => setUserpass(e.target.value)}/>
                    </div>
                    <div className="repeatpass">
                        <p>Repeat Password:</p>
                        <input type="password" value={ userpassrep } placeholder = "Password" onChange={(e) => setUserpassrep(e.target.value)}/>
                    </div>
                    <button className = "btn_reg" onClick={(e) => createAccount( e, username, userpass , userpassrep )}>Зарегистрироваться</button>
                </form>
                <Link className = "link_reg" to = "/login"><p className="reg_text">Авторизироваться</p></Link>
            </div>
        
    )
    
}






export default RegistrationPanel;