import React from 'react';
import logo from './logo.svg'
import './Menu.css';
import LoginPanel from './Panel/Loginpanel/LoginPanel';
import RegistrationPanel from './Panel/Registrationpanel/RegistrationPanel';





const Menu = (props) => {
    
    const {value} = props


    return(

        <div className="menu">
            <img className="logo" src={logo} alt="nologo" />
            {value ? <LoginPanel/> : <RegistrationPanel/> }
        </div>
    )
    
}






export default Menu;