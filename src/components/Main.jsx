import axios from 'axios';
import Head from './Head/Head';
import Table from './Table/Table';
import Create from './Create/Create';
import React, { useState,useEffect } from 'react';





const Main = () => {


    const getReception = async () => {

        await axios.get(`http://localhost:8000/getreceptions?token=${localStorage.token}`).then(res => {
            

            setReception(res.data.data);

        })
    }

    const [ reception, setReception ] = useState([]);

    useEffect ( () => {

        getReception()

    },[])

    
    return(
        <>
        <Head value="Приёмы"/>
        <Create setReception={setReception}/>
        <Table reception={reception} setReception={setReception}/>
        </>
        
    )
    
}






export default Main;