import axios from 'axios';
import Head from './Head/Head';
import Table from './Table/Table';
import Create from './Create/Create';
import React, { useState, useEffect } from 'react';





const Main = () => {

    const [reception, setReception] = useState([]);
    const [oneSort, setOneSort] = useState('');
    const [twoSort, setTwoSort] = useState('');
    const [selectOne, setSelectOne] = useState('');
    const [filterDate1, setFilterDate1] = useState('');////////////////////////////////для фильтра первая дата
    const [filterDate2, setFilterDate2] = useState('');////////////////////////////////для фильтра вторая дата
    const [click, setClick] = useState(false);
    const [receptionDef, setReceptionDef] = useState([]);
    const [filterwin,setFilterwin] = useState(false)
   

    const sortReception = () => {//сортировка 

        const copyCollection = receptionDef.concat()

        if (oneSort) {

            if (oneSort !== 'none') {

                setReception(copyCollection.sort((a, b) => { return a[oneSort] > b[oneSort] ? 1 : -1 }))
                if (twoSort !== 'inc') {
                    setReception(copyCollection.sort((a, b) => { return a[oneSort] > b[oneSort] ? 1 : -1 }).reverse())
                }

            } else {

                getReception()
                setSelectOne('')
                if(!filterwin){
                    filterFunc()
                }
                

            }

        }



    }




    const getReception = async () => {

        await axios.get(`http://localhost:8000/getreceptions?token=${localStorage.token}`).then(res => {

            setReception(res.data.data)
            setReceptionDef(res.data.data)

        })
    }

    useEffect(() => {
        getReception()
    }, [])

    useEffect(() => {

        if (oneSort && twoSort) {
            sortReception()
        }

    }, [oneSort])

    useEffect(() => {

        if (oneSort && twoSort) {

            sortReception()

        }

    }, [twoSort])

    useEffect(() => {

        if (click) {
            filterFunc()
        }

    }, [click])

    

    const filterFunc = () => {//фильтр
        
        const newArr = [];

        if (filterDate1 || filterDate2) {
            
            const copyCollection = receptionDef.concat()
            
            copyCollection.forEach(item => {

                if( item.date >= filterDate1+"T00:00:00.000Z" ){
                    if(!filterDate2){
                        newArr.push(item)
                    }else{
                        if( item.date <= filterDate2+"T00:00:00.000Z" ){
                            newArr.push(item)
                        }
                    }
                    
                    
                }
                if(!filterDate1){

                    if( item.date <= filterDate2+"T00:00:00.000Z" ){
                        newArr.push(item)
                    }

                }
                
            })
            


        }

        setReception(newArr)


    }

    















    return (
        <>
            <Head value="Приёмы" />
            <Create setReception={setReception} />
            <Table
                reception={reception}
                setClick={setClick}
                setReception={setReception}
                setOneSort={setOneSort} setTwoSort={setTwoSort}
                selectOne={selectOne} setSelectOne={setSelectOne}
                setFilterDate1={setFilterDate1}
                setFilterDate2={setFilterDate2}
                filterDate1={filterDate1}
                filterDate2={filterDate2}
                sortReception={sortReception}
                getReception={getReception}
                filterwin={filterwin}
                setFilterwin={setFilterwin}
            />
        </>

    )

}






export default Main;