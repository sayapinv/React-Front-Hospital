import React from 'react';
import { Link } from 'react-router-dom';
import './Loginpanel.css'






const LoginPanel = () => {

    
    
    return(

        <div className="registration_log">
                <div className="headreg_log">
                    <p>Войти в систему</p>
                </div>
                <form>
                    <div className="log_log">
                        <p>Login:</p>
                        <input type="text" name="userlogin" placeholder="Login"/>
                    </div>
                    <div className="pass_log">
                        <p>Password:</p>
                        < input type="password" name="userpass"placeholder="Password"/>
                    </div>
                    <button className="btn_reg_log" >Войти</button>
                </form>
                <Link className="link" to="/registration"><p className="reg_text_log">Зарегистрироваться</p></Link>
            </div>
        
    )
    
}






export default LoginPanel;