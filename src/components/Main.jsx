import axios from 'axios';
import Head from './Head/Head';
import Table from './Table/Table';
import Create from './Create/Create';
import React, { useState,useEffect } from 'react';



const Main = () => {

    const [ reception, setReception ] = useState([]);

    const [ oneSort, setOneSort] = useState('');
    const [ twoSort, setTwoSort] = useState('');

    const sortReception = () => {
        console.log(oneSort)
        console.log(twoSort)
    }
    


    
    const getReception = async () => {

        await axios.get(`http://localhost:8000/getreceptions?token=${localStorage.token}`).then(res => {

            setReception(res.data.data)

        })
    }

    useEffect ( () => {
        getReception()
    },[])

    useEffect ( () => {

        if(oneSort){
            sortReception()
        }
        
    },[oneSort])

    useEffect ( () => {

        if(twoSort==="По убыванию"){
            sortReception()
        }
        
    },[twoSort])






    

    



    
    return(
        <>
        <Head value="Приёмы"/>
        <Create setReception={setReception}/>
        <Table reception={reception} setReception={setReception} setOneSort={setOneSort} setTwoSort={setTwoSort}/>
        </>
        
    )
    
}






export default Main;