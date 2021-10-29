import '../Sorting/Sorting.css'
import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import delFilter from '../Filter/image/delitefilter.svg'


 

const Sorting = (props) => {

    const {

        setClick,
        setOneSort,
        setTwoSort,
        selectOne,
        setSelectOne,
        setFilterDate1,
        setFilterDate2,
        filterDate1,
        filterDate2,
        sortReception,
        getReception,
        filterwin,
        setFilterwin

    } = props



    const [selectTwo, setSelectTwo] = useState('inc');

    const [filterComp, setFilterComp] = useState(false);

    const sendData = () => {

        setOneSort(selectOne)
        setTwoSort(selectTwo)

    }


    useEffect(() => {

        if (selectOne) {
            sendData()
        }

    }, [selectOne])

    useEffect(() => {


        if (selectTwo) {
            sendData()
        }

    }, [selectTwo])


    useEffect(() => {

        setClick(false)

    }, [filterDate1])

    useEffect(() => {

        setClick(false)

    }, [filterDate2])



    const zeroingDel = () => {

        setFilterComp(false)
        setFilterDate1('')
        setFilterDate2('')

        if (selectOne) {


            sortReception()

        } else {

            getReception()
        }






    }






    return (
        <>
            <div className="mainblock">
                <div className="activeblock">
                    <p>Сортировать по:</p>
                    <select
                        className="sortselect"
                        value={selectOne === 'none' ? '' : selectOne}
                        onChange={(e) => setSelectOne(e.target.value)}
                    >
                        <option hidden></option>
                        <option value="name">Имя</option>
                        <option value="doctor">Врач</option>
                        <option value="date">Дата</option>
                        <option value="none">None</option>
                    </select>
                    {selectOne && selectOne !== "none" &&
                        <div className="hiddendiv">
                            <p>Направление:</p>
                            <select className="hiddenselect" onChange={(e) => setSelectTwo(e.target.value)}>
                                <option value="inc">По возрастанию</option>
                                <option value="dec">По убыванию</option>
                            </select>
                        </div>
                    }
                    <Filter
                        setFilterComp={setFilterComp}
                        filterComp={filterComp}
                        filterwin={filterwin}
                        setFilterwin={setFilterwin}
                    />
                </div>
            </div>
            {filterComp &&
                <div className="filterhidden">
                    <div className="filtermain">
                        <div className='blockfilter1' >
                            <p>c:</p>
                            <input type="date" value={filterDate1} onChange={(e) => setFilterDate1(e.target.value)} />
                        </div>
                        <div className='blockfilter2'>
                            <p>по:</p>
                            <input type="date" value={filterDate2} onChange={(e) => setFilterDate2(e.target.value)} />
                        </div>
                        <button onClick={() => setClick(true)} >Фильтровать</button>
                        <img src={delFilter} alt="no image" onClick={() => zeroingDel()} />
                    </div>
                </div>
            }
        </>
    )

}






export default Sorting;