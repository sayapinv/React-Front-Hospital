import React from 'react';
import './Table.css'
import del from './image/delete_outline-24px 1.svg'
import edit from './image/edit-24px 1.svg'





const Table = () => {

    
    const arr = [
        {

        name: "oleg",
        doctor: "starange",
        date: "21.02.2020",
        complaint: "боль"

        },
        {

            name: "sergey",
            doctor: "boom",
            date: "22.02.2020",
            complaint: "зубы"
    
        },
        {

            name: "вася",
            doctor: "пупки",
            date: "23.02.2020",
            complaint: "нога"
    
        },
        {

            name: "oleg",
            doctor: "starange",
            date: "21.02.2020",
            complaint: "боль"
    
            },
            {
    
                name: "sergey",
                doctor: "boom",
                date: "22.02.2020",
                complaint: "зубы"
        
            },
            {
    
                name: "вася",
                doctor: "пупки",
                date: "23.02.2020",
                complaint: "нога"
        
            }
    ]
    
    return(
        <div className="Table">
            <div className="headtable">
                <p className="name">Имя</p>
                <p className="doctor">Врач</p>
                <p className="date">Дата</p>
                <p className="complaint">Жалобы</p>
            </div>
            <div className="bottom-table">
                {
                    arr.map((obj,key) => 
                    <div className="reception" key={key}>
                        <div className="name-table"><p>{obj.name}</p></div>
                        <div className="doctor-table"><p>{obj.doctor}</p></div>
                        <div className="date-table"><p>{obj.date}</p></div>
                        <div className="complaint-table"><p>{obj.complaint}</p></div>
                        <div className="menu-table">
                            <img src={del} alt=""/>
                            <div className="width"></div>
                            <img src={edit} alt=""/>
                        </div>
                    </div>
                    )
                }
                
                    
                
            </div>
            
            
        </div>
        
        
        
        
    )
    
}






export default Table;