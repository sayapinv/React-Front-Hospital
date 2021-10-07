import React from 'react';
import './RegistrationPanel.css'






const RegistrationPanel = () => {

    const textClick = (e) => {
        
        e.preventDefault();
        const formData = new FormData(e.target)
        if (formData.get('userlogin')!=="" && formData.get('userpass')!==""){
          console.log(formData.get('userlogin'))//здесь введенные данные login
          console.log(formData.get('userpass'))//здесь введенные данные password
        }
        
    }
    
    return(

        <div className="registration">
                <div className="headreg">
                    <p>Регистрация</p>
                </div>
                <form onSubmit={textClick}>
                    <div className="log">
                        <p>Login:</p>
                        <input type="text" name="userlogin" placeholder="Login"/>
                    </div>
                    <div className="pass">
                        <p>Password:</p>
                        < input type="password" name="userpass"placeholder="Password"/>
                    </div>
                    <div className="repeatpass">
                        <p>Repeat Password:</p>
                        <input type="password" />
                    </div>
                    <button className="btn_reg" >Войти</button>
                </form>
                <p className="reg_text">Reg</p>
            </div>
        
    )
    
}






export default RegistrationPanel;