import React, {useState } from 'react';
import axios from 'axios';
import './RegistrationPanel.css'

import { Link,useHistory } from 'react-router-dom';



const RegistrationPanel = () => {

    
    const [ username, setUsername ] = useState('');
    const [ userpass, setUserpass ] = useState('');
    const [ userpassrep, setUserpassrep ] = useState('');
    const [ errortext, setError ] = useState('')
    
    let history = useHistory();

    
    const createAccount = ( e, login , pass , rep) => { //проверка на правильность заполнения полей

        const addNewAccount = async (login,pass) => {
    
            
            await axios.post('http://localhost:8000/createAccount',{

                login,
                pass
                
            }).then(res => {

                history.push('/main')
                
            })
            
            
        }
        
        e.preventDefault()

        const arr = userpass.split('')//проверка на наличие числа в строке
        let count = false;
        arr.forEach(element => {
            if(isFinite(element)){
                count = true;
            }
        });


        const valid = (str) => {
            return /^\s*(\w+)\s*$/.test(str);
        };

        if(login !== ""  && pass !== "" && rep !== ""){
            if(valid(login)){
                if(valid(pass)){
                    if(login.length >= 6){
                        if(pass.length >= 6){
                            if(pass === rep){
                                if(count){
                                    addNewAccount(login,pass)
                                    setUsername('')
                                    setUserpass('')
                                    setUserpassrep('')
                                    setError('')
                                }else{
                                    setError('Пароль должен содержать хотя бы одно число')
                                }
                            }else{
                                setError('Пароли не совпадают')
                            }
                        }else{
                            setError('Пароль должен содержать не меньше 6 символов')
                        }
                    }else{
                        setError('Логин должен содержать не меньше 6 символов')
                    }
                }else{
                    setError('Пароль должен состоять из латинских букв и цифр')
                }
            }else{
                setError('Логин должен состоять из латинских букв и цифр')
            }
        }else{
            setError('Заполните все поля')
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
                    <button className = "btn_reg" onClick={(e) => createAccount( e, username, userpass , userpassrep )}>Зарегистрироваться</button>
                </form>
                <Link className = "link_reg" to = "/login"><p className="reg_text">Авторизироваться</p></Link>
            </div>
        
    )
    
}






export default RegistrationPanel;