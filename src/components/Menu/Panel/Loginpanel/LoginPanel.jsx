import React from 'react';
import { Link } from 'react-router-dom';
import './Loginpanel.css'






const LoginPanel = () => {

    const textClick = (e) => {
        
        e.preventDefault();
        const formData = new FormData(e.target)
        if (formData.get('userlogin')!=="" && formData.get('userpass')!==""){
          console.log(formData.get('userlogin'))//здесь введенные данные login
          console.log(formData.get('userpass'))//здесь введенные данные password
        }
        
    }
    
    return(

        <div className="registration_log">
                <div className="headreg_log">
                    <p>Войти в систему</p>
                </div>
                <form onSubmit={textClick}>
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