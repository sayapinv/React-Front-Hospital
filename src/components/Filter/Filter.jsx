
import './Filter.css'
import React, { useEffect } from 'react';
import delFilter from '..//Filter/image/delitefilter.svg'







const Filter = ({

    setFilterComp,
    filterComp,
    filterHidden,
    setFilterHidden,
    filterStart,
    setFilterStart,
    filterEnd,
    setFilterEnd,
    setClick,
    defaultDescending,
    sortReception,
    getReception

}) => {

    const zeroingDel = () => {

        setFilterComp(false)
        setFilterStart('')
        setFilterEnd('')

        if (defaultDescending) {


            sortReception()

        } else {

            getReception()
        }






    }

    useEffect(() =>{
        if(filterHidden){
            setFilterComp(true)
        }
    },[filterHidden])

    useEffect(() =>{
        if(filterComp){
            setFilterHidden(false)
        }
    },[filterComp])
    
    
    return(
        <>
        {filterComp &&
                <div className="filterhidden">
                    <div className="filtermain">
                        <div className='blockfilter1' >
                            <p>c:</p>
                            <input type="date" value={filterStart} onChange={(e) => setFilterStart(e.target.value)} />
                        </div>
                        <div className='blockfilter2'>
                            <p>по:</p>
                            <input type="date" value={filterEnd} onChange={(e) => setFilterEnd(e.target.value)} />
                        </div>
                        <button onClick={() => setClick(true)} >Фильтровать</button>
                        <img src={delFilter} alt="no image" onClick={() => zeroingDel()} />
                    </div>
                </div>
            }
        </>
        
        
        
    )
    
}






export default Filter;