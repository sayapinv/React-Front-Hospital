import React from 'react';
import minilogo from './minilogo.svg'
import './Head.css';




const Head = (props) => {
    
    return(

        <div className="head">

            <div className="minilogo">
                <img src={minilogo} alt="nologo" />
            </div>
            <div className="headname">
                { props.value ? <p>Войти в систему</p> : <p>Зарегистрироваться в системе</p>}
            </div>
            
        </div>
    )
    
}






export default Head;