import React from 'react';
import './ModalEdit.css'
import axios from 'axios';






const ModalEdit = ({modalEdit}) => {

    const {

        button_edit,
        setEdit,
        name,
        setName,
        doctor,
        setDoctor,
        date,
        setDate,
        complaint,
        setComp,
        idState,
        numState,
        setReceptionDef,
        processingFunction
        
    } = modalEdit;

    const saveEdit = async () => {

        await axios.patch('http://localhost:8000/updateReception', {

            name: name,
            doctor: doctor,
            date: date,
            complaint: complaint,
            id: idState,
            number: numState


        }).then(res => {

            setEdit(false)
            setReceptionDef(res.data.data)
            processingFunction()

        })

    }

    return (
        <>
            {/* Окно редактирования */}
            <div className={button_edit ? "edit_background" : "edit_background_none"}>
                <div className="editwindow">
                    <div className="editwindow_head">
                        <p>Изменить прием</p>
                    </div>
                    <div className="editwindow_body">
                        <div className="editwindow_name">
                            <p>Имя:</p>
                            <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="editwindow_doctor">
                            <p>Врач:</p>
                            <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                                <option>Иванов Иван Иванович</option>
                                <option>Сергеев Сергей Сергеевич</option>
                                <option>Дмитриев Дмитрий Дмитриевич</option>
                            </select>
                        </div>
                        <div className="editwindow_date">
                            <p>Дата:</p>
                            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                        </div>
                        <div className="editwindow_complaints">
                            <p>Жалобы:</p>
                            <textarea value={complaint} onChange={(e) => setComp(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="editwindow_btn">
                        <button className="btn_cancel" onClick={() => setEdit(false)}>Cancel</button>
                        <button className="btn_save" onClick={() => saveEdit()} >Save</button>
                    </div>
                </div>
            </div>
        </>

    )

}






export default ModalEdit;