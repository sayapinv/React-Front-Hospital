import axios from 'axios';
import Head from './Head/Head';
import Table from './Table/Table';
import Create from './Create/Create';
import React, { useState,useEffect } from 'react';
const jwt = require('jsonwebtoken');

const secret = "SECRET_KEY"

const Main = () => {

    
    const decoded = jwt.verify(localStorage.token, secret);

    const getReception = async () => {

        await axios.get('http://localhost:8000/getreceptions').then(res => {

            // const filterReception = [];

            // res.data.data.forEach(element => {
            //     if(element.number === decoded.id){
            //         filterReception.push(element)
            //     }
            // });
            
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
        <Create setReception={setReception} reception={reception}/>
        <Table reception={reception}/>
        </>
        
    )
    
}






export default Main;