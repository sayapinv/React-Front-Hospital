import React from 'react';
import './Filter.css'






const Filter = () => {
    
    return(

        <div className="filter">
            <div>
                <p>Имя:</p>
                <input type="text" className="inp_filter"/>
            </div>
            <div>
                <p>Врач:</p>
                <select name="" id="" className="inp_filter">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div>
                <p>Дата:</p>
                <input type="date" className="inp_filter"/>
            </div>
            <div>
                <p>Жалобы:</p>
                <input type="text" className="inp_filter"/>
            </div>
            <button className="inp_filter">Добавить</button>
        </div>
        
    )
    
}






export default Filter;