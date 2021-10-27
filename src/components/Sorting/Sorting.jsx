import '../Sorting/Sorting.css'
import React, { useEffect, useState } from 'react';




const Sorting = ({setOneSort,setTwoSort}) => {
    
    const [selectOne, setSelectOne] = useState('');
    const [selectTwo, setSelectTwo] = useState('По возрастанию');
    

    useEffect(() => {

        

        if(selectOne){

            setOneSort(selectOne)
            setTwoSort(selectTwo)
        }

    },[selectOne])

    useEffect(() => {


        if(selectTwo === "По убыванию"){

            setOneSort(selectOne)
            setTwoSort(selectTwo)
            
        }
        
    },[selectTwo])




    

    return(

        <div className="mainblock">
            <div className="activeblock">
                <p>Сортировать по:</p>
                <select className="sortselect" onChange={(e) => setSelectOne(e.target.value)}>
                    <option hidden></option>
                    <option>Имя</option>
                    <option>Врач</option>
                    <option>Дата</option>
                    <option>None</option>
                </select>
                {selectOne &&
                <div className="hiddendiv">
                    <p>Направление:</p>
                    <select className="hiddenselect" onChange={(e) => setSelectTwo(e.target.value)}>
                        <option >По возрастанию</option>
                        <option>По убыванию</option>
                    </select>
                </div>
                }
            </div>
        </div>
        
    )
    
}






export default Sorting;