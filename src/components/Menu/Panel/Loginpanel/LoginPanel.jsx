import axios from 'axios';
import React, {useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Loginpanel.css'






const LoginPanel = () => {
    

    let history = useHistory();

    const [ username, setUsername ] = useState('');
    const [ userpass, setUserpass ] = useState('');
    
    const [ errortext, setError ] = useState('');

    const loginAccount = async (login,password) => {

        

        await axios.post('http://localhost:8000/loginAccount',{

                login,
                password
            
            }).then(res => {

                if(res.data.token){
                    

                    localStorage.setItem('token', res.data.token);
                    history.push('/main')
                    
                    
        
                }else{
                    if(res.data.massage){
                        setError(res.data.massage)
                    }else{
                        setError(res.data.errors[0].msg)
                    }
                }
                
            })
        
    }

    
    
    return(

            <div className="registration_log">
                <div className="headreg_log">
                    <p>Войти в систему</p>
                </div>
                    <div className="log_log">
                        <p>Login:</p>
                        <input type="text" name="userlogin" placeholder="Login" value={ username } onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="pass_log">
                        <p>Password:</p>
                        < input type="password" name="userpass" placeholder="Password" value={ userpass } onChange={(e) => setUserpass(e.target.value)}/>
                    </div>
                    <div className="errortext" >{errortext}</div>
                    <button className="btn_reg_log" value="click" onClick={() => loginAccount(username,userpass )}>Войти</button>
                <Link className="link" to="/registration"><p className="reg_text_log">Зарегистрироваться</p></Link>
            </div>
            
            
        
    )
    
}






export default LoginPanel;