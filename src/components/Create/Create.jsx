import './Create.css'
import React, { useState } from 'react';
import axios from 'axios';



const Create = ({createProps}) => {

    const {

        setFilterComp,
        setDefaultDescending,
        setReception,
        setReceptionDef

    } = createProps;

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

                
                setCreateName('')
                setCreateDoctor('')
                setCreateDate('')
                setCreateComplaint('')
                setFilterComp('')
                setDefaultDescending('')
                setReception(res.data.data)
                setReceptionDef(res.data.data)

            })

    }

    const variableClass = () => {

        return createName && createDoctor && createDate && createComplaint ? "btn_create" : "btn_none"

    }

    const variableBool = () => {

        return !createName || !createDoctor || !createDate || !createComplaint
      
    }



    
    return(
        <div className="maincreate">
            <div className="create">
                <div className="block">
                    <p>Имя:</p>
                    <input type="text" value={createName} onChange={(e) => setCreateName(e.target.value)}/>
                </div>
                <div className="block">
                    <p>Врач:</p>
                    <select value={createDoctor} onChange={(e) => setCreateDoctor(e.target.value)}>
                        <option hidden></option>
                        <option>Иванов Иван Иванович</option>
                        <option>Сергеев Сергей Сергеевич</option>
                        <option>Дмитриев Дмитрий Дмитриевич</option>
                    </select>
                </div>
                <div className="block">
                    <p>Дата:</p>
                    <input type="date" value={createDate} onChange={(e) => setCreateDate(e.target.value)}/>
                </div>
                <div className="block">
                    <p>Жалобы:</p>
                    <input type="text" value={createComplaint} onChange={(e) => setCreateComplaint(e.target.value)}/>
                </div>
                <button disabled={variableBool()} className={variableClass()} onClick={() => CreateReception(createName,createDoctor,createDate,createComplaint,localStorage.token)}>
                    Добавить
                </button>
            </div>
        </div>
        
        
        
    )
    
}






export default Create;

