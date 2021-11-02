import axios from 'axios';
import Head from './Head/Head';
import Table from './Table/Table';
import Create from './Create/Create';
import React, { useState, useEffect } from 'react';
import Filter from '..//components/Filter/Filter';
import Sorting from '../components/Sorting/Sorting';
import ModalDelite from './ModalWindows/ModalDelite/ModalDelite';
import ModalEdit from './ModalWindows/ModalEdit/ModalEdit';
import create from '../components/Filter/image/Vector.svg'
import { useHistory } from 'react-router-dom';



const Main = () => {

    let history = useHistory();

    const token = localStorage.getItem('token')
    if (!token) {
        history.goBack()
    }

    const [reception, setReception] = useState([]);//коллекция приемов приходящаяя с back
    const [sortBy, setSortBy] = useState('');// Селект сортировки по названию (имя,врач,жалобы)
    const [sortDescending, setSortDescending] = useState('');//Селект сортировки по возрастанию , убыванию
    const [defaultDescending, setDefaultDescending] = useState('');// Значение по умолчанию второго селекта "по возрастанию"

    const [filterStart, setFilterStart] = useState('');//для фильтра первая дата "c"
    const [filterEnd, setFilterEnd] = useState('');//для фильтра вторая дата "по"


    const [receptionDef, setReceptionDef] = useState([]);//дефолтные значения приходящие с сервера

    const [filterHidden, setFilterHidden] = useState(false)
    const [filterComp, setFilterComp] = useState(false);


    const [idState, setIdState] = useState('');//сюда записывается id элемента который нужно удалить или отредактировать
    const [numState, setNumState] = useState('');//сюда записывается number элемента который нужно удалить или отредактировать
    const [button_del, setDel] = useState(false);//модальное окно удаления вылазит если true
    const [button_edit, setEdit] = useState(false);//модальное окно редактирования вылазит если true


    /*Здесь лежат переменные для окна редактирования */

    const [name, setName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [complaint, setComp] = useState('');


    

    const getReception = async () => {//получение приемов

        await axios.get(`http://localhost:8000/getreceptions?token=${localStorage.token}`).then(res => {

            setReceptionDef(res.data.data)
            setReception(res.data.data)

        })
    }


    useEffect(() => {//следим за получением приемов

        getReception()

    }, [])

    useEffect(() => {//следим за получением приемов

        processingFunction()

    }, [receptionDef])





    const twoFunc = () => {//при нажатии на кнопку + выезжает скрытое меню

        setFilterHidden(true)

    }

    const sortReception = (array) => { //сортировка 

        let copyCollection = array;

        if (sortBy) {

            if (sortBy !== 'none') {

                const withFilter = copyCollection.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : -1 })

                if (sortDescending === 'dec') {

                    withFilter.reverse()

                }

                return withFilter

            }

            return array

        }


    }


    const processingFunction = () => {//вход в функцию осуществляется если выбран селект сортировать по или направление
        let newArray = receptionDef.concat()
        if (sortBy && sortDescending) {
            newArray = sortReception(newArray);
        }
        setReception(newArray)
    }


    useEffect(() => {//функция следит за сортировать по

        processingFunction()

    }, [sortBy])

    useEffect(() => {//функция следит за изменением направления

        processingFunction()

    }, [sortDescending])



    const filterFunc = (array) => {//фильтр

        const newArr = [];
        if (filterStart || filterEnd) {
            const copyCollection = array
            copyCollection.forEach(item => {
                if (item.date >= filterStart + "T00:00:00.000Z") {
                    if (!filterEnd) {
                        newArr.push(item)
                    } else {
                        if (item.date <= filterEnd + "T00:00:00.000Z") {
                            newArr.push(item)
                        }
                    }
                }

                if (!filterStart) {
                    if (item.date <= filterEnd + "T00:00:00.000Z") {
                        newArr.push(item)
                    }
                }
            })

            return newArr
        }
    }

    const createProps = {

        setReceptionDef: setReceptionDef,
        processingFunction: processingFunction

    }

    const sortingProps = {
        setSortBy: setSortBy,
        setSortDescending: setSortDescending,
        defaultDescending: defaultDescending,
        setDefaultDescending: setDefaultDescending
    }

    const filterProps = {
        setFilterComp: setFilterComp,
        filterComp: filterComp,
        filterHidden: filterHidden,
        setFilterHidden: setFilterHidden,
        setFilterStart: setFilterStart,
        setFilterEnd: setFilterEnd,
        processingFunction: processingFunction
    }

    const tableProps = {

        reception: (filterStart || filterEnd) ? filterFunc(reception) : reception,
        setIdState: setIdState,
        setNumState: setNumState,
        setEdit: setEdit,
        setName: setName,
        setDoctor: setDoctor,
        setDate: setDate,
        setComp: setComp,
        setDel: setDel

    }

    const modalEdit = {

        button_edit: button_edit,
        setEdit: setEdit,
        doctor: doctor,
        setDoctor: setDoctor,
        name: name,
        setName: setName,
        date: date,
        setDate: setDate,
        complaint: complaint,
        setComp: setComp,
        idState: idState,
        numState: numState,
        setReceptionDef: setReceptionDef,
        processingFunction: processingFunction

    }

    const modalDelite = {

        idState: idState,
        numState: numState,
        setDel: setDel,
        button_del: button_del,
        setReceptionDef: setReceptionDef,
        processingFunction: processingFunction

    }

    return (
        <>
            <Head value="Приёмы" />
            <Create createProps={createProps} />
            <div className="mainblock">
                <div className="activeblock">
                    <Sorting sortingProps={sortingProps} />
                    {!filterComp &&
                        <div className="filter">
                            <p>Добавить фильтр по дате:</p>
                            <img src={create} onClick={() => twoFunc()} />
                        </div>
                    }
                </div>
            </div>
            <Filter filterProps={filterProps} />
            <Table tableProps={tableProps} />
            <ModalEdit modalEdit={modalEdit} />
            <ModalDelite modalDelite={modalDelite} />

        </>

    )

}

export default Main;