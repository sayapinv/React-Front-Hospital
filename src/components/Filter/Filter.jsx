
import './Filter.css'
import React, { useEffect,useState } from 'react';
import delFilter from '..//Filter/image/delitefilter.svg'







const Filter = ({ filterProps }) => {

    const [initialValueStart, setInitialValueStart] = useState('');
    const [initialValueEnd, setInitialValueEnd] = useState('');

    const {

        setFilterComp,
        filterComp,
        filterHidden,
        setFilterHidden,
        setFilterStart,
        setFilterEnd,
        processingFunction,


    } = filterProps;

    const zeroingDel = () => {

        
        setFilterStart('')//обнуляем значения фильтра
        setFilterEnd('')//обнуляем значения фильтра
        setInitialValueStart('')//обнуляем значения фильтра
        setInitialValueEnd('')//обнуляем значения фильтра
        setFilterComp(false)//скрываем окно фильтра
        processingFunction()

    }

    useEffect(() => {

        if (filterHidden) {
            setFilterComp(true)
        }
        
    }, [filterHidden])

    useEffect(() => {

        if (filterComp) {
            setFilterHidden(false)
        }

    }, [filterComp])

    const func = () =>{

        setFilterStart(initialValueStart)
        setFilterEnd(initialValueEnd)
        processingFunction()

    }


    return (
        <>
            {filterComp &&
                <div className="filterhidden">
                    <div className="filtermain">
                        <div className='blockfilter1' >
                            <p>c:</p>
                            <input type="date" value={initialValueStart} onChange={(e) => setInitialValueStart(e.target.value)} />
                        </div>
                        <div className='blockfilter2'>
                            <p>по:</p>
                            <input type="date" value={initialValueEnd} onChange={(e) => setInitialValueEnd(e.target.value)} />
                        </div>
                        <button onClick={() => func()} >Фильтровать</button>
                        <img src={delFilter} alt="no image" onClick={() => zeroingDel()} />
                    </div>
                </div>
            }
        </>



    )

}






export default Filter;