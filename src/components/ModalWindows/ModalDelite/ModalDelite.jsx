import React from 'react';
import './ModalDelite.css'
import axios from 'axios';






const ModalDelite = ({modalDelite}) => {

    const {

        idState,
        numState,
        setDel,
        button_del,
        setReceptionDef,
        processingFunction

        
    } = modalDelite;

    const delReception = async () => {

        await axios.delete(`http://localhost:8000/deleteReception?id=${idState}&&number=${numState}`).then(res => {


            
            setDel(false)
            setReceptionDef(res.data.data)
            processingFunction()
            

        })
    }

    

    

    return (
        <>
            {/* Окно удаления */}
            <div className={button_del ? "del_background" : "del_background_none"}>
                <div className="del_window">
                    <div className="head_del">
                        <p>Удалить приём</p>
                    </div>
                    <div className="body_del">
                        <p>Вы действительно хотите удалить прием?</p>
                    </div>
                    <div className="btn_del">
                        <button className="btn_canc" onClick={() => setDel(false)}>Cancel</button>
                        <button className="btn_delete" onClick={() => delReception()}>Delete</button>
                    </div>
                </div>
            </div>
        </>

    )

}






export default ModalDelite;