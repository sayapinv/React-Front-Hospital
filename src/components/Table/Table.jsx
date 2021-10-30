import './Table.css'
import del from './image/delete_outline-24px 1.svg'
import edit from './image/edit-24px 1.svg'
import moment from 'moment'











const Table = (props) => {

    const {

        reception,
        setIdState,
        setNumState,
        setDel,
        setEdit,
        setName,
        setDoctor,
        setDate,
        setComp

    } = props


    const delFunc = (obj) => {

        setDel(true);
        setIdState(obj._id);
        setNumState(obj.number);


    }

    const editFunc = (obj) => {

        setEdit(true);
        setName(obj.name)
        setDoctor(obj.doctor)
        setDate(moment(obj.date).format('YYYY-MM-DD'))
        setComp(obj.complaint)
        setIdState(obj._id)
        setNumState(obj.number)
    }


    return reception.length > 0 && (
        <>
            <div className="mainTable">
                <div className="Table">
                    <div className="headtable">
                        <p className="name">Имя</p>
                        <p className="doctor">Врач</p>
                        <p className="date">Дата</p>
                        <p className="complaint">Жалобы</p>
                    </div>
                    <div className="bottom-table">
                        {/* Таблица */}
                        {
                            reception.map((obj, index) =>

                                <div className="reception" key={`reception-${index}`}>

                                    <div className="name-table"><p>{obj.name}</p></div>
                                    <div className="doctor-table"><p>{obj.doctor}</p></div>
                                    <div className="date-table"><p>{moment(obj.date).format('DD.MM.YYYY')}</p></div>
                                    <div className="complaint-table"><p>{obj.complaint}</p></div>
                                    <div className="menu-table">
                                        <img src={del} alt="" onClick={() => delFunc(obj)} />
                                        <div className="width"></div>
                                        <img src={edit} alt="" onClick={() => editFunc(obj)} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}






export default Table;

