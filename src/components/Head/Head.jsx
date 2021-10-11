import React from 'react';
import minilogo from './minilogo.svg'
import './Head.css';
import { Link } from 'react-router-dom';




const Head = (props) => {
    
    return(

        <div className="head">

            <div className="minilogo">
                <img src={minilogo} alt="nologo" />
            </div>
            <div className="headname">

                <p>{props.value}</p>

            </div>
            <Link to="/login" className={(props.value === 'Приёмы')? 'linkexit' : 'linknone'} >
                <button className={(props.value === 'Приёмы')? 'btn_exit' : 'hiddenexit'}>Выход</button>
            </Link>

            
            
        </div>
    )
    
}






export default Head;