import './Table.css'
import del from './image/delete_outline-24px 1.svg'
import edit from './image/edit-24px 1.svg'
import moment from 'moment'
import React, { useState } from 'react';
import axios from 'axios';
import Sorting from '../Sorting/Sorting';







const Table = (props) => {

    const {

        reception,
        setReception,
        setOneSort,
        setTwoSort,
        selectOne,
        setSelectOne,
        setFilterDate1,
        setFilterDate2,
        filterDate1,
        filterDate2,
        setClick,
        sortReception,
        getReception,
        filterwin,
        setFilterwin

    } = props

    const [button_edit, setEdit] = useState(false);
    const [button_del, setDel] = useState(false);
    const [idState, setIdState] = useState('');
    const [numState, setNumState] = useState('');
    const [name, setName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [complaint, setComp] = useState('');



    const delReception = async () => {

        await axios.delete(`http://localhost:8000/deleteReception?id=${idState}&&number=${numState}`).then(res => {

            setReception(res.data.data)
            setDel(false)

        })
    }

    const delFunc = (obj) => {

        setDel(true);
        setIdState(obj._id);
        setNumState(obj.number);

    }

    const editFunc = (obj) => {

        setEdit(true);
        setName(obj.name)
        setDoctor(obj.doctor)
        setDate(moment(obj.date).format('YYYY-MM-DD'))
        setComp(obj.complaint)
        setIdState(obj._id)
        setNumState(obj.number)
    }

    const saveEdit = async () => {

        await axios.patch('http://localhost:8000/updateReception', {

            name: name,
            doctor: doctor,
            date: date,
            complaint: complaint,
            id: idState,
            number: numState


        }).then(res => {

            setReception(res.data.data);
            setEdit(false)

        })

    }

    return reception.length > 0 && (
        <>
            <Sorting
                setClick={setClick}
                setOneSort={setOneSort}
                setTwoSort={setTwoSort}
                selectOne={selectOne}
                setSelectOne={setSelectOne}
                setFilterDate1={setFilterDate1}
                setFilterDate2={setFilterDate2}
                filterDate1={filterDate1}
                filterDate2={filterDate2}
                sortReception={sortReception}
                getReception={getReception}
                filterwin={filterwin}
                setFilterwin={setFilterwin}
            />
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
                                        <img src={del} alt="" onClick={() => delFunc(obj)} />
                                        <div className="width"></div>
                                        <img src={edit} alt="" onClick={() => editFunc(obj)} />
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
                            <button className="btn_delete" onClick={() => delReception()}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}






export default Table;

