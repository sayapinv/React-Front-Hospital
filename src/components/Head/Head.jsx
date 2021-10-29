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
            <div className={(value === 'Приёмы')? 'linkexit' : 'linknone'}>
                <Link to="/login" className="link">
                    <button onClick={() => delStorage()} className={(value === 'Приёмы')? 'btn_exit' : 'hiddenexit'}>Выход</button>
                </Link>
            </div>
            
            

            
            
        </div>
    )
    
}






export default Head;