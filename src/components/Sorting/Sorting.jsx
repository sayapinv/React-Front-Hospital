import '../Sorting/Sorting.css'
import React, { useEffect, useState } from 'react';





const Sorting = ({sortingProps}) => {

    const {

        setSortBy,
        setSortDescending,
        defaultDescending,
        setDefaultDescending,


    } = sortingProps

    const [selectTwo, setSelectTwo] = useState('inc');

    const sendData = () => {

        setSortBy(defaultDescending)
        setSortDescending(selectTwo)

    }


    useEffect(() => {

        if (defaultDescending) {
            sendData()
        }

    }, [defaultDescending])

    useEffect(() => {


        if (selectTwo) {
            sendData()
        }

    }, [selectTwo])


    return (
        <>
            <p>Сортировать по:</p>
            <select
                className="sortselect"
                value={defaultDescending === 'none' ? '' : defaultDescending}
                onChange={(e) => setDefaultDescending(e.target.value)}
            >
                <option hidden></option>
                <option value="name">Имя</option>
                <option value="doctor">Врач</option>
                <option value="date">Дата</option>
                <option value="none">None</option>
            </select>
            {defaultDescending && defaultDescending !== "none" &&
                <div className="hiddendiv">
                    <p>Направление:</p>
                    <select className="hiddenselect" onChange={(e) => setSelectTwo(e.target.value)}>
                        <option value="inc">По возрастанию</option>
                        <option value="dec">По убыванию</option>
                    </select>
                </div>
            }

        </>
    )

}






export default Sorting;