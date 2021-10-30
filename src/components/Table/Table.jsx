import './Table.css'
import del from './image/delete_outline-24px 1.svg'
import edit from './image/edit-24px 1.svg'
import moment from 'moment'
import React, { useState } from 'react';
import axios from 'axios';






const Table = ({ reception,setReception }) => {
    
    const [button_edit, setEdit] = useState(false)
    const [button_del, setDel] = useState(false)
    const [instate, setState] = useState(null)

    const delReception = async (id) => {

        await axios.delete(`http://localhost:8000/deleteReception?id=${id}`).then(res => {
            setReception(res.data.data)
            setDel(false)
        })
        
    }




    return (
        <div className="mainTable">
            <div className="Table">
                <div className="headtable">
                    <p className="name">Имя</p>
                    <p className="doctor">Врач</p>
                    <p className="date">Дата</p>
                    <p className="complaint">Жалобы</p>
                </div>
                <div className="bottom-table">
                    {/* Таблица */}
                    {
                        reception.map((obj, index) =>

                            <div className="reception" key={`reception-${index}`}>

                                <div className="name-table"><p>{obj.name}</p></div>
                                <div className="doctor-table"><p>{obj.doctor}</p></div>
                                <div className="date-table"><p>{moment(obj.date).format('DD.MM.YYYY')}</p></div>
                                <div className="complaint-table"><p>{obj.complaint}</p></div>
                                <div className="menu-table">
                                    <img src={del} alt="" onClick={() => {setDel(true);setState(obj._id);}} />
                                    <div className="width"></div>
                                    <img src={edit} alt="" onClick={() => {setEdit(true);setState(index);}} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Окно редактирования */}
            <div className={button_edit ? "edit_background" : "edit_background_none"}>
                <div className="editwindow">
                    <div className="editwindow_head">
                        <p>Изменить прием</p>
                    </div>
                    <div className="editwindow_body">
                        <div className="editwindow_name">
                            <p>Имя:</p>
                            <input type="text" />
                        </div>
                        <div className="editwindow_doctor">
                            <p>Врач:</p>
                            <select>
                                <option>Иванов Иван Иванович</option>
                                <option>Сергеев Сергей Сергеевич</option>
                                <option>Дмитриев Дмитрий Дмитриевич</option>
                            </select>
                        </div>
                        <div className="editwindow_date">
                            <p>Дата:</p>
                            <input type="date" />
                        </div>
                        <div className="editwindow_complaints">
                            <p>Жалобы:</p>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div className="editwindow_btn">
                        <button className="btn_cancel" onClick={() => setEdit(false)}>Cancel</button>
                        <button className="btn_save" >Save</button>
                    </div>
                </div>
            </div>
            {/* Окно удаления */}
            <div className={button_del ? "del_background" : "del_background_none"}>
                <div className="del_window">
                    <div className="head_del">
                        <p>Удалить приём</p>
                    </div>
                    <div className="body_del">
                        <p>Вы действительно хотите удалить прием?</p>
                    </div>
                    <div className="btn_del">
                        <button className="btn_canc" onClick={() => setDel(false)}>Cancel</button>
                        <button className="btn_delete" onClick={() => delReception(instate)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>




    )

}






export default Table;