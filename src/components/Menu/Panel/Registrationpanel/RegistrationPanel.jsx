import React, {useState } from 'react';
import axios from 'axios';
import './RegistrationPanel.css'

import { Link,useHistory } from 'react-router-dom';



const RegistrationPanel = () => {

    
    const [ username, setUsername ] = useState('');
    const [ userpass, setUserpass ] = useState('');
    const [ userpassrep, setUserpassrep ] = useState('');
    const [ errortext, setError ] = useState('');
    
    let history = useHistory();

    const createAccount = async ( login , password , rep) => {

        if ( password === rep){
            await axios.post('http://localhost:8000/createAccount',{

                login,
                password
            
            }).then(res => {
                
                if(res.data.errors){
                    setError(res.data.errors[0].msg)
                }else{
                    history.push('/main')
                }
                

            })
        }else{
            setError('Пароли не совпадают!')
        }


    }

    
    
    
    return(

        <div className="registration">
                <div className="headreg">
                    <p>Регистрация</p>
                </div>
                    <div className="log">
                        <p>Login:</p>
                        <input type="text" value={ username } placeholder = "Login" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="pass">
                        <p>Password:</p>
                        < input type="password" value={ userpass } placeholder = "Password" onChange={(e) => setUserpass(e.target.value)}/>
                    </div>
                    <div className="repeatpass">
                        <p>Repeat Password:</p>
                        <input type="password" value={ userpassrep } placeholder = "Password" onChange={(e) => setUserpassrep(e.target.value)}/>
                    </div>
                    <div className="error"><p className="errortext">{errortext}</p></div>
                    <button className = "btn_reg" value={"click"} onClick={() => createAccount( username, userpass , userpassrep )}>Зарегистрироваться</button>
                <Link className = "link_reg" to = "/login"><p className="reg_text">Авторизироваться</p></Link>
            </div>
        
    )
    
}






export default RegistrationPanel;