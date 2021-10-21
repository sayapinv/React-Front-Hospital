import './Create.css'
import React, { useState } from 'react';
import axios from 'axios';



const Create = () => {

    const [ createName, setCreateName ] = useState('');
    const [ createDoctor, setCreateDoctor ] = useState('');
    const [ createDate, setCreateDate ] = useState('');
    const [ createComplaint, setCreateComplaint ] = useState('');

    const CreateReception = async (name,doctor,date,complaint,token) => {

        await axios.post('http://localhost:8000/createreception',{

                name,
                doctor,
                date,
                complaint,
                token
            
            }).then(res => {

                // setCreateName('')
                // setCreateDoctor('')
                // setCreateDate('')
                // setCreateComplaint('')
                console.log(res.data)

            })

    }


    
    return(

        <div className="filter">
            <div className="block">
                <p>Имя:</p>
                <input type="text" onChange={(e) => setCreateName(e.target.value)}/>
            </div>
            <div className="block">
                <p>Врач:</p>
                <select onChange={(e) => setCreateDoctor(e.target.value)}>
                    <option hidden></option>
                    <option>Иванов Иван Иванович</option>
                    <option>Сергеев Сергей Сергеевич</option>
                    <option>Дмитриев Дмитрий Дмитриевич</option>
                </select>
            </div>
            <div className="block">
                <p>Дата:</p>
                <input type="date" onChange={(e) => setCreateDate(e.target.value)}/>
            </div>
            <div className="block">
                <p>Жалобы:</p>
                <input type="text" onChange={(e) => setCreateComplaint(e.target.value)}/>
            </div>
            <button disabled={createName!==''&&createDoctor!==''&&createDate!==''&&createComplaint!==''?false:true} className="btn_create" onClick={() => CreateReception(createName,createDoctor,createDate,createComplaint,localStorage.token)} >Добавить</button>
        </div>
        
    )
    
}






export default Create;