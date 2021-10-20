import React from 'react';
import minilogo from './minilogo.svg'
import './Head.css';
import { Link } from 'react-router-dom';




const Head = (props) => {

    const {value} = props

    const delStorage = () => {
        localStorage.removeItem("token")
    }

    return(

        <div className="head">
            <div className="minilogo">
                <img src={minilogo} alt="nologo" />
            </div>
            <div className="headname">

                <p>{value}</p>

            </div>
            <Link to="/login" className={(value === 'Приёмы')? 'linkexit' : 'linknone'} >
                <button onClick={() => delStorage()} className={(value === 'Приёмы')? 'btn_exit' : 'hiddenexit'}>Выход</button>
            </Link>
            

            
            
        </div>
    )
    
}






export default Head;