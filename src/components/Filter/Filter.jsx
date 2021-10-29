import create from '../Filter/image/Vector.svg'
import './Filter.css'
import React, { useEffect,useState } from 'react';







const Filter = ({setFilterComp,filterComp,filterwin,setFilterwin}) => {
    
    // const [filterwin,setFilterwin] = useState(false)

    useEffect(() =>{
        if(filterwin){
            setFilterComp(true)
        }
    },[filterwin])

    useEffect(() =>{
        if(filterComp){
            setFilterwin(false)
        }
    },[filterComp])

    const twoFunc = () => {

        setFilterwin(true)
        
    }
    
    
    return(
        <>
        { !filterComp &&
            <div className="filter">
                <p>Добавить фильтр по дате:</p>
                <img src={create} onClick={() => twoFunc()}/>
            </div>
        }
        </>
        
        
        
    )
    
}






export default Filter;