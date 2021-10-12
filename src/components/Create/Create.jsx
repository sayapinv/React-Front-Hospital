import React from 'react';
import './Create.css'






const Create = () => {
    
    return(

        <div className="filter">
            <div className="block">
                <p>Имя:</p>
                <input type="text" />
            </div>
            <div className="block">
                <p>Врач:</p>
                <select name="" id="" >
                    <option value="1">Иванов Иван Иванович</option>
                    <option value="2">Сергеев Сергей Сергеевич</option>
                    <option value="3">Дмитриев Дмитрий Дмитриевич</option>
                </select>
            </div>
            <div className="block">
                <p>Дата:</p>
                <input type="date"/>
            </div>
            <div className="block">
                <p>Жалобы:</p>
                <input type="text" />
            </div>
            <button className="btn_create" >Добавить</button>
        </div>
        
    )
    
}






export default Create;